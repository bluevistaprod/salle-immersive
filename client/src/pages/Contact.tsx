import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";

/**
 * DESIGN PHILOSOPHY: Cinematic Immersion
 * Page Contact avec formulaire et informations
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé ! Nous vous répondrons sous 24h.");
    setFormData({ name: "", email: "", subject: "", message: "" });
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Nous Contacter</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une question ? Un projet en tête ? Nous sommes là pour vous aider.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slide-up">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Envoyez-nous un Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Nom complet *</label>
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
                        <label className="block text-sm font-medium mb-2">Email *</label>
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

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Sujet *</label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Sujet de votre message"
                        required
                        className="bg-background border-border"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Votre message..."
                        rows={6}
                        required
                        className="bg-background border-border"
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-background hover:bg-primary/90"
                    >
                      Envoyer le Message
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
              {/* Email */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-primary" />
                    <CardTitle className="text-lg">Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href="mailto:contact@bluevista.fr" className="text-primary hover:underline font-medium">
                    contact@bluevista.fr
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">Réponse sous 24h</p>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-primary" />
                    <CardTitle className="text-lg">Téléphone</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href="tel:+33123456789" className="text-primary hover:underline font-medium">
                    +33 (0)1 23 45 67 89
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">Lun-Ven 9h-18h</p>
                </CardContent>
              </Card>

              {/* Address */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    <CardTitle className="text-lg">Adresse</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">Bluevista Production</p>
                  <p className="text-sm text-muted-foreground">Paris, France</p>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-primary" />
                    <CardTitle className="text-lg">Horaires</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div>
                    <p className="font-medium">Lundi - Vendredi</p>
                    <p className="text-muted-foreground">9h00 - 18h00</p>
                  </div>
                  <div>
                    <p className="font-medium">Samedi - Dimanche</p>
                    <p className="text-muted-foreground">Sur rendez-vous</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container text-center animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">Suivez-nous</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Retrouvez nos derniers projets et actualités sur les réseaux sociaux
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#"
              className="px-6 py-3 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Instagram
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
            >
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4 text-center">Nos Bureaux</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Paris */}
            <Card className="bg-card border-border animate-slide-up">
              <CardHeader>
                <CardTitle>Paris (Siège)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Adresse</p>
                  <p className="font-medium">Bluevista Production</p>
                  <p className="text-sm text-muted-foreground">Paris, France</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Contact</p>
                  <a href="tel:+33123456789" className="font-medium text-primary hover:underline">
                    +33 (0)1 23 45 67 89
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Lyon */}
            <Card className="bg-card border-border animate-slide-up" style={{ animationDelay: "100ms" }}>
              <CardHeader>
                <CardTitle>Lyon (Antenne)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Adresse</p>
                  <p className="font-medium">Bluevista Production</p>
                  <p className="text-sm text-muted-foreground">Lyon, France</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Contact</p>
                  <a href="tel:+33478123456" className="font-medium text-primary hover:underline">
                    +33 (0)4 78 12 34 56
                  </a>
                </div>
              </CardContent>
            </Card>
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
                q: "Comment puis-je demander un devis ?",
                a: "Vous pouvez remplir le formulaire de devis ou nous contacter directement par téléphone ou email.",
              },
              {
                q: "Quel est votre délai de réponse ?",
                a: "Nous répondons à tous les messages sous 24 heures ouvrables.",
              },
              {
                q: "Proposez-vous des consultations gratuites ?",
                a: "Oui, nous offrons une première consultation gratuite pour discuter de votre projet.",
              },
              {
                q: "Travaillez-vous en dehors de la France ?",
                a: "Oui, nous travaillons à l'international. Contactez-nous pour discuter de votre projet.",
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
