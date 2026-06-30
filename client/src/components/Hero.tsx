/**
 * Hero Section Component
 * Displays the portfolio hero with name, headline, and call-to-action
 * Design: Neomorphic Minimalism - soft, elevated surfaces with subtle shadows
 */

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663769130711/in3VCyne2FjPNyuXicYiks/hero-background-9gVezjAGaXucamy7cAxJib.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663769130711/in3VCyne2FjPNyuXicYiks/portfolio-logo-JnTAQYu5UXWDeVZtzZCSQC.webp"
              alt="Magesh K Logo"
              className="w-20 h-20 object-contain"
            />
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Magesh K
            </h1>
            <p className="text-2xl md:text-3xl text-accent font-semibold">
              Frontend Developer
            </p>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Crafting responsive, user-centric web experiences that matter. I build engaging digital solutions using modern technologies and thoughtful design principles.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              onClick={() => scrollToSection('projects')}
              className="neomorphic-button bg-accent text-accent-foreground hover:bg-accent/90 text-base"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="neomorphic-button text-foreground border-2 border-accent hover:bg-secondary text-base"
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
