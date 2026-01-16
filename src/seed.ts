import { collection, addDoc } from "firebase/firestore"; 
import { db } from "./lib/firebase";

// Datos extraídos de tu archivo original Courses.tsx
const coursesData = [
  {
    title: 'Kids & Teens',
    titleEs: 'Niños y Adolescentes',
    description: 'Programas diseñados especialmente para jóvenes aprendices. Clases dinámicas y divertidas que fomentan el amor por el idioma.',
    features: ['Grupos pequeños', 'Actividades interactivas', 'Seguimiento personalizado'],
    color: 'bg-blue-500/10 text-blue-600',
    iconName: 'Baby' 
  },
  {
    title: 'Adults & Professionals',
    titleEs: 'Adultos y Profesionales',
    description: 'Cursos flexibles para adultos que buscan mejorar sus habilidades de comunicación en inglés para su vida personal y profesional.',
    features: ['Horarios flexibles', 'Enfoque práctico', 'Certificación incluida'],
    color: 'bg-green-500/10 text-green-600',
    iconName: 'Briefcase'
  },
  {
    title: 'Business English',
    titleEs: 'Inglés de Negocios',
    description: 'Domina el inglés corporativo: presentaciones, negociaciones, emails profesionales y más.',
    features: ['Casos de estudio reales', 'Vocabulario especializado', 'Simulaciones de negocios'],
    color: 'bg-purple-500/10 text-purple-600',
    iconName: 'Building2'
  },
  {
    title: 'TOEFL/Certification Prep',
    titleEs: 'Preparación TOEFL',
    description: 'Preparación intensiva para exámenes oficiales. Estrategias probadas para obtener los mejores resultados.',
    features: ['Material oficial', 'Exámenes de práctica', 'Garantía de resultados'],
    color: 'bg-orange-500/10 text-orange-600',
    iconName: 'GraduationCap'
  },
];

// Datos extraídos de tu archivo original Testimonials.tsx
const testimonialsData = [
  {
    name: 'María González',
    role: 'Business English',
    avatar: 'MG',
    rating: 5,
    quote: 'Golden English cambió mi carrera. Ahora puedo comunicarme con confianza en reuniones internacionales. La metodología natural hace que aprender sea fácil y divertido.',
  },
  {
    name: 'Carlos Ramírez',
    role: 'TOEFL Prep',
    avatar: 'CR',
    rating: 5,
    quote: 'Logré un puntaje de 110 en el TOEFL gracias a la preparación intensiva. Los profesores son excelentes y el material muy completo.',
  },
  {
    name: 'Ana López',
    role: 'Adults Program',
    avatar: 'AL',
    rating: 5,
    quote: 'Después de años intentando aprender inglés, finalmente encontré el método correcto. En 6 meses ya podía mantener conversaciones fluidas.',
  },
  {
    name: 'Roberto Martínez',
    role: 'Kids & Teens',
    avatar: 'RM',
    rating: 5,
    quote: 'Mi hijo de 10 años ama sus clases. Ha mejorado muchísimo y ahora ve películas en inglés sin problemas. ¡Increíble!',
  },
];

export const uploadData = async () => {
  if (!confirm("¿Estás seguro de que quieres subir los datos a Firebase? Esto creará duplicados si ya existen.")) return;
  
  console.log("Iniciando carga de datos...");
  try {
    const coursesRef = collection(db, "courses");
    for (const course of coursesData) {
      await addDoc(coursesRef, course);
      console.log(`Curso subido: ${course.title}`);
    }

    const testimonialsRef = collection(db, "testimonials");
    for (const testimonial of testimonialsData) {
      await addDoc(testimonialsRef, testimonial);
      console.log(`Testimonio subido: ${testimonial.name}`);
    }

    alert("¡Datos subidos correctamente a Firebase!");
  } catch (e) {
    console.error("Error subiendo datos: ", e);
    alert("Error. Revisa la consola (F12).");
  }
};