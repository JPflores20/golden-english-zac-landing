import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className }: NavLinkProps) => {
  return (
    <a
      href={href}
      className={cn(
        "relative font-medium transition-colors hover:text-primary text-secondary",
        className
      )}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
    </a>
  );
};

export default NavLink; // Se añade el export por defecto para solucionar el error