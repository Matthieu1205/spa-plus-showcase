import hammamImage from "@/assets/hammam-service.jpg";
import heroImage from "@/assets/hero-spa.jpg";
import massageImage from "@/assets/img-massage.jpg";
import facialImage from "@/assets/img1.jpg";
import productsImage from "@/assets/produit.jpg";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Heart, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Massages",
    description: "Relaxants et thérapeutiques pour un corps apaisé",
    image: massageImage,
  },
  {
    title: "Soins du Visage",
    description: "Traitements personnalisés pour une peau éclatante",
    image: facialImage,
  },
  {
    title: "Hammam & Spa",
    description: "Rituel détoxifiant pour une relaxation profonde",
    image: hammamImage,
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Excellence",
    description: "Des soins de qualité premium avec des produits haut de gamme",
  },
  {
    icon: Users,
    title: "Mixte",
    description: "Un espace accueillant dédié aux femmes et aux hommes",
  },
  {
    icon: Heart,
    title: "Bien-être",
    description: "Une approche holistique pour votre équilibre corps et esprit",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "Des professionnels certifiés et passionnés",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="SPA Plus - Espace de bien-être luxueux"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container-spa relative z-10 pt-24">
          <div className="max-w-2xl">
            <span className="inline-block font-display text-gold tracking-widest uppercase text-sm mb-6 animate-fade-up">
              Bienvenue chez SPA Plus
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 animate-fade-up delay-100">
              L'Art du <span className="italic">Bien-être</span>
              <br />
              au Féminin & Masculin
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg animate-fade-up delay-200">
              Offrez-vous une parenthèse de sérénité. Découvrez nos soins
              exclusifs et laissez-vous porter vers une relaxation absolue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Button variant="hero" asChild>
                <Link to="/services">
                  Découvrir nos Soins
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" asChild>
                <Link to="/contact">Prendre Rendez-vous</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-sage-light">
        <div className="container-spa">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center p-8 bg-background rounded-lg shadow-soft hover:shadow-elevated transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-spa">
          <div className="text-center mb-16">
            <span className="inline-block font-display text-gold tracking-widest uppercase text-sm mb-4">
              Nos Prestations
            </span>
            <h2 className="heading-section mb-6">Des Soins d'Exception</h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="card-spa group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-primary font-medium text-sm hover:gap-3 gap-2 transition-all"
                  >
                    Découvrir <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="elegant" size="lg" asChild>
              <Link to="/services">Voir tous les services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Boutique Preview */}
      <section className="section-padding bg-cream">
        <div className="container-spa">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block font-display text-gold tracking-widest uppercase text-sm mb-4">
                Notre Boutique
              </span>
              <h2 className="heading-section mb-6">
                Prolongez l'Expérience
                <br />
                chez Vous
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Découvrez notre sélection de produits cosmétiques premium,
                soigneusement choisis pour femmes et hommes. Des soins de
                qualité professionnelle pour continuer votre rituel bien-être à
                domicile.
              </p>
              <Button variant="gold" size="lg" asChild>
                <Link to="/boutique">
                  Explorer la Boutique
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={productsImage}
                  alt="Produits cosmétiques SPA Plus"
                  className="w-full rounded-lg shadow-elevated"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/20 rounded-lg -z-10" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-background rounded-full blur-3xl" />
        </div>
        <div className="container-spa relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-primary-foreground mb-6">
            Prêt pour une Escapade
            <br />
            <span className="italic">Bien-être</span> ?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
            Réservez dès maintenant votre moment de détente et laissez-nous
            prendre soin de vous.
          </p>
          <Button
            variant="outline"
            size="xl"
            className="bg-background text-primary hover:bg-background/90 border-0"
            asChild
          >
            <Link to="/contact">
              Réserver Maintenant
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
