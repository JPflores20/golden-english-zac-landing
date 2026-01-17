import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const whatsappNumber = "524921230781";
  const whatsappMessage = encodeURIComponent("Hola, me gustaría solicitar más información sobre los cursos de Golden English.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
  const phoneNumber = "+524929224666";
  const address = "Avenida Universidad 321-1er piso, La Loma, Zacatecas";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="contacto" className="py-20 md:py-32 bg-slate-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div ref={ref} className={cn('text-center mb-16', isVisible && 'animate-fade-up')}>
            <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Contacto
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
              ¿Listo para <span className="text-primary">Empezar?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Estamos aquí para resolver tus dudas. Haz clic en cualquiera de nuestras opciones para comunicarte de inmediato.
            </p>
          </div>

          {/* Grid de botones de contacto centrados y sin formulario */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center gap-4 p-8 bg-white rounded-3xl border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="text-green-600 w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-xl text-secondary mb-1">WhatsApp</h4>
                <p className="text-muted-foreground">+52 492 123 0781</p>
              </div>
            </a>

            <a 
              href={`tel:${phoneNumber}`}
              className="flex flex-col items-center text-center gap-4 p-8 bg-white rounded-3xl border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="text-primary w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-xl text-secondary mb-1">Teléfono</h4>
                <p className="text-muted-foreground">+52 492 922 4666</p>
              </div>
            </a>

            <a 
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center gap-4 p-8 bg-white rounded-3xl border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all group sm:col-span-2 lg:col-span-1"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="text-primary w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-xl text-secondary mb-1">Dirección</h4>
                <p className="text-muted-foreground text-sm">
                  Avenida Universidad 321-1er piso, Zacatecas.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;