import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
  className?: string;
}

export const NavLink = ({ href, children, scrolled, className }: NavLinkProps) => {
  return (
    <a
      href={href}
      className={cn(
        "relative font-medium transition-colors hover:text-primary",
        // Aquí defines el color: 
        // Si quieres que cambie de color al hacer scroll, usa la condición 'scrolled'.
        // Por ahora lo dejaremos en 'text-secondary' (gris oscuro/azul) para que sea visible siempre.
        scrolled ? "text-secondary" : "text-secondary", 
        className
      )}
    >
      {children}
      {/* Línea animada al pasar el mouse (opcional) */}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
    </a>
  );
};