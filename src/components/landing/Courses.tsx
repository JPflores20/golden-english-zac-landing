import { Baby, Briefcase, Building2, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const courses = [
  {
    icon: Baby,
    title: 'Kids & Teens',
    titleEs: 'Niños y Adolescentes',
    description: 'Programas diseñados especialmente para jóvenes aprendices. Clases dinámicas y divertidas que fomentan el amor por el idioma.',
    features: ['Grupos pequeños', 'Actividades interactivas', 'Seguimiento personalizado'],
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    icon: Briefcase,
    title: 'Adults & Professionals',
    titleEs: 'Adultos y Profesionales',
    description: 'Cursos flexibles para adultos que buscan mejorar sus habilidades de comunicación en inglés para su vida personal y profesional.',
    features: ['Horarios flexibles', 'Enfoque práctico', 'Certificación incluida'],
    color: 'bg-green-500/10 text-green-600',
  },
  {
    icon: Building2,
    title: 'Business English',
    titleEs: 'Inglés de Negocios',
    description: 'Domina el inglés corporativo: presentaciones, negociaciones, emails profesionales y más.',
    features: ['Casos de estudio reales', 'Vocabulario especializado', 'Simulaciones de negocios'],
    color: 'bg-purple-500/10 text-purple-600',
  },
  {
    icon: GraduationCap,
    title: 'TOEFL/Certification Prep',
    titleEs: 'Preparación TOEFL',
    description: 'Preparación intensiva para exámenes oficiales. Estrategias probadas para obtener los mejores resultados.',
    features: ['Material oficial', 'Exámenes de práctica', 'Garantía de resultados'],
    color: 'bg-orange-500/10 text-orange-600',
  },
];

const Courses = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="cursos" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div ref={ref} className={cn('text-center mb-16', isVisible && 'animate-fade-up')}>
          <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
            Nuestros Programas
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
            Cursos Diseñados{' '}
            <span className="text-primary">Para Ti</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Encuentra el programa perfecto para tus necesidades y objetivos de aprendizaje.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={course.title} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CourseCardProps {
  course: typeof courses[0];
  index: number;
}

const CourseCard = ({ course, index }: CourseCardProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const Icon = course.icon;

  return (
    <div
      ref={ref}
      className={cn(
        'group bg-card rounded-2xl p-8 border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300',
        isVisible && 'animate-fade-up'
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-6">
        <div className={cn('w-16 h-16 rounded-xl flex items-center justify-center shrink-0', course.color)}>
          <Icon className="w-8 h-8" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-secondary mb-1">{course.title}</h3>
          <p className="text-primary font-medium text-sm mb-4">{course.titleEs}</p>
          <p className="text-muted-foreground mb-6">{course.description}</p>
          
          <ul className="space-y-2 mb-6">
            {course.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                {feature}
              </li>
            ))}
          </ul>

          <Button variant="outline" className="group/btn border-primary/30 hover:bg-primary hover:text-primary-foreground">
            Más Información
            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
