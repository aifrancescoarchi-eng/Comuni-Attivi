const results = [
  {
    metric: "15+",
    label: "Comuni supportati",
  },
  {
    metric: "€2M+",
    label: "Fondi ottenuti",
  },
  {
    metric: "40%",
    label: "Tempo risparmiato",
  },
  {
    metric: "98%",
    label: "Soddisfazione",
  },
];

const Results = () => {
  return (
    <section id="risultati" className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Risultati concreti
          </h2>
          <p className="opacity-80 max-w-2xl mx-auto">
            I numeri che testimoniano il nostro impegno al fianco dei piccoli comuni
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {results.map((result) => (
            <div key={result.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">
                {result.metric}
              </div>
              <div className="text-sm opacity-80">{result.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <blockquote className="text-center">
            <p className="text-lg md:text-xl italic opacity-90 mb-4">
              "Grazie a Comuni Attivi abbiamo ottenuto finanziamenti che sembravano irraggiungibili 
              e digitalizzato processi che prima richiedevano giorni di lavoro."
            </p>
            <footer className="text-sm opacity-70">
              — Sindaco di un comune dell'Appennino, 1.800 abitanti
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Results;
