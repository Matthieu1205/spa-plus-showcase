import hammamImage from "@/assets/hammam-service.jpg";
import massageImage from "@/assets/img-massage.jpg";
import facialImage from "@/assets/img1.jpg";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Hand, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";

const serviceCategories = [
  {
    id: "massages",
    title: "Massages",
    description:
      "Relaxants et thérapeutiques pour un corps apaisé et revitalisé",
    image: massageImage,
    services: [
      {
        name: "Massage Relaxant",
        duration: "60 min",
        price: "85€",
        description:
          "Massage doux aux huiles essentielles pour une détente profonde.",
      },
      {
        name: "Massage Thérapeutique",
        duration: "75 min",
        price: "110€",
        description:
          "Soulage les tensions musculaires et améliore la circulation.",
      },
      {
        name: "Massage aux Pierres Chaudes",
        duration: "90 min",
        price: "130€",
        description:
          "Alliance parfaite de chaleur et de pressions pour un bien-être absolu.",
      },
      {
        name: "Massage Duo",
        duration: "60 min",
        price: "150€",
        description:
          "Partagez un moment de détente à deux dans notre cabine duo.",
      },
    ],
  },
  {
    id: "hammam",
    title: "Hammam & Spa",
    description:
      "Rituels détoxifiants pour une relaxation profonde et purifiante",
    image: hammamImage,
    services: [
      {
        name: "Accès Hammam",
        duration: "60 min",
        price: "40€",
        description: "Profitez de notre hammam traditionnel et espace détente.",
      },
      {
        name: "Rituel Oriental",
        duration: "120 min",
        price: "180€",
        description:
          "Hammam, gommage au savon noir et massage à l'huile d'argan.",
      },
      {
        name: "Forfait Spa Journée",
        duration: "Journée",
        price: "220€",
        description: "Accès illimité au spa, hammam et un soin au choix.",
      },
      {
        name: "Rituel Duo Oriental",
        duration: "150 min",
        price: "320€",
        description: "Expérience complète à partager en couple ou entre amis.",
      },
    ],
  },
];

// Facial care services with brands
const facialServices = [
  {
    name: "Diagnostic de la peau / Skin analysis",
    duration: "10mn",
    price: "20.000 Fcfa",
    brand: null,
  },
  {
    name: "Soins précieux / Precious care",
    brand: "CLARINS",
    duration: null,
    price: "40.000 Fcfa",
    cure: "70.000 Fcfa",
  },
  {
    name: "Soins précieux / Precious care",
    brand: "Yves Rocher",
    duration: "1h10mn",
    price: "40.000 Fcfa",
    cure: "70.000 Fcfa",
  },
  {
    name: "Soins précieux / Precious care",
    brand: "ROCHE Posay",
    duration: "1h15mn",
    price: "40.000 Fcfa",
    cure: "75.000 Fcfa",
  },
  {
    name: "Soins précieux / Precious care",
    brand: "AVENE",
    duration: "1h15mn",
    price: "35.000 Fcfa",
    cure: "65.000 Fcfa",
  },
  {
    name: "Soins précieux / Precious care",
    brand: "CLINIQUE",
    duration: "1h30mn",
    price: "60.000 Fcfa",
    cure: "100.000 Fcfa",
  },
  {
    name: "Soins précieux / Precious care",
    brand: "GUINOT",
    duration: "1h30mn",
    price: "100.000 Fcfa",
    cure: "180.000 Fcfa",
    premium: true,
  },
  {
    name: "Soins précieux / Precious care",
    brand: "Corole Franck",
    duration: "1h30mn",
    price: "40.000 Fcfa",
    cure: "70.000 Fcfa",
  },
  {
    name: "Soins précieux / Precious care",
    brand: "LIERAC",
    duration: "1h30mn",
    price: "50.000 Fcfa",
    cure: "90.000 Fcfa",
  },
  {
    name: "Soins aux herbes et fleurs du jardin / Garden herbs and flowers Care",
    duration: "30mn",
    price: "40.000 Fcfa",
    brand: null,
    special: true,
  },
  {
    name: "Soins bonne mine / Fresh appearanced face",
    duration: "30mn",
    price: "30.000 Fcfa",
    brand: null,
  },
];

const antiAgingServices = [
  {
    name: "Wellbox",
    duration: "30mn",
    price: "30.000 Fcfa",
  },
  {
    name: "Dermabrasion",
    duration: "30mn",
    price: "60.000 Fcfa",
  },
  {
    name: "Anti-rides hydra facial / Anti-wrinkle in-depth treatments",
    duration: "1h30mn",
    price: "70.000 Fcfa",
  },
];

// Hands & Feet services
const handsAndFeetServices = [
  {
    name: "Spa pédicure / Spa pedicure",
    duration: "40mn",
    price: "25.000 Fcfa",
    icon: "spa",
  },
  {
    name: "Pose vernis permanent / Permanent nail polish application",
    duration: "30mn",
    price: "10.000 Fcfa",
    icon: "polish",
  },
  {
    name: "Paraffine / Paraffin",
    duration: "15mn",
    price: "10.000 Fcfa",
    icon: "paraffin",
  },
];

