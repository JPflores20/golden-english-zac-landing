import { Headphones, BookOpen, Globe, Users } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const methodologySteps = [
  {
    icon: Headphones,
    title: 'Escucha y Habla Primero',
    titleEn: 'Listen & Speak First',
    description: 'Comenzamos con la inmersión auditiva, tal como aprendiste tu idioma nativo. Hablarás desde el primer día.',
  },
  {
    icon: BookOpen,
    title: 'Gramática Después',
    titleEn: 'Grammar Later',
    description: 'La gramática se introduce naturalmente después de que hayas desarrollado confianza al hablar.',
  },
  {
    icon: Globe,
    title: 'Práctica del Mundo Real',
    titleEn: 'Real-world Practice',
    description: 'Situaciones reales, conversaciones auténticas y contenido relevante para tu vida diaria.',
  },
  {
    icon: Users,
    title: 'Comunidad de Apoyo',
    titleEn: 'Supportive Community',
    description: 'Un ambiente positivo donde puedes cometer errores y crecer junto a otros estudiantes.',
  },
];

const Methodology = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="metodologia" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div ref={ref} className={cn('text-center mb-16', isVisible && 'animate-fade-up')}>
          <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
            Nuestra Metodología
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
            Nuestro Sistema de{' '}
            <span className="text-primary">Aprendizaje Natural</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubre cómo nuestro enfoque único te ayudará a dominar el inglés de manera efectiva y divertida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodologySteps.map((step, index) => (
            <MethodologyCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface MethodologyCardProps {
  step: typeof methodologySteps[0];
  index: number;
}

const MethodologyCard = ({ step, index }: MethodologyCardProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className={cn(
        'group bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300',
        isVisible && 'animate-fade-up'
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-secondary mb-2">{step.title}</h3>
      <p className="text-sm text-primary font-medium mb-3">{step.titleEn}</p>
      <p className="text-muted-foreground">{step.description}</p>
    </div>
  );
};

export default Methodology;
