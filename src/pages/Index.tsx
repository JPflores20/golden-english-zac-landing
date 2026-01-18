import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Methodology from "@/components/landing/Methodology";
import Courses from "@/components/landing/Courses";
import Testimonials from "@/components/landing/Testimonials";
import Contact from "@/components/landing/Contact";
import Location from "@/components/landing/Location";
import Footer from "@/components/landing/Footer";
import PaymentOptions from "@/components/landing/PaymentOptions"; // <--- Importar aquí

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Methodology />
        <Courses />
        <Testimonials />
        
        {/* Nueva sección de pagos añadida aquí */}
        <PaymentOptions />

        <Location /> 
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;