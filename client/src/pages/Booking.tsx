import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";

/**
 * DESIGN PHILOSOPHY: Cinematic Immersion
 * Page de réservation/devis avec formulaire
 */

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    experienceType: "yoga",
    duration: "1-2",
    location: "",
    budget: "sur-devis",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const experienceOptions = [
    { value: "yoga", label: "Yoga & Bien-être" },
    { value: "hospitality", label: "Hôtellerie Luxe" },
    { value: "restaurant", label: "Restauration Événementielle" },
    { value: "events", label: "Événements Corporatifs" },
  ];

  const durationOptions = [
    { value: "1-2", label: "1-2 heures" },
    { value: "2-4", label: "2-4 heures" },
    { value: "full-day", label: "Journée complète" },
    { value: "custom", label: "Sur mesure" },
  ];

  const budgetOptions = [
    { value: "10k-50k", label: "10k - 50k €" },
    { value: "50k-100k", label: "50k - 100k €" },
    { value: "100k+", label: "100k €+" },
    { value: "sur-devis", label: "À discuter" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated submission
    setSubmitted(true);
    toast.success("Devis demandé avec succès ! Nous vous recontacterons sous 24h.");
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        experienceType: "yoga",
        duration: "1-2",
        location: "",
        budget: "sur-devis",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />
      {/* Spacer */}
      <div className="h-16" />

      {/* Hero Section */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Demander un Devis</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Décrivez votre projet immersif et nous vous proposerons une solution adaptée à vos besoins
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2 animate-slide-up">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Formulaire de Devis</CardTitle>
                  <CardDescription>Tous les champs marqués d'un * sont obligatoires</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Nom complet *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jean Dupont"
                          required
                          className="bg-background border-border"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jean@example.com"
                          required
                          className="bg-background border-border"
                        />
                      </div>
                    </div>

                    {/* Phone & Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Téléphone *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+33 1 23 45 67 89"
                          required
                          className="bg-background border-border"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Entreprise / Organisation
                        </label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Votre entreprise"
                          className="bg-background border-border"
                        />
                      </div>
                    </div>

                    {/* Experience Type */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Type d'expérience immersive *
                      </label>
                      <select
                        name="experienceType"
                        value={formData.experienceType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground"
                      >
                        {experienceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Duration & Location */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Durée souhaitée *
                        </label>
                        <select
                          name="duration"
                          value={formData.duration}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground"
                        >
                          {durationOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Localisation *
                        </label>
                        <Input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="Paris, Lyon, etc."
                          required
                          className="bg-background border-border"
                        />
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Budget estimé *
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Détails de votre projet
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre projet, vos objectifs, vos contraintes..."
                        rows={5}
                        className="bg-background border-border"
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-background hover:bg-primary/90"
                    >
                      Envoyer ma demande de devis
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
              {/* Info Card 1 */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Délai de réponse</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Nous vous recontacterons sous <span className="text-primary font-bold">24 heures</span> pour discuter de votre projet en détail.
                  </p>
                </CardContent>
              </Card>

              {/* Info Card 2 */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Processus</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">1. Analyse</p>
                      <p className="text-xs text-muted-foreground">Étude de votre espace et besoins</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">2. Proposition</p>
                      <p className="text-xs text-muted-foreground">Devis détaillé et plan technique</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">3. Réalisation</p>
                      <p className="text-xs text-muted-foreground">Installation et formation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Info Card 3 */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Contact Direct</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <a href="mailto:contact@bluevista.fr" className="text-primary font-medium hover:underline">
                      contact@bluevista.fr
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Téléphone</p>
                    <a href="tel:+33123456789" className="text-primary font-medium hover:underline">
                      +33 (0)1 23 45 67 89
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4 text-center">Questions Fréquentes</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "Quel est le délai de mise en place ?",
                a: "Entre 4 et 12 semaines selon la complexité du projet et les adaptations nécessaires.",
              },
              {
                q: "Pouvez-vous adapter une salle existante ?",
                a: "Oui, nous pouvons intégrer nos solutions dans la plupart des espaces existants.",
              },
              {
                q: "Quel est le coût d'une salle immersive ?",
                a: "Les tarifs varient de 50k à 500k€ selon les spécifications. Contactez-nous pour un devis.",
              },
              {
                q: "Proposez-vous la maintenance ?",
                a: "Oui, nous offrons des contrats de maintenance et de support technique.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <h3 className="font-bold mb-2 text-primary">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
