import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="contacto" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div ref={ref} className={cn('max-w-2xl mx-auto', isVisible && 'animate-fade-up')}>
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Contacto
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
              ¿Listo para{' '}
              <span className="text-primary">Empezar</span>?
            </h2>
            <p className="text-muted-foreground text-lg">
              Déjanos tus datos y te contactaremos para agendar tu clase de prueba gratuita.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-xl">
            <div className="flex items-center gap-2 mb-8 justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Primera clase gratis</span>
            </div>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                    Nombre Completo
                  </label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    className="bg-muted/50 border-border focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+52 (492) 000-0000"
                    className="bg-muted/50 border-border focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                  Correo Electrónico
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="bg-muted/50 border-border focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                  Mensaje (Opcional)
                </label>
                <Textarea
                  id="message"
                  placeholder="¿En qué programa estás interesado? ¿Tienes alguna pregunta?"
                  rows={4}
                  className="bg-muted/50 border-border focus:border-primary focus:ring-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-golden-dark text-primary-foreground font-semibold py-6 text-lg group"
              >
                Enviar Mensaje
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Al enviar este formulario, aceptas nuestra{' '}
                <a href="#" className="text-primary hover:underline">
                  Política de Privacidad
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
