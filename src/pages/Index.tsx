import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Methodology from '@/components/landing/Methodology';
import Courses from '@/components/landing/Courses';
import Testimonials from '@/components/landing/Testimonials';
import Location from '@/components/landing/Location';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Methodology />
      <Courses />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
