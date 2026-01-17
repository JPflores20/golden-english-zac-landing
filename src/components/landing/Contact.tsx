import { MessageCircle, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const whatsappNumber = "524921230781";
  const whatsappMessage = encodeURIComponent("Hola, me gustaría solicitar más información sobre los cursos de Golden English.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contacto" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div ref={ref} className={cn('text-center mb-16', isVisible && 'animate-fade-up')}>
            <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Contacto
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
              ¿Listo para <span className="text-primary">Empezar?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Estamos aquí para resolver tus dudas. Contáctanos por el medio que prefieras.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="grid gap-6">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">WhatsApp</h4>
                    <p className="text-muted-foreground">+52 492 123 0781</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">Teléfono</h4>
                    <p className="text-muted-foreground">+52 492 922 4666</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">Dirección</h4>
                    <p className="text-muted-foreground text-sm">
                      Avenida Universidad 321-1er piso, La Loma, Zacatecas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">Nombre</label>
                    <Input placeholder="Tu nombre" className="rounded-xl border-slate-200 focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">Teléfono</label>
                    <Input placeholder="Tu teléfono" className="rounded-xl border-slate-200 focus:border-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Mensaje</label>
                  <Textarea placeholder="¿En qué podemos ayudarte?" className="min-h-[120px] rounded-xl border-slate-200 focus:border-primary" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-xl text-lg font-bold group">
                  Enviar Mensaje
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;