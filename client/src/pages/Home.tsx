import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Sparkles, Zap, Heart, Brain, Target, Eye, Lightbulb, Users, Clapperboard, Palette, Layers } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";

/**
 * DESIGN PHILOSOPHY: Cinematic Immersion - B2B Premium
 * Messaging : Résultats business et expérience client
 * Pas de technologie, mais des solutions qui créent de la valeur
 */

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const whyImmersion = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Captiver l'Attention",
      description: "L'immersion crée un environnement sans distractions où votre message devient le centre de l'univers du visiteur.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Générer de l'Émotion",
      description: "Les expériences sensorielles créent des connexions émotionnelles durables avec votre audience.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Renforcer la Mémorisation",
      description: "Les souvenirs créés par l'immersion sont 5x plus mémorables qu'une présentation classique.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Augmenter l'Engagement",
      description: "Les visiteurs deviennent acteurs de l'expérience, augmentant leur implication et leur satisfaction.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Créer un Effet Différenciant",
      description: "Se démarquer de la concurrence en offrant une expérience unique et inoubliable.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Renforcer la Fidélité",
      description: "Les expériences mémorables transforment les visiteurs en ambassadeurs de votre marque.",
    },
  ];

  const applications = [
    {
      title: "Hôtellerie & Luxe",
      problem: "Différencier votre établissement dans un marché saturé",
      benefit: "Augmenter la satisfaction client et les tarifs moyens",
      example: "Le Cardinal Hotel - Voyages immersifs en chambre",
      icon: "🏨",
    },
    {
      title: "Musées & Culture",
      problem: "Rendre les collections plus engageantes et accessibles",
      benefit: "Augmenter les visiteurs et les revenus annexes",
      example: "Musées - Contextualisations immersives des œuvres",
      icon: "🎨",
    },
    {
      title: "Showrooms",
      problem: "Transformer les visites en expériences mémorables",
      benefit: "Augmenter les taux de conversion et les ventes",
      example: "Showrooms automobiles - Essais immersifs",
      icon: "🚗",
    },
    {
      title: "Événementiel",
      problem: "Créer des moments spectaculaires et inoubliables",
      benefit: "Générer du buzz et de la viralité",
      example: "WorldSkills - Spectacle immersif événementiel",
      icon: "🎭",
    },
    {
      title: "Formation & Éducation",
      problem: "Rendre la formation plus engageante et efficace",
      benefit: "Augmenter la rétention des connaissances",
      example: "Formations immersives - Apprentissage par l'expérience",
      icon: "📚",
    },
    {
      title: "Bien-être & Santé",
      problem: "Offrir des expériences de relaxation premium",
      benefit: "Augmenter la satisfaction et la fidélité",
      example: "MyGinger - Studio de yoga immersif",
      icon: "🧘",
    },
    {
      title: "Retail & Commerce",
      problem: "Créer une expérience d'achat différenciante",
      benefit: "Augmenter le temps passé en magasin et les achats",
      example: "Restaurants immersifs - Dîners spectaculaires",
      icon: "🛍️",
    },
    {
      title: "Corporate & Séminaires",
      problem: "Engager les collaborateurs et renforcer la culture",
      benefit: "Améliorer la rétention des messages clés",
      example: "Séminaires immersifs - Team building mémorable",
      icon: "🏢",
    },
  ];

  const approach = [
    {
      step: "1",
      title: "Analyse du lieu et des objectifs",
      description: "Nous comprenons votre espace, vos contraintes et vos ambitions pour concevoir la solution idéale.",
    },
    {
      step: "2",
      title: "Conception de l'expérience",
      description: "Nous créons le scénario immersif qui captivera vos visiteurs et atteindra vos objectifs.",
    },
    {
      step: "3",
      title: "Création des contenus immersifs",
      description: "Nous produisons les vidéos, animations 3D et contenus interactifs qui font la magie.",
    },
    {
      step: "4",
      title: "Installation et intégration",
      description: "Déploiement technique complet et intégration transparente dans votre espace.",
    },
    {
      step: "5",
      title: "Exploitation et accompagnement",
      description: "Support continu, mises à jour de contenu et optimisation de l'expérience.",
    },
  ];

  const contentCapabilities = [
    {
      icon: <Clapperboard className="w-8 h-8" />,
      title: "Captation Vidéo",
      description: "Tournages professionnels en 360°, drone et cinématographie haute définition.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Animation 3D & Motion Design",
      description: "Créations graphiques sophistiquées et animations fluides.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Storytelling & Scénarisation",
      description: "Narratifs captivants qui transforment les visiteurs en acteurs.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Expériences Interactives",
      description: "Contenus réactifs qui s'adaptent au comportement des visiteurs.",
    },
  ];

  const comparison = [
    {
      feature: "Conception de l'expérience",
      bluevista: true,
      competitor: false,
    },
    {
      feature: "Production des contenus",
      bluevista: true,
      competitor: false,
    },
    {
      feature: "Intégration technique",
      bluevista: true,
      competitor: true,
    },
    {
      feature: "Gestion complète du projet",
      bluevista: true,
      competitor: false,
    },
    {
      feature: "Accompagnement stratégique",
      bluevista: true,
      competitor: false,
    },
    {
      feature: "Vidéos réelles et drone",
      bluevista: true,
      competitor: false,
    },
    {
      feature: "Contenus 3D custom",
      bluevista: true,
      competitor: false,
    },
  ];

  const faqItems = [
    {
      q: "Combien coûte une salle immersive ?",
      a: "Le coût varie selon la complexité, la taille et les contenus. Nous proposons des solutions de 50k€ à 500k€+. Chaque projet est unique et adapté à votre budget.",
    },
    {
      q: "Peut-on transformer un espace existant ?",
      a: "Oui, absolument. Nous adaptons nos solutions à vos contraintes architecturales. Nous avons transformé des salles de yoga, des chambres d'hôtel, des showrooms, etc.",
    },
    {
      q: "Produisez-vous les contenus ?",
      a: "Oui, c'est notre force. Nous gérons l'intégralité : conception, captation vidéo, animation 3D, motion design et storytelling.",
    },
    {
      q: "Travaillez-vous en France et en Suisse ?",
      a: "Oui, nous intervenons en France et en Suisse. Nous avons des références dans les deux pays.",
    },
    {
      q: "Quels délais prévoir ?",
      a: "Comptez 3-6 mois pour un projet standard : 1 mois d'analyse, 2-3 mois de création, 1-2 mois d'installation.",
    },
    {
      q: "Peut-on créer des expériences interactives ?",
      a: "Oui, nous créons des expériences réactives et gamifiées. Les visiteurs peuvent interagir avec le contenu.",
    },
    {
      q: "Quelle est la taille minimale d'un projet ?",
      a: "Nous travaillons sur des projets à partir de 50k€. Pas de projet trop petit ou trop grand.",
    },
  ];

  const projects = [
    {
      name: "MyGinger - Studio de Yoga Immersif",
      location: "Paris",
      problem: "Offrir une expérience de yoga différenciante et premium",
      benefit: "Augmentation de 45% de la satisfaction client",
      description: "Studio de yoga immersif avec projections 360° de paysages naturels et son spatial.",
    },
    {
      name: "Le Cardinal Hotel - Voyages Immersifs",
      location: "Île-de-France",
      problem: "Créer une expérience unique pour les clients hôtel",
      benefit: "Augmentation du tarif moyen de 30%",
      description: "Chambre immersive avec voyages virtuels en 360° à travers la France et le monde.",
    },
    {
      name: "WorldSkills - Spectacle Immersif",
      location: "Lyon",
      problem: "Créer un spectacle d'ouverture mémorable",
      benefit: "Plus de 10 000 spectateurs engagés",
      description: "Spectacle immersif interactif pour événement international majeur.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section - NEW MESSAGING */}
      <section className="hero-section pt-16 mt-16">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/hero-immersive-landscape-mRNbgdRjabNQ6GXWYo9RFd.webp"
          alt="Expérience immersive"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight">
              Transformez n'importe quel espace en expérience immersive mémorable
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-md">
              Nous concevons des expériences immersives sur mesure qui captivent les visiteurs, renforcent l'engagement et créent des souvenirs durables.
            </p>
            <div className="flex gap-4 justify-center pt-4 flex-wrap">
              <Button size="lg" className="bg-primary text-background hover:bg-primary/90 glow">
                <a href="/booking" className="flex items-center gap-2 no-underline">
                  Demander une étude de projet
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <a href="/gallery" className="flex items-center gap-2 no-underline">
                  Découvrir nos réalisations
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Immersion Works - BUSINESS BENEFITS */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pourquoi l'immersion fonctionne</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              L'immersion n'est pas une technologie, c'est une stratégie business qui transforme les visiteurs en clients fidèles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyImmersion.map((item, idx) => (
              <Card
                key={idx}
                className="bg-card border-border hover:border-primary transition-all animate-slide-up glow"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader>
                  <div className="text-primary mb-3">{item.icon}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications - 8 SECTORS */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Applications par secteur</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              L'immersion s'adapte à tous les secteurs. Découvrez comment transformer votre industrie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, idx) => (
              <Card
                key={idx}
                className="bg-background border-border hover:border-primary transition-all cursor-pointer group animate-slide-up"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <CardHeader>
                  <div className="text-4xl mb-3">{app.icon}</div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{app.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs font-bold text-primary mb-1">Problématique</p>
                    <p className="text-sm text-muted-foreground">{app.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary mb-1">Bénéfice</p>
                    <p className="text-sm text-muted-foreground">{app.benefit}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary mb-1">Exemple</p>
                    <p className="text-sm text-muted-foreground">{app.example}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach - 5 STEPS */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Notre approche</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous gérons l'intégralité de votre projet, de la conception à l'exploitation.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {approach.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-6 animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-background font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Content - WE PRODUCE */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold">Contenu sur mesure</h2>
              <div className="w-12 h-1 bg-primary" />
              <p className="text-lg text-muted-foreground">
                La technologie seule ne crée pas l'émotion. Le contenu fait toute la différence.
              </p>
              <p className="text-muted-foreground">
                Nous ne nous contentons pas d'intégrer des technologies. Nous créons les contenus qui font vivre vos espaces.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contentCapabilities.map((cap, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="text-primary">{cap.icon}</div>
                    <h3 className="font-bold">{cap.title}</h3>
                    <p className="text-sm text-muted-foreground">{cap.description}</p>
                  </div>
                ))}
              </div>

              <Button className="bg-primary text-background hover:bg-primary/90">
                <a href="/experiences" className="flex items-center gap-2 no-underline">
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

            <div className="rounded-lg overflow-hidden h-96 md:h-full min-h-96 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/tech-immersive-projection-D4ucStgg7e5U8QfMu4r3yy.webp"
                alt="Contenu immersif"
                className="w-full h-full object-cover glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Realizations - ENRICHED */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos réalisations</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des projets qui ont transformé les espaces et créé des expériences inoubliables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="bg-card border-border hover:border-primary transition-all overflow-hidden group animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-6xl opacity-20">✨</span>
                </div>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <p className="text-sm text-primary">{project.location}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs font-bold text-primary mb-1">Problématique</p>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary mb-1">Résultat</p>
                    <p className="text-sm text-muted-foreground">{project.benefit}</p>
                  </div>
                  <p className="text-xs text-muted-foreground italic">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Bluevista - COMPARISON */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pourquoi Bluevista</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous ne sommes pas un intégrateur. Nous sommes une agence d'expérience immersive complète.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-bold">Capacité</th>
                  <th className="text-center py-4 px-4 font-bold">Bluevista</th>
                  <th className="text-center py-4 px-4 font-bold">Intégrateur Classique</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-background/50 transition-colors">
                    <td className="py-4 px-4">{item.feature}</td>
                    <td className="text-center py-4 px-4">
                      {item.bluevista ? (
                        <span className="text-primary font-bold">✓</span>
                      ) : (
                        <span className="text-muted-foreground">✗</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {item.competitor ? (
                        <span className="text-primary font-bold">✓</span>
                      ) : (
                        <span className="text-muted-foreground">✗</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Questions fréquentes</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, idx) => (
              <Card
                key={idx}
                className="bg-card border-border cursor-pointer hover:border-primary transition-all animate-slide-up"
                style={{ animationDelay: `${idx * 50}ms` }}
                onClick={() => setExpandedFaq(expandedFaq === item.q ? null : item.q)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{item.q}</CardTitle>
                    <span className="text-primary font-bold text-xl">
                      {expandedFaq === item.q ? "−" : "+"}
                    </span>
                  </div>
                </CardHeader>
                {expandedFaq === item.q && (
                  <CardContent>
                    <p className="text-muted-foreground">{item.a}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container text-center animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Parlons de votre projet immersif</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discutons ensemble de la meilleure façon de transformer votre espace en expérience mémorable.
          </p>
          <Button size="lg" className="bg-primary text-background hover:bg-primary/90">
            <a href="/booking" className="flex items-center gap-2 no-underline">
              Demander une étude de projet
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-background" />
                </div>
                <span className="font-bold">Bluevista Immersive</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Agence d'expérience immersive. Nous transformons les espaces en moments inoubliables.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/experiences" className="hover:text-primary transition-colors">Expériences</a></li>
                <li><a href="/gallery" className="hover:text-primary transition-colors">Galerie</a></li>
                <li><a href="/about" className="hover:text-primary transition-colors">À Propos</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="mailto:contact@bluevista.fr" className="hover:text-primary transition-colors">contact@bluevista.fr</a></li>
                <li><a href="tel:+33123456789" className="hover:text-primary transition-colors">+33 (0)1 23 45 67 89</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Réseaux</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Bluevista Production. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
