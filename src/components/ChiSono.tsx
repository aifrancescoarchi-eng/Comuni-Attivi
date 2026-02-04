import { User } from "lucide-react";

const ChiSono = () => {
  return (
    <section id="chi-sono" className="py-16 md:py-20 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar placeholder */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-12 h-12 md:w-16 md:h-16 text-primary" />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Chi sono
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Mi chiamo <span className="font-semibold text-foreground">[Nome]</span>, ho 19 anni 
                  e sono di <span className="font-semibold text-foreground">Vallesaccarda</span>, un 
                  piccolo comune di 1.200 abitanti in Irpinia.
                </p>
                
                <p>
                  Vedo ogni giorno le difficoltà che i nostri comuni affrontano: pochi dipendenti, 
                  tanto lavoro, e opportunità di finanziamento che passano inosservate perché non 
                  c'è tempo di cercarle.
                </p>
                
                <p>
                  Ho deciso di dedicare il mio tempo a monitorare i bandi pubblici - Regione Campania, 
                  PNRR, fondi europei - e aiutare i comuni della zona a cogliere queste opportunità.
                </p>
                
                <p className="text-foreground font-medium">
                  Non sono una società di consulenza. Sono un ragazzo del territorio che vuole rendersi utile.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                  📍 Vallesaccarda (AV)
                </span>
                <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                  🎂 19 anni
                </span>
                <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                  🏔️ Irpinia
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiSono;
