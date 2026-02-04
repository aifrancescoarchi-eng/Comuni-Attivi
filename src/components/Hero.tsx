import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-hero-gradient text-primary-foreground overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="animate-fade-in">
            <span className="inline-block text-sm font-medium tracking-widest uppercase opacity-80 mb-4">
              Per i piccoli comuni italiani
            </span>
          </div>

          {/* Main Title */}
          <h1 className="animate-fade-in-up text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Comuni Attivi
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up animate-delay-100 text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
            Supportiamo i comuni sotto i 5.000 abitanti con bandi, analisi demografiche, 
            strategie anti-spopolamento e automazione amministrativa basata su intelligenza artificiale.
          </p>

          {/* CTA */}
          <div className="animate-fade-in-up animate-delay-200 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all"
              onClick={() => document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contattaci
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 px-8 py-6 text-base"
              onClick={() => document.getElementById("servizi")?.scrollIntoView({ behavior: "smooth" })}
            >
              Scopri i servizi
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 60L1440 60L1440 30C1440 30 1200 0 720 0C240 0 0 30 0 30L0 60Z" fill="hsl(210 20% 98%)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
