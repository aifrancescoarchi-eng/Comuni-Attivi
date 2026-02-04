import { FileText, BarChart3, MapPin, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: FileText,
    title: "Supporto Bandi",
    description:
      "Individuazione, preparazione e gestione delle domande per bandi regionali, nazionali ed europei. Massimizziamo le opportunità di finanziamento per il vostro comune.",
  },
  {
    icon: BarChart3,
    title: "Analisi Demografica",
    description:
      "Studio approfondito dei trend demografici, proiezioni future e identificazione di criticità. Dati chiari per decisioni informate.",
  },
  {
    icon: MapPin,
    title: "Strategie Anti-Spopolamento",
    description:
      "Piani d'azione personalizzati per attrarre nuovi residenti, incentivare il ritorno e valorizzare le risorse locali.",
  },
  {
    icon: Bot,
    title: "Automazione con IA",
    description:
      "Soluzioni di intelligenza artificiale per semplificare pratiche amministrative, ridurre i tempi e migliorare i servizi ai cittadini.",
  },
];

const Services = () => {
  return (
    <section id="servizi" className="py-16 md:py-20 lg:py-24 bg-section-gradient">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            I nostri servizi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluzioni concrete per le sfide quotidiane dei piccoli comuni italiani
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="bg-card border-border/50 shadow-card hover:shadow-soft transition-shadow duration-300 group"
            >
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground mb-4 group-hover:scale-105 transition-transform duration-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
