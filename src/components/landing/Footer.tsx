import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: MessageCircle, href: '#', label: 'WhatsApp' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">GE</span>
            </div>
            <span className="font-bold text-xl text-white">
              Golden <span className="text-primary">English</span> Zac
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              );
            })}
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Golden English Zac. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
