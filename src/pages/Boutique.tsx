import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, Filter, X } from "lucide-react";
import { toast } from "sonner";
import productsImage from "@/assets/products-cosmetics.jpg";

type Category = "all" | "visage" | "corps" | "homme" | "coffrets";

const products = [
  {
    id: 1,
    name: "Sérum Éclat Intense",
    category: "visage",
    price: 65,
    rating: 4.9,
    description: "Sérum vitaminé pour un teint lumineux et unifié.",
    forWho: "Mixte",
  },
  {
    id: 2,
    name: "Crème Hydratante Premium",
    category: "visage",
    price: 48,
    rating: 4.8,
    description: "Hydratation longue durée à l'acide hyaluronique.",
    forWho: "Mixte",
  },
  {
    id: 3,
    name: "Huile de Massage Relaxante",
    category: "corps",
    price: 35,
    rating: 4.7,
    description: "Mélange d'huiles essentielles pour une détente profonde.",
    forWho: "Mixte",
  },
  {
    id: 4,
    name: "Gommage Corps au Sel Marin",
    category: "corps",
    price: 42,
    rating: 4.6,
    description: "Exfoliant doux aux cristaux de sel et huile d'argan.",
    forWho: "Mixte",
  },
  {
    id: 5,
    name: "Soin Barbe & Visage Homme",
    category: "homme",
    price: 38,
    rating: 4.8,
    description: "Crème hydratante spéciale peaux masculines et barbes.",
    forWho: "Homme",
  },
  {
    id: 6,
    name: "Gel Douche Énergisant Homme",
    category: "homme",
    price: 25,
    rating: 4.5,
    description: "Formule tonifiante aux extraits de menthe et eucalyptus.",
    forWho: "Homme",
  },
  {
    id: 7,
    name: "Coffret Spa Détente",
    category: "coffrets",
    price: 120,
    rating: 5.0,
    description: "Huile, bougie parfumée et sel de bain pour un rituel complet.",
    forWho: "Mixte",
  },
  {
    id: 8,
    name: "Coffret Duo Romantique",
    category: "coffrets",
    price: 150,
    rating: 4.9,
    description: "Idéal pour un moment de partage et de détente à deux.",
    forWho: "Mixte",
  },
  {
    id: 9,
    name: "Masque Visage Purifiant",
    category: "visage",
    price: 32,
    rating: 4.7,
    description: "Argile verte et charbon actif pour une peau nette.",
    forWho: "Mixte",
  },
  {
    id: 10,
    name: "Baume Corps Nourrissant",
    category: "corps",
    price: 55,
    rating: 4.8,
    description: "Beurre de karité et huile d'argan pour une peau satinée.",
    forWho: "Femme",
  },
  {
    id: 11,
    name: "Eau de Parfum Zen",
    category: "coffrets",
    price: 85,
    rating: 4.6,
    description: "Notes de bambou, thé vert et bois de santal.",
    forWho: "Mixte",
  },
  {
    id: 12,
    name: "Kit Rasage Premium Homme",
    category: "homme",
    price: 75,
    rating: 4.9,
    description: "Blaireau, savon et après-rasage pour un rituel complet.",
    forWho: "Homme",
  },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "Tous" },
  { value: "visage", label: "Visage" },
  { value: "corps", label: "Corps" },
  { value: "homme", label: "Homme" },
  { value: "coffrets", label: "Coffrets" },
];

const Boutique = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [cart, setCart] = useState<number[]>([]);

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
    const product = products.find((p) => p.id === productId);
    toast.success(`${product?.name} ajouté au panier`, {
      description: "Continuez vos achats ou finalisez votre commande.",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={productsImage}
            alt="Boutique SPA Plus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="container-spa relative z-10 text-center">
          <span className="inline-block font-display text-gold tracking-widest uppercase text-sm mb-4">
            Notre Boutique
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-light mb-6">
            Produits <span className="italic">Premium</span>
          </h1>
          <div className="divider-gold mb-8" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des cosmétiques de qualité professionnelle pour prolonger 
            l'expérience SPA Plus chez vous.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="container-spa">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === cat.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span className="text-sm">{filteredProducts.length} produits</span>
            </div>
          </div>

          {/* Cart Summary */}
          {cart.length > 0 && (
            <div className="bg-sage-light rounded-lg p-4 mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <span className="text-sm">
                  <strong>{cart.length}</strong> article(s) dans votre panier
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-display text-lg text-gold">
                  {cart.reduce((total, id) => total + (products.find(p => p.id === id)?.price || 0), 0)}€
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCart([])}
                  className="text-muted-foreground"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="card-spa group"
              >
                <div className="aspect-square bg-secondary flex items-center justify-center">
                  <span className="font-display text-4xl text-primary/30">
                    {product.name.charAt(0)}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-gold text-gold" />
                    <span className="text-sm text-muted-foreground">{product.rating}</span>
                    <span className="text-xs text-muted-foreground ml-2 px-2 py-0.5 bg-secondary rounded-full">
                      {product.forWho}
                    </span>
                  </div>
                  <h3 className="font-display text-lg mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl text-gold">{product.price}€</span>
                    <Button
                      variant="elegant"
                      size="sm"
                      onClick={() => addToCart(product.id)}
                    >
                      Ajouter
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Notice */}
          <div className="mt-16 text-center p-8 bg-cream rounded-lg">
            <h3 className="font-display text-2xl mb-4">Livraison & Retours</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Livraison gratuite dès 50€ d'achat. Retours acceptés sous 14 jours. 
              Tous nos produits sont testés dermatologiquement et conviennent aux peaux sensibles.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Boutique;
