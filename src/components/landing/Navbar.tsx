import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { NavLink } from '../NavLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Metodología', href: '#metodologia' },
    { name: 'Cursos', href: '#cursos' },
    { name: 'Ubicación', href: '#ubicacion' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled || isOpen ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            {/* Logo */}
            <div className="relative h-12 w-12 overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/logo.jpg" 
                alt="Golden English Logo" 
                className="object-contain h-full w-full rounded-full" 
              />
            </div>
            
            <div className="flex flex-col">
              {/* CAMBIO 1: "Golden English" ahora usa text-primary */}
              <span className={cn(
                "font-bold text-xl leading-none transition-colors",
                scrolled || isOpen ? "text-primary" : "text-primary"
              )}>
                Golden English
              </span>
              {/* CAMBIO 2: "Zacatecas" ahora usa text-secondary */}
              <span className="text-xs text-secondary font-medium tracking-widest uppercase">
                Zacatecas
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href} scrolled={scrolled}>
                {link.name}
              </NavLink>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Inscribirse Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg animate-fade-in">
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-secondary hover:text-primary font-medium py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                Inscribirse Ahora
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;