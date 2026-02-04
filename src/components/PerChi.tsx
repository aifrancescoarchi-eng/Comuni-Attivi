import { MapPin } from "lucide-react";

const communes = [
  "Vallesaccarda",
  "Gesualdo",
  "Montella",
  "Cassano Irpino",
  "Trevico",
  "Frigento",
  "Sturno",
  "Villamaina",
  "Castelfranci",
  "Fontanarosa",
];

const PerChi = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl border border-border p-8 shadow-card">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Map illustration */}
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  {/* Stylized map of Irpinia */}
                  <div className="absolute inset-0 bg-primary/10 rounded-full" />
                  <div className="absolute inset-4 bg-primary/20 rounded-full" />
                  <div className="absolute inset-8 bg-primary/30 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                      <span className="text-xs font-semibold text-primary">30 km</span>
                    </div>
                  </div>
                  {/* Dots representing communes */}
                  <div className="absolute top-4 left-1/2 w-2 h-2 bg-accent rounded-full" />
                  <div className="absolute top-8 right-8 w-2 h-2 bg-accent rounded-full" />
                  <div className="absolute bottom-12 left-6 w-2 h-2 bg-accent rounded-full" />
                  <div className="absolute bottom-6 right-12 w-2 h-2 bg-accent rounded-full" />
                  <div className="absolute top-1/2 left-4 w-2 h-2 bg-accent rounded-full" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Per chi è questo servizio
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  Il mio servizio è dedicato ai <span className="font-semibold text-foreground">comuni 
                  di Vallesaccarda e zona</span>, nel raggio di circa 30 km in Irpinia (provincia di Avellino).
                </p>

                <div>
                  <p className="text-sm font-semibold text-foreground mb-3">Alcuni comuni serviti:</p>
                  <div className="flex flex-wrap gap-2">
                    {communes.map((commune, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full"
                      >
                        {commune}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerChi;
