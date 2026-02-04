import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Euro } from "lucide-react";

const upcomingGrants = [
  {
    name: "Efficientamento energetico",
    deadline: "30 marzo 2026",
    amount: "50-80k €",
  },
  {
    name: "Digitalizzazione servizi",
    deadline: "15 aprile 2026",
    amount: "30-50k €",
  },
  {
    name: "Rigenerazione urbana",
    deadline: "30 aprile 2026",
    amount: "80-120k €",
  },
];

const Hero = () => {
  const whatsappLink = "https://wa.me/393XXXXXXXXX"; // Sostituire con numero reale

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container">
        {/* Badge */}
        <div className="animate-fade-in mb-6">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
            📍 Vallesaccarda e dintorni - Servizio locale
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Text */}
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6 text-balance">
              Ti aiuto a trovare e vincere bandi pubblici
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Monitoro i bandi per te, preparo la documentazione, ti faccio risparmiare tempo.{" "}
              <span className="font-semibold text-foreground">Gratis per i primi 3 mesi.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-button"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Scrivimi su WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-secondary"
                onClick={() => document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" })}
              >
                Mandami una email
              </Button>
            </div>
          </div>

          {/* Right Column - Upcoming Grants Box */}
          <div className="animate-fade-in-up animate-delay-200">
            <div className="bg-card rounded-xl border border-border p-6 shadow-card">
              <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Prossimi bandi in scadenza
              </h2>
              
              <div className="space-y-4">
                {upcomingGrants.map((grant, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between py-3 border-b border-border last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-medium text-foreground text-sm">{grant.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">Scadenza: {grant.deadline}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-semibold text-primary">
                      <Euro className="h-4 w-4" />
                      {grant.amount}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                Lista aggiornata ogni lunedì mattina
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
