import { Calendar, Building2, Euro, Users } from "lucide-react";

const grants = [
  {
    name: "Efficientamento energetico edifici pubblici",
    entity: "Regione Campania",
    deadline: "30 marzo 2026",
    amount: "50-80k €",
    eligibility: "Comuni < 5.000 abitanti",
  },
  {
    name: "Digitalizzazione servizi comunali",
    entity: "PNRR - Misura 1.4",
    deadline: "15 aprile 2026",
    amount: "30-50k €",
    eligibility: "Tutti i comuni",
  },
  {
    name: "Rigenerazione urbana piccoli borghi",
    entity: "Ministero Cultura",
    deadline: "30 aprile 2026",
    amount: "80-120k €",
    eligibility: "Comuni < 3.000 abitanti",
  },
  {
    name: "Sostegno attività commerciali locali",
    entity: "GAL Irpinia",
    deadline: "15 maggio 2026",
    amount: "20-40k €",
    eligibility: "Comuni area GAL",
  },
];

const BandiAttivi = () => {
  return (
    <section id="bandi" className="py-16 md:py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Bandi monitorati questa settimana
          </h2>
          <p className="text-sm text-muted-foreground">
            Ultimo aggiornamento: <span className="font-medium text-foreground">5 febbraio 2026</span>
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-card rounded-xl border border-border overflow-hidden shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Nome bando</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">Ente</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">Scadenza</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">Importo</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Chi può partecipare</th>
                </tr>
              </thead>
              <tbody>
                {grants.map((grant, index) => (
                  <tr key={index} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                    <td className="py-4 px-6 font-medium text-foreground">{grant.name}</td>
                    <td className="py-4 px-4 text-muted-foreground">{grant.entity}</td>
                    <td className="py-4 px-4 text-muted-foreground">{grant.deadline}</td>
                    <td className="py-4 px-4 font-semibold text-primary">{grant.amount}</td>
                    <td className="py-4 px-6 text-muted-foreground">{grant.eligibility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {grants.map((grant, index) => (
            <div key={index} className="bg-card rounded-xl border border-border p-5 shadow-card">
              <h3 className="font-semibold text-foreground mb-3">{grant.name}</h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building2 className="h-4 w-4 text-primary" />
                  {grant.entity}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4 text-primary" />
                  Scadenza: {grant.deadline}
                </div>
                <div className="flex items-center gap-2 font-semibold text-primary">
                  <Euro className="h-4 w-4" />
                  {grant.amount}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4 text-primary" />
                  {grant.eligibility}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          📅 Lista aggiornata ogni lunedì mattina
        </p>
      </div>
    </section>
  );
};

export default BandiAttivi;
