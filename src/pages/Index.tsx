import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Methodology from "@/components/landing/Methodology";
import Courses from "@/components/landing/Courses";
import Testimonials from "@/components/landing/Testimonials";
import Contact from "@/components/landing/Contact";
import Location from "@/components/landing/Location";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Methodology />
        <Courses />
        <Testimonials />
        {/* Ahora Ubicación aparece primero */}
        <Location /> 
        {/* Y Contacto (con los botones) después */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;