import { Layout } from "@/components/layout/Layout";
import { Award, Heart, Users, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Chaque soin est prodigué avec amour et dévouement pour votre bien-être.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Nous utilisons uniquement des produits de qualité premium et des techniques éprouvées.",
  },
  {
    icon: Users,
    title: "Inclusion",
    description: "Un espace chaleureux où femmes et hommes sont accueillis avec la même attention.",
  },
  {
    icon: Leaf,
    title: "Naturalité",
    description: "Des soins respectueux de votre corps et de l'environnement.",
  },
];

const team = [
  {
    name: "Marie Dupont",
    role: "Fondatrice & Directrice",
    description: "20 ans d'expérience dans le bien-être et la beauté.",
  },
  {
    name: "Thomas Martin",
    role: "Masseur-Kinésithérapeute",
    description: "Expert en massages thérapeutiques et relaxants.",
  },
  {
    name: "Sophie Laurent",
    role: "Esthéticienne Senior",
    description: "Spécialiste des soins du visage et du corps.",
  },
  {
    name: "Alexandre Petit",
    role: "Praticien Spa",
    description: "Maître en rituels hammam et soins orientaux.",
  },
];

const APropos = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="SPA Plus - Notre histoire"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="container-spa relative z-10 text-center">
          <span className="inline-block font-display text-gold tracking-widest uppercase text-sm mb-4">
            À Propos
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-light mb-6">
            Notre <span className="italic">Histoire</span>
          </h1>
          <div className="divider-gold" />
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-spa">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Fondé en 2015, <strong className="text-foreground">SPA Plus</strong> est né 
              d'une vision simple : créer un sanctuaire de bien-être où chaque personne, 
              femme ou homme, peut s'évader du quotidien et retrouver son équilibre intérieur.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Notre fondatrice, Marie Dupont, après 15 années passées dans les plus grands 
              spas parisiens, a voulu créer un lieu unique combinant expertise professionnelle, 
              ambiance zen et accueil chaleureux pour une clientèle mixte en quête de qualité.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Aujourd'hui, SPA Plus est devenu une référence du bien-être à Paris, 
              accueillant des milliers de clients chaque année dans un cadre raffiné 
              et apaisant.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-sage-light">
        <div className="container-spa">
          <div className="text-center mb-16">
            <span className="inline-block font-display text-gold tracking-widest uppercase text-sm mb-4">
              Ce qui nous guide
            </span>
            <h2 className="heading-section mb-6">Nos Valeurs</h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-background rounded-lg p-8 text-center shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-spa">
          <div className="text-center mb-16">
            <span className="inline-block font-display text-gold tracking-widest uppercase text-sm mb-4">
              Notre Équipe
            </span>
            <h2 className="heading-section mb-6">Des Experts Passionnés</h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="text-center group"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-display text-3xl text-primary">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-display text-xl mb-2">{member.name}</h3>
                <p className="text-gold text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container-spa">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "9+", label: "Années d'Expérience" },
              { value: "15K+", label: "Clients Satisfaits" },
              { value: "20+", label: "Soins Proposés" },
              { value: "4.9", label: "Note Moyenne" },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="block font-display text-4xl lg:text-5xl text-gold mb-2">
                  {stat.value}
                </span>
                <span className="text-primary-foreground/70 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default APropos;
