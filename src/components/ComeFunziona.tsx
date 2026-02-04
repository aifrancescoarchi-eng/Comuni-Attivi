import { Search, Filter, FileText } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Monitoro ogni settimana",
    description: "Controllo Regione Campania, GAL Irpinia, PNRR, ANCI, Ministero dell'Interno. Nessun bando ti sfugge.",
  },
  {
    icon: Filter,
    title: "Ti segnalo quelli adatti",
    description: "Solo bandi compatibili col tuo comune: importo sotto 100k, procedura semplice, requisiti che puoi soddisfare.",
  },
  {
    icon: FileText,
    title: "Preparo la documentazione",
    description: "Bozza progetto, cronoprogramma, budget preliminare. Tu integri con i dati del comune e firmi.",
  },
];

const ComeFunziona = () => {
  return (
    <section id="come-funziona" className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Come funziona
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Un processo semplice in tre passaggi per aiutarti a ottenere finanziamenti.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative text-center"
            >
              {/* Step number connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
              )}
              
              {/* Icon */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-5">
                <step.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-accent text-accent-foreground text-sm font-bold rounded-full flex items-center justify-center">
                  {index + 1}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComeFunziona;
