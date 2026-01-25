import hammamImage from "@/assets/hammam-service.jpg";
import massageImage from "@/assets/img-massage.jpg";
import facialImage from "@/assets/img1.jpg";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Hand, Sparkles, Star } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const serviceCategories = [
  {
    id: "massages",
    title: "Massages-Surmenage-Anxiété",
    description: "Massages-Fatigue-Anxiety-Insomnie-Stress",
    image: massageImage,
    services: [
      {
        name: "Specific massage for Golf players ",
        duration: "1h00 min",
        price: "40000 Fcfa",
        description: "Massage Special Golfeurs.",
      },
      {
        name: "Massage Soothing massage",
        duration: "1h00min",
        price: "75000 Fcfa",
        description: "Massage délassant.",
      },
      {
        name: "Aromatic massage",
        duration: "1h00 min",
        price: "50000 Fcfa",
        description: "Massage aromatique.",
      },
      {
        name: "Relaxing massage",
        duration: "1h00 min",
        price: "35000 Fcfa",
        description: "Massage relaxant.",
      },
      {
        name: "Four handed massage",
        duration: "1h00 min",
        price: "70000 Fcfa",
        description: "Massage 4 mains.",
      },
      {
        name: "Toning massage",
        duration: "1h00 min",
        price: "40000 Fcfa",
        description: "Massage tonifiant.",
      },
      {
        name: "Hot stones relaxing massage",
        duration: "1h00 min",
        price: "45000 Fcfa",
        description: "Pierres chaudes.",
      },
      {
        name: "Soothing massage",
        duration: "1h00 min",
        price: "45000 Fcfa",
        description: "Massage délassant- serviette chaude.",
      },
      {
        name: "Hot bags massage",
        duration: "1h00 min",
        price: "60000 Fcfa",
        description: "Massage au ballontins.",
      },
    ],
  },
  {
    id: "gommages-scrubs",
    title: "Gommages / Scrubs",
    description: "Gommage et réhydratation du corps après menstrues",
    image: massageImage,
    services: [
      {
        name: "Post menses body scrub and moisturizing",
        duration: "1h00 min",
        price: "25000 FCFA",
        description:
          "Massage doux aux huiles essentielles pour une détente profonde.",
      },
      {
        name: "Hammam traditional care Yves Rocher",
        duration: "1h30mn",
        price: "25000",
        description: "Soins traditionnels de Hammam avec Yves Rocher",
      },
      {
        name: "Hammam traditional care Raw chocolate & Raskol",
        duration: "2h00mn",
        price: "50000 FcFA",
        description:
          "Soins traditionnels de Hammam avec Chocolat naturel et la Raskol.",
      },
      {
        name: "Hammam traditional care Raw henna & Raskol",
        duration: "2h00mn",
        price: "50000 fcfa",
        description:
          "Soins traditionnels de Hammam avec Henné naturel et la Rascol.",
      },
    ],
  },

  {
    id: "hammam",
    title: "Le SPA / SPA",
    description:
      "Rituels détoxifiants pour une relaxation profonde et purifiante",
    image: hammamImage,
    services: [
      {
        name: "Hammam / Hammam",
        duration: "1h00min",
        price: "40000 Fcfa",
        description: "Profitez de notre hammam traditionnel et espace détente.",
      },
      {
        name: "Sauna / Sauna",
        duration: "1h00min",
        price: "35000 Fcfa",
        description:
          "Hammam, gommage au savon noir et massage à l'huile d'argan.",
      },
      {
        name: "Jacuzzi / Jacuzzi",
        duration: "1h00min",
        price: "90000 Fcfa",
        description: "Accès illimité au spa, hammam et un soin au choix.",
      },
      {
        name: "Doctor Fish Spa / Doctor Fish Spa",
        duration: "40 min",
        price: "25000 Fcfa",
        description: "Expérience complète à partager en couple ou entre amis.",
      },
    ],
  },
  {
    id: "onglerie",
    title: "Onglerie / Nail care",
    image: hammamImage,
    services: [
      {
        name: "GEL / gel",
        duration: "45 min",
        price: "30000 Fcfa",
      },
      {
        name: "Resine / Resin",
        duration: "45 min",
        price: "25000 Fcfa",
      },
      {
        name: "Remplissage / Refiling",
        duration: "30 min",
        price: "25000 Fcfa",
      },
      {
        name: "Pose de faux ongles / False nails",
        duration: "30 min",
        price: "10000 Fcfa",
      },
      {
        name: "French design / French design",
        duration: "20 min",
        price: "5000 Fcfa",
      },
    ],
  },
  {
    id: "soins-aminciissants",
    title: "Soins amincissants / Slimming",
    image: hammamImage,
    services: [
      {
        name: "Soins drainants palpé-roulé / Rolling massage",
        duration: "40 min",
        price: "45000 Fcfa",
      },
      {
        name: "Massage cryo lipolisse / Slimming cryo massage",
        duration: "2h00min",
        price: "500000 Fcfa",
      },
      {
        name: "Massage G5 / G5 massage",
        duration: "30 min",
        price: "45000 Fcfa",
      },
      {
        name: "Massage LPG Cellu M6 / LPG Cellu M6 Massage",
        duration: "45 min",
        price: "40000 Fcfa",
      },
    ],
  },
  {
    id: "couverture-chauffante",
    title: "Couverture chauffante / Electric blanket",
    description:
      "Remodelage du corps / Body reshaping. Diminution de l’aspect cellullitique / Cellulitis aspect reduction.",

    image: hammamImage,
    services: [
      {
        name: "Une séance / One session",
        duration: "1h30min",
        price: "40000 Fcfa",
      },
      {
        name: "Forfait de 14 séances / 14 sessions package",
        duration: "14h00min",
        price: "500000 Fcfa",
      },
      {
        name: "Forfait de 7 séances / 7 sessions package",
        duration: "7h00min",
        price: "250000 Fcfa",
      },
    ],
  },
  {
    id: "escale-gourmande",
    title: "Escale gourmande / Gourmet Stopover",
    description:
      "Soins éclat CHOCOLAT / Raw CHOCOLATE brightness. Gommage au CHOCOLAT / Raw CHOCOLATE scrub. Enveloppement au CHOCOLAT / Raw Chocolate body wrap.Massage à l’huile au CHOCOLAT / Raw Chocolate oil massage",
    image: hammamImage,
    services: [
      {
        name: "Tarif forfaitaire / Lump sum",
        duration: "2h30min",
        price: "85000 Fcfa",
      },
    ],
  },
  {
    id: "detentes-et-bien-etre",
    title: "Escale Détente et Bien-être / Relaxing & Well-being Stopover",
    description:
      "Gommage du corps / Body scrub.Enveloppement à base de boue minérale / Mineral mud based wrap.Arome modelage / Arome modeling.Massage relaxant / Relaxing massage.Détente du cuir chevelu / Scalp relaxation",
    image: hammamImage,
    services: [
      {
        name: "Tarif forfaitaire / Lump sum",
        duration: "2h30min",
        price: "90000 Fcfa",
      },
    ],
  },
  {
    id: "beaute",
    title: "Escale Beauté / Beauty Stopover",
    description:
      "Soins du visage / Facial care.Gommage au sel de la Mer morte / Scrub with Dead Sea salt.",
    image: hammamImage,
    services: [
      {
        name: "Tarif forfaitaire / Lump sum",
        duration: "7h00min",
        price: "450000 Fcfa",
      },
    ],
  },
  {
    id: "soins-capillaires",
    title: "Soins Capillaires / Hair care",
    image: hammamImage,
    services: [
      {
        name: "Rajout / Hair addition",
        duration: "1h00min",
        price: "20000 Fcfa",
      },
      {
        name: "Tissage coupe / Weave and cut",
        duration: "2h30min",
        price: "25000 Fcfa",
      },
      {
        name: "Tissage / Weaving",
        duration: "1h30min",
        price: "35000 Fcfa",
      },
      {
        name: "Natte tapis / Low level plaiting",
        duration: "3h30min",
        price: "25000 Fcfa",
      },
      {
        name: "Marcousis / Marcousis style plaiting",
        duration: "1h30min",
        price: "20000 Fcfa",
      },
      {
        name: "Écaille / Scale-like plaiting",
        duration: "2h30min",
        price: "25000 Fcfa",
      },
      {
        name: "Natte américaine / American-style plaiting",
        duration: "1h00min",
        price: "25000 Fcfa",
      },
      {
        name: "Piquer laisser tissage / Fasten & weaving",
        duration: "3h00min",
        price: "45000 Fcfa",
      },
      {
        name: "Fin-fin moyen / Half way tiny braids",
        duration: "5h30min",
        price: "60000 Fcfa",
      },
    ],
  },
  {
    id: "soins-des-cheveux-europeens",
    title: "Soins sur cheveux Européens/ Europeans’ hair care",
    image: hammamImage,
    services: [
      {
        name: "Lissage / Smoothing",
        duration: "3h30min",
        price: "80000 Fcfa",
      },
      {
        name: "Lissage produit salon / Smoothing with SPA-plus’s product",
        duration: "3h30min",
        price: "150000 Fcfa",
      },
      {
        name: "Shampooing lissage / Shampooing & smoothing",
        duration: "40min",
        price: "20000 Fcfa",
      },
      {
        name: "Extension cheveux / hair extension",
        duration: "4h00min",
        price: "120000 Fcfa",
      },
      {
        name: "Extension / Extension",
        duration: "2h00min",
        price: "80000 Fcfa",
      },
    ],
  },
  {
    id: "soins-du-buste",
    title: "Soins du buste / Bust care",
    description:
      "Raffermissement du buste / Bust firming up.Développement du buste / Bust development",
    image: hammamImage,
    services: [
      {
        name: "Une séance / One session",
        duration: "1h00min",
        price: "45000 Fcfa",
      },
    ],
  },
  {
    id: "soins-d-epilation",
    title: "Soins d’épilation / Epilation ",
    image: hammamImage,
    services: [
      {
        name: "Demi-jambes / Half legs or feet",
        duration: "20 min",
        price: "000 Fcfa",
      },
      {
        name: "Jambe entières / entre legs",
        duration: "30 min",
        price: "000",
      },
      {
        name: "Maillot Classic / Bikini-line depilation",
        duration: "30 min",
        price: "000",
      },
      {
        name: "Maillot Complet / Bikini-line depilation",
        duration: "35 min",
        price: "000",
      },
      {
        name: "Aisselles / Armpits",
        duration: "20 min",
        price: "000",
      },
      {
        name: "Jambe entière + maillot + aisselles / Both legs + Bikini line + Armpits",
        duration: "1h30 min",
        price: "000",
      },
      {
        name: "Demi jambe entière + maillot + aisselles / Half Both legs + Bikini line + Armpits",
        duration: "1h30 min",
        price: "000",
      },
      {
        name: "Lèvre / Lips",
        duration: "15 min",
        price: "000",
      },
      {
        name: "Menton / Chin",
        duration: "15 min",
        price: "000",
      },
      {
        name: "Sourcil / Eyebrows",
        duration: "15 min",
        price: "000",
      },
      {
        name: "Visage entier / Entire face",
        duration: "40 min",
        price: "000",
      },
      {
        name: "Ventre ou dos / Belly or Back",
        duration: "1h00min",
        price: "000",
      },
      {
        name: "Décolleté et cou / Décolleté and neck",
        duration: "30 min",
        price: "000",
      },
    ],
  },
  {
    id: "soins-du-corps",
    title: "Soins du corps / Body care",
    image: hammamImage,
    services: [
      {
        name: "Soins corporels à base de CHOCOLAT naturel / Raw CHOCOLATE based body care",
        duration: "2h00min",
        price: "45000 Fcfa",
      },
      {
        name: "Soins corporels à base de boue de mer morte aux algues / DEAD SEA algaem mud based body care",
        duration: "2h00min",
        price: "45000 Fcfa",
      },
      {
        name: "Soins corporels à base de boue minérale aux extraits d’algues / Seaweed extracts mineral mud based body care",
        duration: "2h00min",
        price: "45000 Fcfa",
      },
      {
        name: "Soins corporels à base de boue minérale aux huiles aromatiques / AROMATIC OILS mineral mud based body care",
        duration: "2h00min",
        price: "45000 Fcfa",
      },
      {
        name: "Soins corporels à base de boue naturelle de mer morte / DEAD SEA raw mud based body care",
        duration: "2h00min",
        price: "45000 fcfa",
      },
      {
        name: "Soins corporels relaxant aux huiles aromatiques / Aromatic relaxing oils body care",
        duration: "2h00min",
        price: "45000 Fcfa",
      },
      {
        name: "Soins corporels tonifiants aux huiles essentielles / ESSENTIAL OILS revitalizing body care",
        duration: "2h00min",
        price: "45000 Fcaf",
      },
    ],
  },
  {
    id: "maquillage",
    title: "Maquillage / Make-up",
    image: hammamImage,
    services: [
      {
        name: "Maquillage jour / Day make-up",
        duration: "15 min",
        price: "000 Fcfa",
      },
      {
        name: "Maquillage soir / Night make-up",
        duration: "15 min",
        price: "000",
      },
      {
        name: "Maquillage Diva / Diva make-up",
        duration: "20 min",
        price: "000",
      },
      {
        name: "Essai maquillage mariée / Bride make-up",
        duration: "1h15 min",
        price: "000",
      },
      {
        name: "Prise en charge mariée jour / Bride day care",
        duration: "2h30 min",
        price: "000",
      },
      {
        name: "Tatouage semi-permanent / Semi-permanent tattoo",
        duration: "10 min",
        price: "000",
      },
      {
        name: "Tatouage permanent / Permanent tattoo",
        duration: "40 min",
        price: "000",
      },
      {
        name: "Maquillage shooting / shooting make-up",
        duration: "40 min",
        price: "000",
      },
    ],
  },
  {
    id: "soins-de-cheveux",
    title: "Soins sur cheveux Naturels / Natural hair care",

    image: hammamImage,
    services: [
      {
        name: "Shampooing enfant et traitement/ Kids shampooing & hair treatment",
        duration: "1h35min",
        price: "10000 Fcfa",
      },
      {
        name: "Coupe enfant / Haircut",
        duration: "25min",
        price: "5000 Fcfa",
      },
      {
        name: "Shampooing dame / Shampooing for ladies",
        duration: "45 min",
        price: "15000 Fcfa",
      },
      {
        name: "Shampooing dame / Shampooing for ladies",
        duration: "45 min",
        price: "20000 Fcfa",
      },
      {
        name: "Shampooing dreadedd / dreadlocks shampooing",
        duration: "1h00 min",
        price: "25000 Fcfa",
      },
      {
        name: "Coupe dame / Haircut for ladies",
        duration: "1h30 min",
        price: "20000 Fcfa",
      },
      {
        name: "Coupe Homme / Haircut for Men",
        duration: "20 min",
        price: "10000 Fcfa",
      },
      {
        name: "Bain d’huile / Oil treatment",
        duration: "45 min",
        price: "20000 Fcfa",
      },
      {
        name: "Teinture / Hair dyeing",
        duration: "45 min",
        price: "15000 Fcfa",
      },
      {
        name: "Teinture / Hair Dyeing",
        duration: "45 min",
        price: "25000 Fcfa",
      },
      {
        name: "Teinture / Hair Dyeing",
        duration: "1h30 min",
        price: "35000 Fcfa",
      },
      {
        name: "Brushing / Brushing",
        duration: "45 min",
        price: "15000 Fcfa",
      },
      {
        name: "Brushing / Brushing",
        duration: "1h00 min",
        price: "20000 Fcfa",
      },
      {
        name: "Défrisage produit salon / Straightenin with Spa-plus’s product",
        duration: "1h30 min",
        price: "30000 Fcfa",
      },
      {
        name: "Mise en forme / Hair shaping",
        duration: "1h00 min",
        price: "10000 Fcfa",
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
// Nail care services
const nailCareServices = [
  {
    name: "Gel / Gel",
    duration: "45mn",
    price: "30.000 Fcfa",
  },
  {
    name: "Résine / Resin",
    duration: "45mn",
    price: "25.000 Fcfa",
  },
  {
    name: "Remplissage / Refiling",
    duration: "30mn",
    price: "25.000 Fcfa",
  },
  {
    name: "Pose de faux ongles / False nails",
    duration: "30mn",
    price: "10.000 Fcfa",
  },
  {
    name: "French design / French design",
    duration: "20mn",
    price: "5.000 Fcfa",
  },
];
// Body care services
const bodyCareServices = [
  {
    name: "Soins corporels à base de CHOCOLAT naturel",
    subtitle: "Raw CHOCOLATE based body care",
    duration: "2h00mn",
  },
  {
    name: "Soins corporels à base de boue de mer morte aux algues",
    subtitle: "DEAD SEA algae mud based body care",
    duration: "2h00mn",
  },
  {
    name: "Soins corporels à base de boue minérale aux extraits d’algues",
    subtitle: "Seaweed extracts mineral mud based body care",
    duration: "2h00mn",
  },
  {
    name: "Soins corporels à base de boue minérale aux huiles aromatiques",
    subtitle: "AROMATIC OILS mineral mud based body care",
    duration: "2h00mn",
  },
  {
    name: "Soins corporels à base de boue naturelle de mer morte",
    subtitle: "DEAD SEA raw mud based body care",
    duration: "2h00mn",
  },
  {
    name: "Soins corporels relaxant aux huiles aromatiques",
    subtitle: "Aromatic relaxing oils body care",
    duration: "2h00mn",
  },
  {
    name: "Soins corporels tonifiants aux huiles essentielles",
    subtitle: "ESSENTIAL OILS revitalizing body care",
    duration: "2h00mn",
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
  const location = useLocation();
  const hash = location.hash.replace("#", "");

  // If there's a hash, show only that service
  const selectedService = hash
    ? serviceCategories.find((cat) => cat.id === hash)
    : null;
  const isFacialCare = hash === "soins-visage";
  const isHandsFeet = hash === "mains-pieds";

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

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
      {(!hash || isFacialCare) && (
        <section
          id="soins-visage"
          className="section-padding bg-gradient-to-b from-cream to-background"
        >
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
                  Traitements personnalisés avec des marques prestigieuses pour
                  une peau éclatante et rayonnante
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
                          <h3 className="font-display text-lg leading-tight">
                            {service.name}
                          </h3>
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
                              Cure de 2 soins:{" "}
                              <span className="text-primary font-medium">
                                {service.cure}
                              </span>
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
                    <span className="text-sm text-muted-foreground font-normal">
                      / Age-defying treatments
                    </span>
                  </h3>
                  <div className="grid gap-4">
                    {antiAgingServices.map((service, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-r from-primary/5 to-transparent p-5 rounded-xl border border-primary/10 hover:shadow-soft transition-all duration-300"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <div>
                            <h4 className="font-display text-lg">
                              {service.name}
                            </h4>
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
      )}
      {/* Other Service Categories */}
      {(!hash || selectedService) && (
        <>
          {serviceCategories
            .filter((category) => !hash || category.id === hash)
            .map((category, index) => (
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
                              <h3 className="font-display text-xl">
                                {service.name}
                              </h3>
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
        </>
      )}
      {/* Hands & Feet Section */}
      {(!hash || isHandsFeet) && (
        <section
          id="mains-pieds"
          className="section-padding bg-gradient-to-b from-background to-cream"
        >
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
      )}
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
