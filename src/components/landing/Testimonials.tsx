import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface TestimonialData {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "testimonials"));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as TestimonialData[];
        setTestimonials(data);
      } catch (error) {
        console.error("Error cargando testimonios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div ref={ref} className={cn('text-center mb-16', isVisible && 'animate-fade-up')}>
          <span className="inline-block text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Lo Que Dicen{' '}
            <span className="text-primary">Nuestros Estudiantes</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Historias reales de estudiantes que han transformado sus vidas con nuestros programas.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-10">
            <p className="text-gray-400 animate-pulse">Cargando testimonios...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: TestimonialData;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={cn(
        'group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300',
        isVisible && 'animate-fade-up'
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Quote className="w-8 h-8 text-primary/40 mb-4" />

      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>

      <p className="text-gray-300 mb-6 text-sm leading-relaxed">
        "{testimonial.quote}"
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-primary font-semibold text-sm">{testimonial.avatar}</span>
        </div>
        <div>
          <div className="font-semibold text-white text-sm">{testimonial.name}</div>
          <div className="text-xs text-gray-400">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;