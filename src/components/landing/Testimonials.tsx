import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'María González',
    role: 'Business English',
    avatar: 'MG',
    rating: 5,
    quote: 'Golden English cambió mi carrera. Ahora puedo comunicarme con confianza en reuniones internacionales. La metodología natural hace que aprender sea fácil y divertido.',
  },
  {
    name: 'Carlos Ramírez',
    role: 'TOEFL Prep',
    avatar: 'CR',
    rating: 5,
    quote: 'Logré un puntaje de 110 en el TOEFL gracias a la preparación intensiva. Los profesores son excelentes y el material muy completo.',
  },
  {
    name: 'Ana López',
    role: 'Adults Program',
    avatar: 'AL',
    rating: 5,
    quote: 'Después de años intentando aprender inglés, finalmente encontré el método correcto. En 6 meses ya podía mantener conversaciones fluidas.',
  },
  {
    name: 'Roberto Martínez',
    role: 'Kids & Teens',
    avatar: 'RM',
    rating: 5,
    quote: 'Mi hijo de 10 años ama sus clases. Ha mejorado muchísimo y ahora ve películas en inglés sin problemas. ¡Increíble!',
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div ref={ref} className={cn('text-center mb-16', isVisible && 'animate-fade-up')}>
          <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Lo Que Dicen{' '}
            <span className="text-primary">Nuestros Estudiantes</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Historias reales de estudiantes que han transformado sus vidas con nuestros programas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={cn(
        'group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300',
        isVisible && 'animate-fade-up'
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Quote Icon */}
      <Quote className="w-8 h-8 text-primary/40 mb-4" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-300 mb-6 text-sm leading-relaxed">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-primary font-semibold text-sm">{testimonial.avatar}</span>
        </div>
        <div>
          <div className="font-semibold text-white text-sm">{testimonial.name}</div>
          <div className="text-xs text-gray-400">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
