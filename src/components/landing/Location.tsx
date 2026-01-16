import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const partners = [
  'Universidad Autónoma',
  'TechCorp México',
  'Hospital Central',
  'Grupo Industrial',
  'Banco Regional',
];

const Location = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { ref: partnersRef, isVisible: partnersVisible } = useScrollAnimation(0.1);

  return (
    <section id="convenios" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div ref={ref} className={cn('grid lg:grid-cols-2 gap-12 items-start', isVisible && 'animate-fade-up')}>
          {/* Map Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="bg-secondary/10 rounded-2xl aspect-[4/3] flex items-center justify-center border border-border overflow-hidden">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground font-medium">Google Maps Placeholder</p>
                <p className="text-sm text-muted-foreground mt-2">Ubicación de Golden English Zac</p>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Ubicación
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Localmente en{' '}
              <span className="text-primary">Zacatecas</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Visítanos en nuestras instalaciones modernas y cómodas, diseñadas para brindarte 
              la mejor experiencia de aprendizaje en el corazón de Zacatecas.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-secondary">Dirección</div>
                  <div className="text-muted-foreground">Av. González Ortega 123, Centro Histórico, Zacatecas, Zac. 98000</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-secondary">Horarios</div>
                  <div className="text-muted-foreground">Lunes a Viernes: 8:00 AM - 8:00 PM</div>
                  <div className="text-muted-foreground">Sábados: 9:00 AM - 2:00 PM</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-secondary">Teléfono</div>
                  <div className="text-muted-foreground">+52 (492) 123-4567</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-secondary">Email</div>
                  <div className="text-muted-foreground">info@goldenenglishzac.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partners/Alliances */}
        <div ref={partnersRef} className={cn('mt-20', partnersVisible && 'animate-fade-up')}>
          <div className="text-center mb-10">
            <span className="inline-block text-primary font-semibold mb-2 tracking-wide uppercase text-sm">
              Convenios
            </span>
            <h3 className="text-2xl font-bold text-secondary">Nuestros Aliados</h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div
                key={partner}
                className="px-8 py-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-muted-foreground font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
