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
                  <p className="text-muted-foreground">Lunes a Viernes: 8:00 am - 1:00 pm y 4:00 pm - 8:00 pm</p>
                  <p className="text-muted-foreground">Sábados: 8:00 am - 1:00 pm</p>
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

          <div className="h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.032646399623!2d-102.57864822550756!3d22.764188726053805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86824e9301980899%3A0xc07871b0583a677e!2sAv%20Universidad%20321%2C%20La%20Loma%2C%2098060%20Zacatecas%2C%20Zac.!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
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