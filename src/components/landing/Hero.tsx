import { useEffect, useRef } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

// Función de Easing cúbica: Suave pero no se "muere" al final como la exponencial
const easeOutCubic = (x: number): number => {
  return 1 - Math.pow(1 - x, 3);
};

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ end, suffix = "", duration = 1000 }: CounterProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const spanRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current || !spanRef.current) return;

    hasAnimated.current = true;
    const element = spanRef.current;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Aseguramos que nunca exceda 1
      const percentage = Math.min(progress / duration, 1);
      
      // Aplicamos la curva suavizada
      const easedProgress = easeOutCubic(percentage);
      
      const currentCount = Math.floor(easedProgress * end);

      // Solo actualizamos el DOM si el texto cambia (optimización)
      if (element.textContent !== `${currentCount}${suffix}`) {
        element.textContent = `${currentCount}${suffix}`;
      }

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // Aseguramos el final exacto
        element.textContent = `${end}${suffix}`;
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, end, suffix, duration]);

  return (
    <div ref={ref} className="inline-block tabular-nums tracking-tight">
      <span ref={spanRef}>0{suffix}</span>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden"
    >
      {/* Background with overlay */}
      {/* Optimización: translate3d fuerza aceleración por hardware en los gradientes pesados */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-navy to-navy-dark transform-gpu">
        {/* Decorative elements */}
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl will-change-transform" 
          style={{ transform: 'translate3d(0,0,0)' }} 
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-golden-light/10 rounded-full blur-3xl will-change-transform" 
          style={{ transform: 'translate3d(0,0,0)' }} 
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl will-change-transform" 
          style={{ transform: 'translate3d(0,0,0)' }} 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-8 animate-fade-up will-change-transform">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-golden-light text-sm font-medium">
              #1 English School in Zacatecas
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-up will-change-transform" 
            style={{ animationDelay: '100ms' }}
          >
            Domina el Inglés{' '}
            <span className="text-primary">de Forma Natural</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-up will-change-transform" 
            style={{ animationDelay: '200ms' }}
          >
            La metodología más efectiva para hablar, leer y entender inglés con fluidez. 
            Únete a la mejor comunidad de aprendizaje en Zacatecas.
          </p>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10 animate-fade-up will-change-transform" 
            style={{ animationDelay: '400ms' }}
          >
            {/* Stat 1: Generaciones - Duración corta (1s) para evitar 'lag' visual en números bajos */}
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <Counter end={20} suffix="+" duration={1000} />
              </div>
              <div className="text-gray-400 text-sm md:text-base">Generaciones</div>
            </div>

            {/* Stat 2: Años de Experiencia - Duración corta (1s) */}
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <Counter end={17} suffix="+" duration={1000} />
              </div>
              <div className="text-gray-400 text-sm md:text-base">Años de Experiencia</div>
            </div>

            {/* Stat 3: Tasa de Éxito - Duración media (1.5s) para mayor drama */}
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <Counter end={98} suffix="%" duration={1500} />
              </div>
              <div className="text-gray-400 text-sm md:text-base">Tasa de Éxito</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;