const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="privacy" className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-3">Comuni Attivi</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                Supporto specializzato per i piccoli comuni italiani. 
                Bandi, analisi demografiche, strategie anti-spopolamento 
                e automazione amministrativa.
              </p>
            </div>
            <div className="sm:text-right">
              <h4 className="font-semibold mb-3">Contatti</h4>
              <p className="text-sm opacity-80">
                <a href="mailto:info@comuniattivi.it" className="hover:opacity-100 transition-opacity">
                  info@comuniattivi.it
                </a>
              </p>
            </div>
          </div>

          <hr className="border-primary-foreground/20 mb-8" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-70">
            <p>© {currentYear} Comuni Attivi. Tutti i diritti riservati.</p>
            <nav className="flex gap-6">
              <a href="#privacy-policy" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </a>
              <a href="#cookie-policy" className="hover:opacity-100 transition-opacity">
                Cookie Policy
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
