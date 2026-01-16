import { useEffect, useState } from 'react';
import { 
  Baby, Briefcase, Building2, GraduationCap, ArrowRight, LucideIcon 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

// Mapa para convertir el texto de Firebase en iconos reales
const iconMap: Record<string, LucideIcon> = {
  Baby: Baby,
  Briefcase: Briefcase,
  Building2: Building2,
  GraduationCap: GraduationCap,
};

interface CourseData {
  id: string;
  title: string;
  titleEs: string;
  description: string;
  features: string[];
  color: string;
  iconName: string;
}

const Courses = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "courses"));
        const coursesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as CourseData[];
        setCourses(coursesData);
      } catch (error) {
        console.error("Error cargando cursos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

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

        {loading ? (
           <div className="flex justify-center py-10">
             <p className="text-muted-foreground animate-pulse">Cargando cursos...</p>
           </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

interface CourseCardProps {
  course: CourseData;
  index: number;
}

const CourseCard = ({ course, index }: CourseCardProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const Icon = iconMap[course.iconName] || Baby;

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