import logoSpaPlus from "@/assets/logo-spa-plus.jpg";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-spa py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src={logoSpaPlus}
                alt="SPA Plus Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Un havre de paix dédié à votre bien-être. Découvrez une expérience
              unique de relaxation et de beauté pour femmes et hommes.
            </p>
            <div className="flex gap-4">
              <a
                href="spa_plus_abidjan"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="spa.plus.abidjan"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/a-propos", label: "À Propos" },
                { href: "/services", label: "Services" },
                { href: "/boutique", label: "Boutique" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {[
                "Massages Relaxants",
                "Soins du Visage",
                "Hammam & Spa",
                "Soins Esthétiques",
                "Rituels Bien-être",
              ].map((service) => (
                <li key={service}>
                  <span className="text-background/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Ivoir Golf Club
                  <br /> Abidjan. Radisson Blu hotel
                  <br /> Abidjan. Hotel Président
                  <br /> Yamoussokro. Hotel Ressort Yamousokrou.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+225 0759985298"
                  className="text-background/70 text-sm hover:text-gold transition-colors"
                >
                  +225 0759985298
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:contact@spapplus.fr"
                  className="text-background/70 text-sm hover:text-gold transition-colors"
                >
                  spa-plus@aviso.ci
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Lun - Sam: 9h - 20h
                  <br />
                  Dim: 10h - 18h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-spa py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © 2024 SPA Plus. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              to="#"
              className="text-background/50 text-sm hover:text-gold transition-colors"
            >
              Mentions Légales
            </Link>
            <Link
              to="#"
              className="text-background/50 text-sm hover:text-gold transition-colors"
            >
              Politique de Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
