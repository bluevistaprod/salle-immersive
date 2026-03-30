import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, Volume2, Gamepad2, Palette } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";

/**
 * DESIGN PHILOSOPHY: Cinematic Immersion
 * Page détaillée des expériences immersives avec types de salles et features
 */

export default function Experiences() {
  const [selectedType, setSelectedType] = useState<string>("yoga");

  const experienceTypes = [
    {
      id: "yoga",
      title: "Salles Yoga & Bien-être",
      description: "Espaces de relaxation et de méditation transformés par la projection 360°",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/wellness-immersive-yoga-5ughjodXaVDdHB4hi7iKDd.webp",
      benefits: [
        "Immersion totale dans la nature",
        "Réduction du stress et de l'anxiété",
        "Expérience sensorielle complète",
        "Fidélisation des clients",
      ],
      features: ["Projection 360°", "Son spatial", "Lumière adaptative", "Contenu personnalisé"],
      example: "MyGinger - Studio de yoga immersif à Paris",
    },
    {
      id: "hospitality",
      title: "Salles Hôtellerie Luxe",
      description: "Expériences immersives pour hôtels premium et établissements de prestige",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/hero-immersive-landscape-mRNbgdRjabNQ6GXWYo9RFd.webp",
      benefits: [
        "Différenciation concurrentielle",
        "Augmentation du tarif moyen",
        "Expérience client mémorable",
        "Contenu sur mesure (régions, thèmes)",
      ],
      features: ["Voyages 360°", "Captures aériennes", "Contenu haute définition", "Intégration décor"],
      example: "Le Cardinal Hotel - Voyage immersif en France",
    },
    {
      id: "restaurant",
      title: "Restauration Événementielle",
      description: "Dîners immersifs spectaculaires avec projection mapping dynamique",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/restaurant-immersive-dinner-Yu5kxwFzPycagbFMr9J6cS.webp",
      benefits: [
        "Événements inoubliables",
        "Tarification premium",
        "Viralité sur réseaux sociaux",
        "Partenariats avec chefs étoilés",
      ],
      features: ["Projection mapping", "Synchronisation musique", "Interactivité", "Storytelling"],
      example: "Le Petit Chef - Spectacle culinaire immersif",
    },
    {
      id: "events",
      title: "Événements Corporatifs",
      description: "Salles immersives pour séminaires, conférences et team building",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/event-immersive-spectacle-SF86h4rwjzHLwNug7hfpSW.webp",
      benefits: [
        "Engagement des participants",
        "Mémorisation du message",
        "Ambiance immersive",
        "Flexibilité thématique",
      ],
      features: ["Contenu sur mesure", "Interactivité", "Son immersif", "Lighting design"],
      example: "WorldSkills - Spectacle immersif événementiel",
    },
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Projection 360°",
      description: "Immersion totale sans point de fuite visuelle. Technologie de pointe pour une qualité cinématographique.",
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: "Son Spatial",
      description: "Acoustique immersive qui enveloppe complètement l'espace. Synchronisation parfaite avec les visuels.",
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Interactivité",
      description: "Gamification et éléments interactifs pour engager les visiteurs et créer des moments mémorables.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Contenu Sur Mesure",
      description: "Créations audiovisuelles personnalisées adaptées à votre identité et vos objectifs.",
    },
  ];

  const selectedExperience = experienceTypes.find((exp) => exp.id === selectedType);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />
      {/* Spacer */}
      <div className="h-16" />

      {/* Hero Section */}
      <section className="hero-section pt-8">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/tech-immersive-projection-D4ucStgg7e5U8QfMu4r3yy.webp"
          alt="Technologie immersive"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
              Nos Expériences Immersives
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto" />
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow-md">
              Découvrez les différents types de salles immersives adaptées à vos besoins
            </p>
          </div>
        </div>
      </section>

      {/* Experience Types Section */}
      <section className="py-20 bg-background">
        <div className="container">
          {/* Type Selection */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {experienceTypes.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setSelectedType(exp.id)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedType === exp.id
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/50"
                }`}
              >
                <h3 className="font-bold text-sm">{exp.title}</h3>
              </button>
            ))}
          </div>

          {/* Selected Experience Detail */}
          {selectedExperience && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-slide-up">
              {/* Image */}
              <div className="rounded-lg overflow-hidden h-96 md:h-full min-h-96">
                <img
                  src={selectedExperience.image}
                  alt={selectedExperience.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-bold mb-3">{selectedExperience.title}</h2>
                  <div className="w-12 h-1 bg-primary mb-4" />
                  <p className="text-lg text-muted-foreground">{selectedExperience.description}</p>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-bold mb-3">Bénéfices</h3>
                  <ul className="space-y-2">
                    {selectedExperience.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-xl font-bold mb-3">Caractéristiques</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Example */}
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Exemple réel</p>
                  <p className="font-bold text-primary">{selectedExperience.example}</p>
                </div>

                <Button className="bg-primary text-background hover:bg-primary/90 w-full md:w-auto">
                  <a href="/booking" className="flex items-center gap-2 no-underline">
                    Demander un devis
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Nos Technologies</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les éléments clés qui font la différence dans nos expériences immersives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className="bg-background border-border hover:border-primary transition-colors animate-slide-up glow"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader>
                  <div className="text-primary mb-3">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-4xl font-bold">Personnalisation Complète</h2>
              <div className="w-12 h-1 bg-primary" />
              <p className="text-lg text-muted-foreground">
                Chaque salle immersive est unique. Nous concevons des solutions adaptées à votre espace, votre budget et vos objectifs.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold mb-2">Analyse de votre espace</h3>
                  <p className="text-sm text-muted-foreground">
                    Nous évaluons vos dimensions, votre architecture et vos contraintes techniques.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Conception du contenu</h3>
                  <p className="text-sm text-muted-foreground">
                    Création de contenus audiovisuels sur mesure adaptés à votre identité.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Installation et formation</h3>
                  <p className="text-sm text-muted-foreground">
                    Déploiement complet avec support technique et formation de votre équipe.
                  </p>
                </div>
              </div>

              <Button className="bg-primary text-background hover:bg-primary/90">
                <a href="/contact" className="flex items-center gap-2 no-underline">
                  Consulter nos experts
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

            <div className="rounded-lg overflow-hidden h-96 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/tech-immersive-projection-D4ucStgg7e5U8QfMu4r3yy.webp"
                alt="Personnalisation"
                className="w-full h-full object-cover glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container text-center animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">Prêt à Transformer Votre Espace ?</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Contactez-nous pour discuter de votre projet immersif et recevoir un devis personnalisé.
          </p>
          <Button size="lg" className="bg-primary text-background hover:bg-primary/90">
            <a href="/booking" className="flex items-center gap-2 no-underline">
              Demander un devis
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
