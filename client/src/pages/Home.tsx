import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";

/**
 * DESIGN PHILOSOPHY: Premium Immersive Experience
 * Emotion > Explanation
 * "Je veux vivre ça" au lieu de "Je comprends comment ça fonctionne"
 */

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  // Applications avec images spectaculaires
  const applications = [
    {
      title: "Hôtellerie & Luxe",
      subtitle: "Expériences immersives premium",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/sector-hospitality-immersive-4NF74c9Ni6J654HCJ7d9pd.webp",
      cta: "Découvrir",
    },
    {
      title: "Musées & Culture",
      subtitle: "Patrimoine immersif",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/sector-museums-immersive-BJW7KqtYDKrJiS9rkigD6Z.webp",
      cta: "Découvrir",
    },
    {
      title: "Showrooms",
      subtitle: "Lancement produit spectaculaire",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/sector-showroom-immersive-4jQLNHGnWUvSCLaogTTcKd.webp",
      cta: "Découvrir",
    },
    {
      title: "Événementiel",
      subtitle: "Moments spectaculaires",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/sector-events-immersive-AT7xFuHaxfAyjryc2E9Zfs.webp",
      cta: "Découvrir",
    },
    {
      title: "Bien-être",
      subtitle: "Sanctuaires immersifs",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/sector-wellness-immersive-hXg8rCAW6deqAFhZWBD9vr.webp",
      cta: "Découvrir",
    },
    {
      title: "Restauration",
      subtitle: "Dîners spectaculaires",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/sector-retail-immersive-eQ9cWREryk254eSxVTWPPe.webp",
      cta: "Découvrir",
    },
    {
      title: "Corporate",
      subtitle: "Séminaires immersifs",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/sector-corporate-immersive-eW5WBYLc68TY8fRi5EZ49T.webp",
      cta: "Découvrir",
    },
    {
      title: "Éducation",
      subtitle: "Apprentissage immersif",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/sector-education-immersive-3fv7smzgvQFxCHZBNA2cDg.webp",
      cta: "Découvrir",
    },
  ];

  const whyImmersion = [
    { title: "Captiver", description: "L'attention sans distractions" },
    { title: "Émouvoir", description: "Créer des connexions durables" },
    { title: "Mémoriser", description: "5x plus mémorable" },
    { title: "Engager", description: "Transformer les visiteurs en acteurs" },
    { title: "Différencier", description: "Se démarquer de la concurrence" },
    { title: "Fidéliser", description: "Créer des ambassadeurs" },
  ];

  const approach = [
    { step: "1", title: "Analyse", description: "du lieu et des objectifs" },
    { step: "2", title: "Conception", description: "de l'expérience" },
    { step: "3", title: "Création", description: "des contenus immersifs" },
    { step: "4", title: "Installation", description: "et intégration" },
    { step: "5", title: "Exploitation", description: "et accompagnement" },
  ];

  const contentCapabilities = [
    "Captation vidéo 360°",
    "Drone",
    "Animation 3D",
    "Motion design",
    "Storytelling",
    "Scénographie",
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

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
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

      {/* Why Immersion Works - VISUAL STORYTELLING */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pourquoi l'immersion fonctionne</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {whyImmersion.map((item, idx) => (
              <div
                key={idx}
                className="text-center space-y-3 animate-slide-up"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{idx + 1}</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications - IMMERSIVE CARDS WITH FULL IMAGES */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Applications par secteur</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg h-80 cursor-pointer animate-slide-up hover:scale-105 transition-transform duration-500"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">{app.title}</h3>
                  <p className="text-sm text-gray-200 mb-4">{app.subtitle}</p>
                  <Button size="sm" className="bg-primary text-background hover:bg-primary/90 w-fit">
                    {app.cta}
                    <ArrowRight className="w-3 h-3 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach - VISUAL JOURNEY */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Notre approche</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous gérons l'intégralité de votre projet, de la conception à l'exploitation.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
            {approach.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 flex-1 animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-background font-bold text-2xl">
                  {item.step}
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {idx < approach.length - 1 && (
                  <div className="hidden md:block absolute translate-x-24">
                    <ArrowRight className="w-6 h-6 text-primary opacity-50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Content - HERO SECTION */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold">Contenu sur mesure</h2>
              <div className="w-12 h-1 bg-primary" />
              <p className="text-xl text-muted-foreground font-semibold">
                La technologie seule ne crée pas l'émotion. Le contenu fait toute la différence.
              </p>
              <p className="text-muted-foreground">
                Bluevista ne se contente pas d'installer la technologie. Bluevista crée les expériences.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {contentCapabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium">{cap}</span>
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

      {/* Realizations - PORTFOLIO PREMIUM */}
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
            {[
              {
                name: "MyGinger - Studio de Yoga Immersif",
                location: "Paris",
                problem: "Offrir une expérience de yoga différenciante et premium",
                benefit: "Augmentation de 45% de la satisfaction client",
              },
              {
                name: "Le Cardinal Hotel - Voyages Immersifs",
                location: "Île-de-France",
                problem: "Créer une expérience unique pour les clients hôtel",
                benefit: "Augmentation du tarif moyen de 30%",
              },
              {
                name: "WorldSkills - Spectacle Immersif",
                location: "Lyon",
                problem: "Créer un spectacle d'ouverture mémorable",
                benefit: "Plus de 10 000 spectateurs engagés",
              },
            ].map((project, idx) => (
              <Card
                key={idx}
                className="bg-card border-border hover:border-primary transition-all overflow-hidden group animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-6xl opacity-20">✨</span>
                </div>
                <CardContent className="pt-6 space-y-3">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{project.name}</h3>
                  <p className="text-sm text-primary">{project.location}</p>
                  <div>
                    <p className="text-xs font-bold text-primary mb-1">Problématique</p>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary mb-1">Résultat</p>
                    <p className="text-sm text-muted-foreground">{project.benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Bluevista - COMPARISON TABLE */}
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
                  <th className="text-center py-4 px-4 font-bold">Intégrateur</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Conception de l'expérience", bluevista: true, competitor: false },
                  { feature: "Production des contenus", bluevista: true, competitor: false },
                  { feature: "Intégration technique", bluevista: true, competitor: true },
                  { feature: "Gestion complète du projet", bluevista: true, competitor: false },
                  { feature: "Accompagnement stratégique", bluevista: true, competitor: false },
                  { feature: "Vidéos réelles et drone", bluevista: true, competitor: false },
                  { feature: "Contenus 3D custom", bluevista: true, competitor: false },
                ].map((item, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-background/50 transition-colors">
                    <td className="py-4 px-4">{item.feature}</td>
                    <td className="text-center py-4 px-4">
                      {item.bluevista ? <span className="text-primary font-bold">✓</span> : <span className="text-muted-foreground">✗</span>}
                    </td>
                    <td className="text-center py-4 px-4">
                      {item.competitor ? <span className="text-primary font-bold">✓</span> : <span className="text-muted-foreground">✗</span>}
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
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">{item.q}</h3>
                    <span className="text-primary font-bold text-xl">
                      {expandedFaq === item.q ? "−" : "+"}
                    </span>
                  </div>
                  {expandedFaq === item.q && (
                    <p className="text-muted-foreground mt-4">{item.a}</p>
                  )}
                </div>
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
