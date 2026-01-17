import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const whatsappUrl = `https://wa.me/524921230781?text=${encodeURIComponent("Hola, me gustaría solicitar más información.")}`;
  const phoneNumber = "+524929224666";
  const address = "Avenida Universidad 321-1er piso, Zacatecas";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="contacto" className="py-20 md:py-32 bg-slate-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Contacto</span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">¿Listo para <span className="text-primary">Empezar?</span></h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href={whatsappUrl} target="_blank" className="flex flex-col items-center text-center gap-4 p-8 bg-white rounded-3xl border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="text-green-600 w-7 h-7" />
              </div>
              <h4 className="font-bold text-secondary">WhatsApp</h4>
              <p className="text-muted-foreground text-sm">+52 492 123 0781</p>
            </a>

            <a href={`tel:${phoneNumber}`} className="flex flex-col items-center text-center gap-4 p-8 bg-white rounded-3xl border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="text-primary w-7 h-7" />
              </div>
              <h4 className="font-bold text-secondary">Teléfono</h4>
              <p className="text-muted-foreground text-sm">+52 492 922 4666</p>
            </a>

            <a href={mapsUrl} target="_blank" className="flex flex-col items-center text-center gap-4 p-8 bg-white rounded-3xl border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="text-primary w-7 h-7" />
              </div>
              <h4 className="font-bold text-secondary">Dirección</h4>
              <p className="text-muted-foreground text-xs">Av. Universidad 321, Zacatecas.</p>
            </a>

            <div className="flex flex-col items-center text-center gap-4 p-8 bg-white rounded-3xl border border-slate-100">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="text-primary w-7 h-7" />
              </div>
              <h4 className="font-bold text-secondary">Horario</h4>
              <div className="text-muted-foreground text-xs space-y-1">
                <p>L-V: 8am-1pm / 4pm-8pm</p>
                <p>Sáb: 8am-1pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;