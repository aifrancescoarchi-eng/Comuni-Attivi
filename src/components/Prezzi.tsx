import { Check, Gift, Euro } from "lucide-react";

const Prezzi = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Quanto costa
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Trasparenza totale: nessuna sorpresa, nessun vincolo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Free tier */}
          <div className="bg-card rounded-xl border-2 border-primary p-6 shadow-card relative">
            <div className="absolute -top-3 left-6">
              <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                CONSIGLIATO
              </span>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Primi 3 mesi</h3>
                <p className="text-2xl font-bold text-primary">Gratuito</p>
              </div>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Monitoraggio settimanale bandi</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Segnalazione bandi compatibili</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Supporto preparazione documenti</span>
              </li>
            </ul>
            
            <p className="text-xs text-muted-foreground border-t border-border pt-4">
              Nessun impegno. Se non funziona, fermiamo tutto senza problemi.
            </p>
          </div>

          {/* Paid tier */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Euro className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Dopo (se ti è utile)</h3>
                <p className="text-2xl font-bold text-foreground">100-200€<span className="text-base font-normal text-muted-foreground">/mese</span></p>
              </div>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Tutto incluso nel piano gratuito</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Supporto continuo durante tutto l'anno</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Priorità nella preparazione documenti</span>
              </li>
            </ul>
            
            <p className="text-xs text-muted-foreground border-t border-border pt-4">
              Contributo simbolico solo se hai visto risultati concreti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prezzi;
