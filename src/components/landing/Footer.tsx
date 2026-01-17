import { Facebook, Instagram, MessageCircle, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  const whatsappUrl = `https://wa.me/524921230781?text=${encodeURIComponent("Hola, me gustaría solicitar más información.")}`;
  const tiktokUrl = "https://www.tiktok.com/@golden.english.za?_r=1&_t=ZS-938BmiZ4F7I";
  const facebookUrl = "https://www.facebook.com/share/1H8BJfpHmJ/?mibextid=wwXIfr";
  const instagramUrl = "https://www.instagram.com/golden.english.zacatecas?igsh=MTVvdG5kZTNwc2RyZA==";
  const phoneNumber = "+524929224666";
  const address = "Avenida Universidad 321, La Loma, Zacatecas";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

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
              Formando líderes bilingües a través de una metodología natural y efectiva.
            </p>
            <div className="flex gap-4">
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all"><Facebook size={20} /></a>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all"><Instagram size={20} /></a>
              <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all"><MessageCircle size={20} /></a>
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
              <li>Teens Program</li>
              <li>Adults Program</li>
              <li>Business English</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contacto Directo</h4>
            <ul className="space-y-4">
              <li>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 text-gray-400 hover:text-primary transition-colors group">
                  <MapPin size={20} className="text-primary shrink-0" />
                  <span>Avenida Universidad 321, Zacatecas.</span>
                </a>
              </li>
              <li>
                <a href={`tel:${phoneNumber}`} className="flex gap-3 text-gray-400 hover:text-primary transition-colors group">
                  <Phone size={20} className="text-primary shrink-0" />
                  <span>+52 492 922 4666</span>
                </a>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Clock size={20} className="text-primary shrink-0" />
                <div className="text-xs">
                  <p>L-V: 8am-1pm / 4pm-8pm</p>
                  <p>Sáb: 8am-1pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Sección de Copyright y Créditos del Desarrollador */}
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p className="mb-4">© {new Date().getFullYear()} Golden English Zacatecas. Todos los derechos reservados.</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-2">
            <div>
              <span>Desarrollado por </span>
              <a 
                href="https://portafolio-jlfc.web.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                JLFC
              </a>
            </div>
            
            <span className="hidden md:block mx-2 text-gray-700">|</span>
            
            <a 
              href="https://portafolio-jlfc.web.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2 group"
            >
              <span>¿Quieres un sitio web así?</span>
              <span className="text-primary group-hover:underline underline-offset-4">
                Contáctame aquí
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;