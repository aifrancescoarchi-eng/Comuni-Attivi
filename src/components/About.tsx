import { Building2, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="chi-siamo" className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Chi siamo
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comuni Attivi nasce dalla consapevolezza che i piccoli comuni italiani rappresentano 
            il cuore del nostro territorio. Con competenze multidisciplinari in pubblica amministrazione, 
            analisi dati e tecnologie digitali, affianchiamo sindaci e segretari comunali 
            nella gestione quotidiana e nella pianificazione strategica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
              <Building2 className="h-7 w-7" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Esperienza locale</h3>
            <p className="text-sm text-muted-foreground">
              Conosciamo le sfide specifiche dei comuni sotto i 5.000 abitanti
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
              <Users className="h-7 w-7" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Approccio umano</h3>
            <p className="text-sm text-muted-foreground">
              Ascoltiamo le esigenze reali per proporre soluzioni concrete
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
              <TrendingUp className="h-7 w-7" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Innovazione pratica</h3>
            <p className="text-sm text-muted-foreground">
              Tecnologie avanzate al servizio della semplicità operativa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
