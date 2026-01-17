import { Clock, Calendar, CheckCircle2, Zap, BookOpen, Users } from 'lucide-react';

const Methodology = () => {
  return (
    <section id="metodologia" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Encabezado de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6 animate-fade-up will-change-transform">
            Aprendizaje <span className="text-primary">Acelerado y Efectivo</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up will-change-transform delay-100">
            Olvídate de la gramática aburrida. Nuestro enfoque se centra en la conversación real 
            y la inmersión práctica desde el primer día.
          </p>
        </div>

        {/* --- BLOQUE DESTACADO: 4 HORAS x 12 MESES --- */}
        <div className="max-w-4xl mx-auto mb-20 animate-fade-up will-change-transform delay-200">
          <div className="relative bg-gradient-to-r from-navy to-navy-light rounded-3xl p-1 overflow-hidden shadow-2xl">
            
            {/* Efecto de brillo animado en el borde */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 animate-pulse" style={{ backgroundSize: '200% 100%' }} />
            
            <div className="relative bg-navy rounded-[22px] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-10">
              
              {/* Texto del bloque destacado */}
              <div className="text-center md:text-left flex-1">
                <div className="inline-block px-3 py-1 bg-primary/20 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                  Programa Golden
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                  Tu Compromiso para el Éxito
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Diseñamos un formato que respeta tu tiempo pero maximiza tu exposición al idioma. Sin rellenos, solo práctica efectiva.
                </p>
              </div>

              {/* Tarjetas de Datos (Los números que pediste resaltar) */}
              <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
                
                {/* Tarjeta: 4 Horas */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center flex-1 min-w-[140px] transform hover:scale-105 transition-transform duration-300 group">
                  <div className="bg-primary/20 p-3 rounded-full mb-3 group-hover:bg-primary/30 transition-colors">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-4xl font-bold text-white mb-1">4</span>
                  <span className="text-xs text-gray-300 uppercase tracking-wider font-semibold">Horas / Semana</span>
                </div>

                {/* Tarjeta: 12 Meses (Resaltada en Dorado) */}
                <div className="bg-primary rounded-2xl p-6 shadow-lg shadow-primary/20 flex flex-col items-center justify-center flex-1 min-w-[140px] transform hover:scale-105 transition-transform duration-300 text-navy">
                  <div className="bg-navy/10 p-3 rounded-full mb-3">
                    <Calendar className="w-6 h-6 text-navy" />
                  </div>
                  <span className="text-4xl font-bold mb-1">12</span>
                  <span className="text-xs text-navy/80 uppercase tracking-wider font-bold">Meses de Duración</span>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------ */}

        {/* Grid de Características (Features) */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-up will-change-transform"
              style={{ animationDelay: `${300 + (index * 100)}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Enfoque Comunicativo",
    description: "Priorizamos la comunicación oral sobre la memorización de reglas. Aprenderás hablando desde el primer día en situaciones reales."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Grupos Reducidos",
    description: "Atención personalizada garantizada. Pocos estudiantes por clase para asegurar que siempre tengas tiempo para participar."
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Material Dinámico",
    description: "Recursos modernos y relevantes. Olvídate de los libros de texto anticuados; aprende con música, noticias y cultura actual."
  }
];

export default Methodology;