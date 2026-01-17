import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavLink from "../NavLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const whatsappUrl = `https://wa.me/524921230781?text=${encodeURIComponent("Hola, me gustaría agendar una clase de prueba en Golden English.")}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Metodología", href: "#metodologia" },
    { name: "Cursos", href: "#cursos" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Contenedor optimizado para evitar pixelado */}
          <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white border border-slate-100">
            <img 
              src="/logo.jpg" 
              alt="Golden English Logo" 
              className="w-full h-full object-contain"
              style={{ imageRendering: 'auto' }} 
            />
          </div>
          <div className="flex flex-col">
            {/* CAMBIO: Golden English ahora es amarillo (text-primary) */}
            <span className="font-bold text-xl text-primary leading-none">Golden English</span>
            {/* CAMBIO: Zacatecas ahora es azul marino (text-secondary) */}
            <span className="text-[10px] font-bold tracking-widest uppercase text-secondary">Zacatecas</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.name} href={link.href}>
              {link.name}
            </NavLink>
          ))}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-primary/20">
              Agenda tu Cita
            </Button>
          </a>
        </div>

        <button className="md:hidden text-secondary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 p-4 shadow-xl animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-secondary font-medium px-4 py-2 hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-primary text-white py-6 rounded-xl font-bold text-lg">
                Agenda tu Clase
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;