import { useEffect, useState } from 'react';
import { Star, Quote, Maximize2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface TestimonialData {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

const GALLERY_IMAGES = [
  '/images/testimonials/1.jpeg',
  '/images/testimonials/2.jpeg',
  '/images/testimonials/3.jpeg',
  '/images/testimonials/4.jpeg',
  '/images/testimonials/5.jpeg',
  '/images/testimonials/6.jpeg',
  '/images/testimonials/7.jpeg',
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
    <section className="py-20 md:py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
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

        {/* Testimonios de Texto */}
        {loading ? (
          <div className="flex justify-center py-10">
            <p className="text-gray-400 animate-pulse">Cargando testimonios...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        )}

        {/* Carrete de Fotos con Formato Ancho */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Nuestra <span className="text-primary">Comunidad</span> en Acción
            </h3>
            <p className="text-gray-400">Haz clic en las imágenes para ampliarlas</p>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {GALLERY_IMAGES.map((imagePath, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2">
                  <div 
                    onClick={() => setSelectedImage(imagePath)}
                    className="group relative overflow-hidden rounded-2xl aspect-video border border-white/10 cursor-pointer"
                  >
                    <img
                      src={imagePath}
                      alt={`Estudiante Golden English ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Overlay al hacer hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-primary/90 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Maximize2 className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 border-primary/50 text-primary hover:bg-primary hover:text-white" />
              <CarouselNext className="static translate-y-0 border-primary/50 text-primary hover:bg-primary hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>

      {/* Modal para ver la imagen completa */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] md:max-w-5xl p-0 border-none bg-transparent shadow-none overflow-hidden flex items-center justify-center">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Imagen completa" 
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index }: { testimonial: TestimonialData; index: number }) => {
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
      <p className="text-gray-300 mb-6 text-sm leading-relaxed italic">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-primary font-semibold text-sm">
            {testimonial.name.charAt(0)}
          </span>
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