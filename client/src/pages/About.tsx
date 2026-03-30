import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, User } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";

/**
 * DESIGN PHILOSOPHY: Cinematic Immersion
 * Page À Propos avec blog intégré
 */

export default function About() {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const articles = [
    {
      id: 1,
      title: "L'Avenir des Expériences Immersives en 2025",
      excerpt:
        "Découvrez les tendances qui transforment le secteur de l'immersion : IA, réalité mixte et expériences personnalisées.",
      date: "15 Mars 2026",
      author: "Giz Rousseau",
      category: "Tendances",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/tech-immersive-projection-D4ucStgg7e5U8QfMu4r3yy.webp",
      content: `L'industrie des expériences immersives connaît une transformation rapide. Les technologies émergentes comme l'IA et la réalité mixte ouvrent de nouvelles possibilités pour créer des expériences plus personnalisées et engageantes.

Les salles immersives ne sont plus limitées aux musées et attractions touristiques. Elles deviennent des outils essentiels pour le bien-être, l'éducation et le divertissement corporatif.

Les tendances clés incluent :
- Intégration de l'IA pour adapter le contenu en temps réel
- Utilisation de capteurs pour mesurer l'engagement
- Expériences multi-sensorielles (son, lumière, température)
- Contenu généré dynamiquement basé sur les préférences utilisateur`,
    },
    {
      id: 2,
      title: "Comment les Salles Immersives Transforment le Bien-être",
      excerpt:
        "Explorez comment la projection 360° et le son spatial améliorent les pratiques de yoga, méditation et relaxation.",
      date: "10 Mars 2026",
      author: "Giz Rousseau",
      category: "Bien-être",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/wellness-immersive-yoga-5ughjodXaVDdHB4hi7iKDd.webp",
      content: `Les salles immersives révolutionnent l'approche du bien-être. En créant des environnements totalement immersifs, nous permettons aux utilisateurs de se déconnecter complètement du monde extérieur.

Les bénéfices sont mesurables :
- Réduction du stress de 40-60%
- Amélioration de la qualité du sommeil
- Augmentation de la satisfaction client de 45%
- Fidélisation accrue des clients

MyGinger à Paris est un excellent exemple de cette transformation. Leur studio de yoga immersif a révolutionné l'expérience de leurs clients en combinant la pratique du yoga avec des paysages naturels immersifs.`,
    },
    {
      id: 3,
      title: "Restauration Événementielle : Au-delà du Concept 'Le Petit Chef'",
      excerpt:
        "Comment les expériences immersives transforment les événements culinaires et créent des moments inoubliables.",
      date: "5 Mars 2026",
      author: "Giz Rousseau",
      category: "Restauration",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/restaurant-immersive-dinner-Yu5kxwFzPycagbFMr9J6cS.webp",
      content: `Le concept du 'Petit Chef' a ouvert les yeux du monde sur le potentiel des expériences culinaires immersives. Mais c'est juste le début.

Les restaurants et événementiers explorent maintenant des possibilités infinies :
- Dîners thématiques avec projection mapping
- Voyages culinaires à travers différentes régions du monde
- Synchronisation entre les plats et les projections
- Interactivité avec les convives

Les résultats parlent d'eux-mêmes : augmentation des tarifs de 30-50%, viralité sur les réseaux sociaux, et clients qui reviennent régulièrement.`,
    },
    {
      id: 4,
      title: "Immersion Corporative : Transformer les Séminaires",
      excerpt:
        "Comment les salles immersives améliorent l'engagement lors des séminaires et formations d'entreprise.",
      date: "28 Février 2026",
      author: "Giz Rousseau",
      category: "Événements",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/event-immersive-spectacle-SF86h4rwjzHLwNug7hfpSW.webp",
      content: `Les séminaires corporatifs traditionnels sont souvent ennuyeux et peu mémorables. Les salles immersives changent cette dynamique.

En créant un environnement immersif, les entreprises peuvent :
- Augmenter l'engagement des participants de 55%
- Améliorer la rétention des informations de 40%
- Créer une atmosphère de collaboration unique
- Renforcer la culture d'entreprise

Les résultats mesurés montrent une amélioration significative de la satisfaction des participants et une meilleure mémorisation des messages clés.`,
    },
    {
      id: 5,
      title: "Technologie Derrière l'Immersion : Projection, Son et Lumière",
      excerpt:
        "Plongez dans la technologie qui rend les expériences immersives possibles et captivantes.",
      date: "20 Février 2026",
      author: "Giz Rousseau",
      category: "Technologie",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/tech-immersive-projection-D4ucStgg7e5U8QfMu4r3yy.webp",
      content: `La magie de l'immersion repose sur trois piliers technologiques : la projection, le son et la lumière.

Projection 360° :
- Projecteurs haute résolution synchronisés
- Calibrage géométrique précis
- Contenu 4K ou 8K pour une qualité cinématographique

Son Spatial :
- Systèmes audio multi-canaux
- Positionnement 3D du son
- Immersion totale dans l'environnement sonore

Lumière Adaptative :
- Éclairage LED programmable
- Synchronisation avec le contenu vidéo
- Création d'ambiances dynamiques

La combinaison de ces trois éléments crée une expérience véritablement immersive.`,
    },
  ];

  const selectedArticleData = articles.find((a) => a.id === parseInt(selectedArticle as string));

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />
      {/* Spacer */}
      <div className="h-16" />

      {/* Hero Section */}
      <section className="hero-section pt-8">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/hero-immersive-landscape-mRNbgdRjabNQ6GXWYo9RFd.webp"
          alt="À Propos"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
              À Propos de Bluevista
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto" />
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow-md">
              20 ans d'expertise en production audiovisuelle et immersive
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-4xl font-bold">Notre Histoire</h2>
              <div className="w-12 h-1 bg-primary" />

              <p className="text-lg text-muted-foreground">
                Bluevista Production a été fondée en 2004 par des passionnés de production audiovisuelle. Après 20 ans d'expertise dans la capture d'images aériennes et 360°, nous avons naturellement évolué vers les expériences immersives.
              </p>

              <p className="text-muted-foreground">
                En 2023, nous avons lancé Bluevista Immersive, une division dédiée à la création de salles immersives pour l'hôtellerie, le bien-être et l'événementiel. Aujourd'hui, nous comptons 5 employés et travaillons sur des projets innovants en France et à l'international.
              </p>

              <p className="text-muted-foreground">
                Notre mission : transformer les espaces ordinaires en expériences extraordinaires grâce à la technologie immersive.
              </p>

              <Button className="bg-primary text-background hover:bg-primary/90">
                Nous contacter
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="rounded-lg overflow-hidden h-96 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/hp8bdYEEvBiSkxBwHM89uf/hero-immersive-landscape-mRNbgdRjabNQ6GXWYo9RFd.webp"
                alt="Notre histoire"
                className="w-full h-full object-cover glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4 text-center">Nos Valeurs</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Nous repoussons les limites de la technologie pour créer des expériences inédites.",
              },
              {
                title: "Qualité",
                description: "Chaque projet est réalisé avec le plus haut niveau de qualité cinématographique.",
              },
              {
                title: "Partenariat",
                description: "Nous travaillons en étroite collaboration avec nos clients pour réaliser leur vision.",
              },
            ].map((value, idx) => (
              <Card
                key={idx}
                className="bg-background border-border animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4 text-center">Notre Blog</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12" />

          {!selectedArticle ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, idx) => (
                <Card
                  key={article.id}
                  className="bg-card border-border hover:border-primary transition-all cursor-pointer overflow-hidden group animate-slide-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                  onClick={() => setSelectedArticle(article.id.toString())}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-primary text-background px-3 py-1 rounded-full text-xs font-bold">
                      {article.category}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">{article.title}</CardTitle>
                    <CardDescription>{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {article.author}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto animate-slide-up">
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-primary hover:underline mb-6 flex items-center gap-2"
              >
                ← Retour aux articles
              </button>

              {selectedArticleData && (
                <article className="space-y-6">
                  <img
                    src={selectedArticleData.image}
                    alt={selectedArticleData.title}
                    className="w-full h-96 object-cover rounded-lg glow"
                  />

                  <div>
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">
                        {selectedArticleData.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {selectedArticleData.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {selectedArticleData.author}
                      </span>
                    </div>

                    <h1 className="text-4xl font-bold mb-6">{selectedArticleData.title}</h1>

                    <div className="prose prose-invert max-w-none">
                      {selectedArticleData.content.split("\n\n").map((paragraph, idx) => (
                        <p key={idx} className="text-muted-foreground mb-4 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container text-center animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">Prêt à Créer l'Immersion ?</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Contactez-nous pour discuter de votre projet immersif et découvrir comment nous pouvons transformer votre vision en réalité.
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