const additionalServices = [
  { name: "Épilation Complète", price: "à partir de 25€" },
  { name: "Soin Corps Modelant", price: "90€" },
  { name: "Enveloppement Détox", price: "75€" },
  { name: "Réflexologie Plantaire", price: "55€" },
  { name: "Drainage Lymphatique", price: "95€" },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-sage-light">
        <div className="container-spa text-center">
          <span className="inline-block font-display text-gold tracking-widest uppercase text-sm mb-4">
            Nos Prestations
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-light mb-6">
            Soins & <span className="italic">Services</span>
          </h1>
          <div className="divider-gold mb-8" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez notre gamme complète de soins premium, conçus pour
            répondre aux besoins de bien-être des femmes et des hommes.
          </p>
        </div>
      </section>

      {/* Facial Care Section - Featured */}
      <section className="section-padding bg-gradient-to-b from-cream to-background">
        <div className="container-spa">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image */}
            <div>
              <div className="relative">
                <img
                  src={facialImage}
                  alt="Soins du visage"
                  className="w-full aspect-[4/5] object-cover rounded-lg shadow-elevated"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/20 rounded-lg -z-10" />
                <div className="absolute top-4 left-4 bg-gold/90 text-white px-4 py-2 rounded-full text-sm font-display flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Premium
                </div>
              </div>
            </div>

            {/* Services List */}
            <div>
              <span className="inline-block font-display text-gold tracking-widest uppercase text-sm mb-4">
                facial care
              </span>
              <h2 className="heading-section mb-4">Soins du Visage</h2>
              <p className="text-muted-foreground mb-8">
                Traitements personnalisés avec des marques prestigieuses pour une peau éclatante et rayonnante
              </p>

              <div className="space-y-4">
                {facialServices.map((service, idx) => (
                  <div
                    key={idx}
                    className={`relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-elevated ${
                      service.premium 
                        ? "bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border-2 border-gold/30" 
                        : service.special
                        ? "bg-gradient-to-r from-green-50 to-transparent border border-green-200"
                        : "bg-background border border-border/50"
                    } p-5`}
                  >
                    {service.premium && (
                      <div className="absolute top-2 right-2">
                        <Star className="w-5 h-5 text-gold fill-gold" />
                      </div>
                    )}
                    
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="font-display text-lg leading-tight">{service.name}</h3>
                        {service.brand && (
                          <span className="inline-block mt-1 px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium">
                            {service.brand}
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-gold font-display text-xl font-medium">
                          {service.price}
                        </span>
                        {service.cure && (
                          <div className="text-sm text-muted-foreground mt-1">
                            Cure de 2 soins: <span className="text-primary font-medium">{service.cure}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {service.duration && (
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mt-3">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Anti-aging Section */}
              <div className="mt-10 pt-8 border-t border-gold/20">
                <h3 className="font-display text-2xl mb-6 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-gold" />
                  Soins anti-vieillissement
                  <span className="text-sm text-muted-foreground font-normal">/ Age-defying treatments</span>
                </h3>
                <div className="grid gap-4">
                  {antiAgingServices.map((service, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-r from-primary/5 to-transparent p-5 rounded-xl border border-primary/10 hover:shadow-soft transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div>
                          <h4 className="font-display text-lg">{service.name}</h4>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                            <Clock className="w-4 h-4" />
                            <span>{service.duration}</span>
                          </div>
                        </div>
                        <span className="text-gold font-display text-xl font-medium">
                          {service.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Service Categories */}
      {serviceCategories.map((category, index) => (
        <section
          key={category.id}
          className={`section-padding ${
            index % 2 === 0 ? "bg-background" : "bg-cream"
          }`}
        >
          <div className="container-spa">
            <div
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full aspect-[4/5] object-cover rounded-lg shadow-elevated"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/20 rounded-lg -z-10" />
                </div>
              </div>

              {/* Services List */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="inline-block font-display text-gold tracking-widest uppercase text-sm mb-4">
                  {category.id}
                </span>
                <h2 className="heading-section mb-4">{category.title}</h2>
                <p className="text-muted-foreground mb-8">
                  {category.description}
                </p>

                <div className="space-y-6">
                  {category.services.map((service) => (
                    <div
                      key={service.name}
                      className="bg-background p-6 rounded-lg shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-display text-xl">{service.name}</h3>
                        <span className="text-gold font-display text-xl">
                          {service.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Hands & Feet Section */}
      <section className="section-padding bg-gradient-to-b from-background to-cream">
        <div className="container-spa">
          <div className="text-center mb-12">
            <span className="inline-block font-display text-gold tracking-widest uppercase text-sm mb-4">
              hands & feet
            </span>
            <h2 className="heading-section mb-4 flex items-center justify-center gap-3">
              <Hand className="w-8 h-8 text-gold" />
              Beauté des mains & des pieds
            </h2>
            <p className="text-muted-foreground text-lg">
              Soins des mains et des pieds / Hands and feet care
            </p>
            <div className="divider-gold mt-6" />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-5">
              {handsAndFeetServices.map((service, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden bg-background rounded-2xl border border-gold/20 p-6 hover:shadow-elevated transition-all duration-300 hover:border-gold/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-display text-xl text-foreground leading-tight">
                        {service.name}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-gold font-display text-2xl font-medium">
                        {service.price}
                      </span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-sage-light">
        <div className="container-spa">
          <div className="text-center mb-12">
            <span className="inline-block font-display text-gold tracking-widest uppercase text-sm mb-4">
              Autres Prestations
            </span>
            <h2 className="heading-section mb-6">Soins Complémentaires</h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service) => (
              <div
                key={service.name}
                className="bg-background p-6 rounded-lg shadow-soft flex justify-between items-center"
              >
                <span className="font-display text-lg">{service.name}</span>
                <span className="text-gold font-display">{service.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container-spa text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
            Envie de vous <span className="italic">Ressourcer</span> ?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
            Réservez votre soin dès maintenant et offrez-vous un moment de pure
            détente.
          </p>
          <Button
            variant="outline"
            size="xl"
            className="bg-background text-primary hover:bg-background/90 border-0"
            asChild
          >
            <Link to="/contact">
              Prendre Rendez-vous
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
