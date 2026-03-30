import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";

/**
 * DESIGN PHILOSOPHY: Cinematic Immersion
 * Galerie portfolio filtrable des projets réalisés
 */

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const projects = [
    {
      id: 1,
      title: "Le Cardinal Hotel - Voyage Immersif",
      category: "hospitality",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/hero-immersive-landscape-mRNbgdRjabNQ6GXWYo9RFd.webp",
      description: "Salle immersive 360° présentant les 8 points cardinaux de la France",
      metrics: {
        engagement: "+45%",
        satisfaction: "4.9/5",
        repeat: "+32%",
      },
      details: "Captures aériennes et 360° de paysages français emblématiques. Projection sur 4 murs avec son spatial. Expérience de 15 minutes intégrée au séjour.",
      location: "Paris, France",
      year: 2024,
    },
    {
      id: 2,
      title: "MyGinger - Studio Yoga Immersif",
      category: "wellness",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/wellness-immersive-yoga-5ughjodXaVDdHB4hi7iKDd.webp",
      description: "Premier studio de yoga immersif à Paris avec projection 360° et bain sonore",
      metrics: {
        engagement: "+60%",
        satisfaction: "5/5",
        repeat: "+48%",
      },
      details: "Salle dédiée au yoga avec projection de paysages naturels apaisants. Intégration de bain sonore et lumière adaptative. Classes régulières avec contenu immersif.",
      location: "Paris, France",
      year: 2023,
    },
    {
      id: 3,
      title: "WorldSkills - Le Petit Chef",
      category: "restaurant",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/restaurant-immersive-dinner-Yu5kxwFzPycagbFMr9J6cS.webp",
      description: "Spectacle culinaire immersif inspiré du concept 'Le Petit Chef'",
      metrics: {
        engagement: "+75%",
        satisfaction: "5/5",
        viral: "2.3K partages",
      },
      details: "Dîner immersif avec projection mapping synchronisée à la musique et aux plats. Expérience de 2 heures combinant gastronomie et spectacle visuel.",
      location: "Événementiel",
      year: 2024,
    },
    {
      id: 4,
      title: "Séminaire Corporatif - Tech Company",
      category: "events",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/event-immersive-spectacle-SF86h4rwjzHLwNug7hfpSW.webp",
      description: "Salle immersive pour séminaire d'entreprise avec contenu personnalisé",
      metrics: {
        engagement: "+55%",
        satisfaction: "4.8/5",
        retention: "+38%",
      },
      details: "Salle de 200 places avec projection 360°, son spatial et interactivité. Présentation de stratégie d'entreprise dans un environnement immersif innovant.",
      location: "Paris, France",
      year: 2024,
    },
  ];

  const categories = [
    { id: "all", label: "Tous les projets" },
    { id: "hospitality", label: "Hôtellerie" },
    { id: "wellness", label: "Bien-être" },
    { id: "restaurant", label: "Restauration" },
    { id: "events", label: "Événements" },
  ];

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />
      {/* Spacer */}
      <div className="h-16" />

      {/* Hero Section */}
      <section className="hero-section pt-8">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/event-immersive-spectacle-SF86h4rwjzHLwNug7hfpSW.webp"
          alt="Portfolio"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
              Notre Portfolio
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto" />
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow-md">
              Découvrez les projets immersifs que nous avons créés
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-primary text-background"
                    : "bg-card border border-border text-muted-foreground hover:border-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Project Card */}
                <div className="rounded-lg overflow-hidden bg-card border border-border hover:border-primary transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                    {/* Year Badge */}
                    <div className="absolute top-4 right-4 bg-primary text-background px-3 py-1 rounded-full text-sm font-bold">
                      {project.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Title & Location */}
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-primary">{project.location}</p>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm">{project.description}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <p className="text-primary font-bold text-lg">{value}</p>
                          <p className="text-xs text-muted-foreground capitalize">{key}</p>
                        </div>
                      ))}
                    </div>

                    {/* Details */}
                    <p className="text-sm text-muted-foreground pt-3">{project.details}</p>

                    {/* CTA */}
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary/10 mt-4"
                    >
                      Voir le détail
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Aucun projet trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up">
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-muted-foreground">Projets réalisés</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "100ms" }}>
              <p className="text-4xl font-bold text-primary mb-2">15+</p>
              <p className="text-muted-foreground">Pays</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
              <p className="text-4xl font-bold text-primary mb-2">4.9/5</p>
              <p className="text-muted-foreground">Satisfaction moyenne</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "300ms" }}>
              <p className="text-4xl font-bold text-primary mb-2">20 ans</p>
              <p className="text-muted-foreground">D'expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container text-center animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">Inspiré par Nos Projets ?</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Contactez-nous pour discuter de votre propre projet immersif et découvrir comment nous pouvons transformer votre espace.
          </p>
          <Button size="lg" className="bg-primary text-background hover:bg-primary/90">
            Demander un devis
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
