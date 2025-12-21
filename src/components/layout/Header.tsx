import logoSpaPlus from "@/assets/logo-spa-plus.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/services", label: "Services" },
  { href: "/boutique", label: "Boutique" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-spa flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src={logoSpaPlus}
            alt="SPA Plus - Centre de Bien-être"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "font-body text-sm tracking-wide transition-colors relative py-2",
                location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
                "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gold after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left",
                location.pathname === link.href && "after:scale-x-100"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button variant="gold" asChild>
            <Link to="/contact">Réserver</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-elevated transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container-spa py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "font-display text-lg tracking-wide py-2 transition-colors",
                location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="gold" className="mt-4" asChild>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Réserver
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};
