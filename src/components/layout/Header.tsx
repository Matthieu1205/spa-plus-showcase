import logoSpaPlus from "@/assets/logo-spa-plus.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Bath,
  ChevronDown,
  Droplets,
  FlowerIcon,
  Hand,
  Menu,
  Scissors,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const serviceSubLinks = [
  { href: "/services#soins-visage", label: "Soins du visage", icon: Sparkles },
  { href: "/services#massages", label: "Massages", icon: Droplets },
  {
    href: "/services#gommages-scrubs",
    label: "Gommages / Scrubs",
    icon: Droplets,
  },
  { href: "/services#hammam", label: "Hammam & Sauna", icon: Bath },
  { href: "/services#onglerie", label: "Onglerie", icon: Hand },
  {
    href: "/services#soins-aminciissants",
    label: "Soins amincissants",
    icon: Sparkles,
  },
  {
    href: "/services#couverture-chauffante",
    label: "Couverture chauffante",
    icon: Sparkles,
  },
  {
    href: "/services#escale-gourmande",
    label: "Escale gourmande",
    icon: Sparkles,
  },
  {
    href: "/services#detentes-et-bien-etre",
    label: "Détentes et bien-être",
    icon: Sparkles,
  },
  { href: "/services#beaute", label: "Escale Beauté", icon: Sparkles },
  {
    href: "/services#soins-capillaires",
    label: "Soins capillaires",
    icon: Sparkles,
  },
  {
    href: "/services#soins-des-cheveux-europeens",
    label: "Soins cheveux européens",
    icon: Sparkles,
  },
  { href: "/services#soins-du-buste", label: "Soins du buste", icon: Sparkles },
  { href: "/services#soins-d-epilation", label: "Épilation", icon: Scissors },
  {
    href: "/services#soins-du-corps",
    label: "Soins du corps",
    icon: FlowerIcon,
  },
  { href: "/services#maquillage", label: "Maquillage", icon: Sparkles },
  {
    href: "/services#soins-de-cheveux",
    label: "Soins cheveux naturels",
    icon: Sparkles,
  },
  { href: "/services#mains-pieds", label: "Mains & Pieds", icon: Hand },
];

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/boutique", label: "Boutique" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
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
          : "bg-transparent py-6",
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
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
              onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
            >
              <Link
                to={link.href}
                className={cn(
                  "font-body text-sm tracking-wide transition-colors relative py-2 flex items-center gap-1",
                  location.pathname === link.href ||
                    (link.hasDropdown &&
                      location.pathname.startsWith("/services"))
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                  "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gold after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left",
                  (location.pathname === link.href ||
                    (link.hasDropdown &&
                      location.pathname.startsWith("/services"))) &&
                    "after:scale-x-100",
                )}
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      isServicesOpen && "rotate-180",
                    )}
                  />
                )}
              </Link>

              {/* Dropdown Menu */}
              {link.hasDropdown && (
                <div
                  className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200",
                    isServicesOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2",
                  )}
                >
                  <div className="bg-background border border-gold/20 rounded-xl shadow-elevated p-3 min-w-[220px]">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-background border-l border-t border-gold/20" />
                    <div className="relative space-y-1">
                      {serviceSubLinks.map((subLink) => (
                        <Link
                          key={subLink.href}
                          to={subLink.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-gold/10 transition-colors group"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <subLink.icon className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                          <span>{subLink.label}</span>
                        </Link>
                      ))}
                      <div className="border-t border-gold/10 mt-2 pt-2">
                        <Link
                          to="/services"
                          className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gold hover:bg-gold/10 transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          Voir tous les services
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
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
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="container-spa py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <div key={link.href}>
              {link.hasDropdown ? (
                <>
                  <button
                    onClick={() =>
                      setIsMobileServicesOpen(!isMobileServicesOpen)
                    }
                    className={cn(
                      "w-full flex items-center justify-between font-display text-lg tracking-wide py-2 transition-colors",
                      location.pathname.startsWith("/services")
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 transition-transform duration-200",
                        isMobileServicesOpen && "rotate-180",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      isMobileServicesOpen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0",
                    )}
                  >
                    <div className="pl-4 py-2 space-y-2 border-l-2 border-gold/30 ml-2">
                      {serviceSubLinks.map((subLink) => (
                        <Link
                          key={subLink.href}
                          to={subLink.href}
                          onClick={() => {
                            setIsOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                          className="flex items-center gap-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <subLink.icon className="w-4 h-4 text-gold" />
                          <span>{subLink.label}</span>
                        </Link>
                      ))}
                      <Link
                        to="/services"
                        onClick={() => {
                          setIsOpen(false);
                          setIsMobileServicesOpen(false);
                        }}
                        className="flex items-center gap-2 py-2 text-gold font-medium"
                      >
                        Voir tous les services
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "font-display text-lg tracking-wide py-2 transition-colors block",
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              )}
            </div>
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
