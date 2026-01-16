import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#metodologia', label: 'Metodología' },
  { href: '#cursos', label: 'Cursos' },
  { href: '#convenios', label: 'Convenios' },
  { href: '#contacto', label: 'Contacto' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">GE</span>
            </div>
            <span className="font-bold text-xl text-secondary">
              Golden <span className="text-primary">English</span> Zac
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-secondary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-golden-dark text-primary-foreground font-semibold px-6">
              Reserva tu clase gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-secondary" />
            ) : (
              <Menu className="w-6 h-6 text-secondary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-secondary transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="bg-primary hover:bg-golden-dark text-primary-foreground font-semibold w-full mt-2">
                Reserva tu clase gratis
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
