import { Facebook, Instagram, MessageCircle, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const whatsappUrl = `https://wa.me/524921230781?text=${encodeURIComponent("Hola, me gustaría solicitar más información sobre los cursos de Golden English.")}`;

  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-primary leading-none">Golden English</span>
              <span className="text-xs font-medium tracking-widest uppercase text-gray-400 mt-1">Zacatecas</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Formando líderes bilingües a través de una metodología natural y efectiva desde hace más de una década.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-gray-400 hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#metodologia" className="text-gray-400 hover:text-primary transition-colors">Metodología</a></li>
              <li><a href="#cursos" className="text-gray-400 hover:text-primary transition-colors">Nuestros Cursos</a></li>
              <li><a href="#ubicacion" className="text-gray-400 hover:text-primary transition-colors">Ubicación</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Nuestros Cursos</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Kids & Teens</li>
              <li>Adults Program</li>
              <li>Business English</li>
              <li>TOEFL Prep</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400">
                <MapPin size={20} className="text-primary shrink-0" />
                <span>Avenida Universidad 321-1er piso, La Loma, Zacatecas.</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Phone size={20} className="text-primary shrink-0" />
                <span>+52 492 922 4666</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <MessageCircle size={20} className="text-primary shrink-0" />
                <span>+52 492 123 0781</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Golden English Zacatecas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;