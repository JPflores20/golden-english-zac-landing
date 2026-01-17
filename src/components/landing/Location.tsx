import { MapPin, Clock, Phone } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const Location = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="ubicacion" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={ref} className={cn('space-y-8', isVisible && 'animate-fade-up')}>
            <div>
              <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
                Nuestra Ubicación
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
                Visítanos en <span className="text-primary">Zacatecas</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Estamos ubicados en una zona central y accesible para tu comodidad.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">Dirección</h4>
                  <p className="text-muted-foreground">
                    Avenida Universidad 321-1er piso, La Loma, 98068 Zacatecas, Zac.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">Horario</h4>
                  <p className="text-muted-foreground">Lunes a Viernes: 7:00 AM - 9:00 PM</p>
                  <p className="text-muted-foreground">Sábados: 9:00 AM - 2:00 PM</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">Teléfono</h4>
                  <p className="text-muted-foreground">+52 492 922 4666</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <iframe
              src="https://maps.app.goo.gl/KBsZUXawgY6EzSBS6?g_st=iw "
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;