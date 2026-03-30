import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useLocation } from "wouter";

export default function Navigation() {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-background" />
          </div>
          <span className="font-bold text-lg">Bluevista Immersive</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="/experiences"
            className={`text-sm transition-colors ${
              isActive("/experiences") ? "text-primary font-semibold" : "hover:text-primary"
            }`}
          >
            Expériences
          </a>
          <a
            href="/gallery"
            className={`text-sm transition-colors ${
              isActive("/gallery") ? "text-primary font-semibold" : "hover:text-primary"
            }`}
          >
            Galerie
          </a>
          <a
            href="/about"
            className={`text-sm transition-colors ${
              isActive("/about") ? "text-primary font-semibold" : "hover:text-primary"
            }`}
          >
            À Propos
          </a>
          <a
            href="/contact"
            className={`text-sm transition-colors ${
              isActive("/contact") ? "text-primary font-semibold" : "hover:text-primary"
            }`}
          >
            Contact
          </a>
          <Button className="bg-primary text-background hover:bg-primary/90">
            <a href="/booking" className="no-underline">
              Demander un devis
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 hover:bg-card rounded-lg transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
