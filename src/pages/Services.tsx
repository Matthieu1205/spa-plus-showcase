import hammamImage from "@/assets/hammam-service.jpg";
import massageImage from "@/assets/img-massage.jpg";
import facialImage from "@/assets/img1.jpg";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
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
    id: "visage",
    title: "Soins du Visage",
    description:
      "Traitements personnalisés pour une peau éclatante et rayonnante",
    image: facialImage,
    services: [
      {
        name: "Soin Éclat",
        duration: "45 min",
        price: "65€",
        description:
          "Nettoyage en profondeur et hydratation pour un teint lumineux.",
      },
      {
        name: "Soin Anti-Âge Premium",
        duration: "75 min",
        price: "120€",
        description: "Traitement ciblé avec des actifs haute performance.",
      },
      {
        name: "Soin Hydratation Intense",
        duration: "60 min",
        price: "85€",
        description: "Réhydratation profonde pour les peaux desséchées.",
      },
      {
        name: "Soin Homme Purifiant",
        duration: "50 min",
        price: "70€",
        description:
          "Spécialement conçu pour les besoins de la peau masculine.",
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

const additionalServices = [
  { name: "Épilation Complète", price: "à partir de 25€" },
  { name: "Manucure & Pédicure", price: "à partir de 35€" },
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

      {/* Service Categories */}
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
