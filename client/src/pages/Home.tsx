import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";

/**
 * DESIGN PHILOSOPHY: Cinematic Immersion
 * - Noir luxe + Doré riche
 * - Images comme héros du site
 * - Transitions fluides et dramatiques
 * - Silence éloquent : beaucoup d'espace vide
 * - Sensorialité : glow effects, animations douces
 */

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const experiences = [
    {
      id: "wellness",
      title: "Bien-être & Yoga",
      description: "Immersion totale dans des paysages naturels apaisants. Yoga, méditation et relaxation transformés par la projection 360°.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/wellness-immersive-yoga-5ughjodXaVDdHB4hi7iKDd.webp",
      icon: "🧘",
    },
    {
      id: "hospitality",
      title: "Hôtellerie Luxe",
      description: "Voyages immersifs pour hôtels premium. Expériences 360° des plus beaux paysages français, créant une atmosphère unique pour vos clients.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/hero-immersive-landscape-mRNbgdRjabNQ6GXWYo9RFd.webp",
      icon: "🏨",
    },
    {
      id: "restaurant",
      title: "Restauration Événementielle",
      description: "Dîners immersifs spectaculaires. Comme 'Le Petit Chef', transformez chaque repas en voyage sensoriel inoubliable.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/restaurant-immersive-dinner-Yu5kxwFzPycagbFMr9J6cS.webp",
      icon: "🍽️",
    },
    {
      id: "events",
      title: "Spectacles & Événements",
      description: "Expériences immersives sur mesure pour vos événements. Projection 360°, son spatial et interactivité pour un impact maximal.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/event-immersive-spectacle-SF86h4rwjzHLwNug7hfpSW.webp",
      icon: "✨",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section pt-16 mt-16">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/hero-immersive-landscape-mRNbgdRjabNQ6GXWYo9RFd.webp"
          alt="Salle immersive luxe"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
              Entrez dans<br />l'Immersion
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto" />
            <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto drop-shadow-md">
              Créez des expériences sensorielles inoubliables avec nos salles immersives 360°
            </p>
            <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" className="bg-primary text-background hover:bg-primary/90 glow">
              <a href="/booking" className="flex items-center gap-2 no-underline">
                <Play className="w-4 h-4" />
                Demander un devis
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <a href="/experiences" className="flex items-center gap-2 no-underline">
                Voir nos expériences
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos Expériences</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              De la méditation au spectacle, découvrez comment l'immersion transforme chaque moment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="experiences">
            {experiences.map((exp, idx) => (
              <div
                key={exp.id}
                className="group relative overflow-hidden rounded-lg h-96 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
                onMouseEnter={() => setHoveredCard(exp.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Image */}
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="text-4xl mb-3">{exp.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <p
                    className={`text-sm text-gray-200 transition-all duration-300 ${
                      hoveredCard === exp.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {exp.description}
                  </p>
                </div>

                {/* Golden border on hover */}
                {hoveredCard === exp.id && (
                  <div className="absolute inset-0 border-2 border-primary pointer-events-none animate-glow-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="animate-slide-up">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/tech-immersive-projection-D4ucStgg7e5U8QfMu4r3yy.webp"
                alt="Technologie immersive"
                className="rounded-lg shadow-2xl glow"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <h2 className="text-4xl font-bold">Technologie de Pointe</h2>
              <div className="w-12 h-1 bg-primary" />

              <p className="text-lg text-muted-foreground">
                Nos salles immersives combinent projection 360°, son spatial et capture aérienne pour créer des expériences inoubliables.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">360°</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Projection 360°</h4>
                    <p className="text-sm text-muted-foreground">
                      Immersion totale sans point de fuite visuelle
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">🎬</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Contenu Cinématique</h4>
                    <p className="text-sm text-muted-foreground">
                      Captures aériennes et 360° de qualité cinéma
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">🔊</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Son Spatial</h4>
                    <p className="text-sm text-muted-foreground">
                      Acoustique immersive pour une expérience complète
                    </p>
                  </div>
                </div>
              </div>

            <Button className="bg-primary text-background hover:bg-primary/90 mt-6">
              <a href="/booking" className="flex items-center gap-2 no-underline">
                Demander un devis
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projets Réalisés</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Le Cardinal Hotel",
                location: "Paris",
                description: "Salle immersive 'Voyage en France' pour expérience client premium",
              },
              {
                name: "MyGinger",
                location: "Paris",
                description: "Studio yoga immersif avec projection 360° et bain sonore",
              },
              {
                name: "WorldSkills",
                location: "Événementiel",
                description: "Spectacle immersif 'Le Petit Chef' pour dîner événementiel",
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors animate-slide-up glow"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-sm text-primary mb-3">{project.location}</p>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container text-center animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Prêt à Créer l'Immersion ?
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Découvrez comment nos salles immersives peuvent transformer votre espace et créer des expériences inoubliables pour vos clients.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary text-background hover:bg-primary/90 glow">
              Demander une démo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Bluevista Immersive</h4>
              <p className="text-sm text-muted-foreground">
                Créateurs d'expériences immersives pour l'hôtellerie, le bien-être et l'événementiel.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Bien-être
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Hôtellerie
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Restauration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Événements
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Ressources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Cas d'usage
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Galerie
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:contact@bluevista.fr" className="hover:text-primary transition-colors">
                    contact@bluevista.fr
                  </a>
                </li>
                <li>
                  <a href="tel:+33123456789" className="hover:text-primary transition-colors">
                    +33 (0)1 23 45 67 89
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2026 Bluevista Production. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
