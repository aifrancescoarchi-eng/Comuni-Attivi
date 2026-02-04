const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-primary-foreground/80">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            Supporto Bandi Irpinia © 2026
          </p>
          
          <a
            href="#contatti"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-sm hover:text-primary-foreground transition-colors underline underline-offset-4"
          >
            Scrivimi
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
