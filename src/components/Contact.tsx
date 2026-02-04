import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Messaggio inviato",
      description: "Ti risponderemo al più presto. Grazie per averci contattato!",
    });
  };

  return (
    <section id="contatti" className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Parliamo del tuo comune
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Contattaci per una consulenza gratuita. Analizzeremo insieme le opportunità 
              più adatte alle esigenze del tuo territorio.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Contatto diretto</h3>
                <a
                  href="mailto:info@comuniattivi.it"
                  className="inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <Mail className="h-5 w-5" />
                  info@comuniattivi.it
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Rispondiamo entro</h3>
                <p className="text-muted-foreground">24-48 ore lavorative</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Per chi è</h3>
                <p className="text-muted-foreground text-sm">
                  Il nostro servizio è dedicato a sindaci, assessori e segretari comunali 
                  di comuni italiani sotto i 5.000 abitanti.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              {isSubmitted ? (
                <div className="bg-muted rounded-lg p-8 text-center">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Grazie per il tuo messaggio!
                  </h3>
                  <p className="text-muted-foreground">
                    Ti contatteremo presto per discutere delle esigenze del tuo comune.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome e cognome *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Mario Rossi"
                        className="bg-card"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Ruolo *</Label>
                      <Input
                        id="role"
                        name="role"
                        required
                        placeholder="Sindaco, Segretario..."
                        className="bg-card"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="mario.rossi@comune.it"
                        className="bg-card"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="comune">Nome del Comune *</Label>
                      <Input
                        id="comune"
                        name="comune"
                        required
                        placeholder="Comune di..."
                        className="bg-card"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Messaggio *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Descrivi brevemente le esigenze del tuo comune..."
                      className="bg-card resize-none"
                    />
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Inviando questo modulo accetti la nostra{" "}
                    <a href="#privacy" className="underline hover:text-foreground">
                      Privacy Policy
                    </a>
                    . I tuoi dati saranno trattati nel rispetto del GDPR.
                  </p>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                  >
                    {isSubmitting ? (
                      "Invio in corso..."
                    ) : (
                      <>
                        Invia messaggio
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
