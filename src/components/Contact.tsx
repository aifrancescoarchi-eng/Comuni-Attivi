import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappLink = "https://wa.me/393XXXXXXXXX"; // Sostituire con numero reale

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Messaggio inviato!",
      description: "Ti rispondo entro 24 ore. Grazie!",
    });
  };

  return (
    <section id="contatti" className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Parliamo del tuo comune
            </h2>
            <p className="text-muted-foreground">
              Scrivimi per una chiacchierata senza impegno.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Contatti diretti</h3>
                
                <div className="space-y-4">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-medium"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 text-accent" />
                    </div>
                    WhatsApp
                  </a>
                  
                  <a
                    href="mailto:tuaemail@example.com"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-medium"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    tuaemail@example.com
                  </a>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                    </div>
                    Vallesaccarda (AV)
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  ⏱️ Rispondo entro <span className="font-medium text-foreground">24 ore</span>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              {isSubmitted ? (
                <div className="bg-primary/5 rounded-xl p-8 text-center border border-primary/20">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Messaggio ricevuto!
                  </h3>
                  <p className="text-muted-foreground">
                    Ti rispondo entro 24 ore. Grazie per la fiducia!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Il tuo nome"
                        className="bg-card"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="tua@email.it"
                        className="bg-card"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comune">Comune *</Label>
                    <Input
                      id="comune"
                      name="comune"
                      required
                      placeholder="Nome del tuo comune"
                      className="bg-card"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Messaggio</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Come posso aiutarti?"
                      className="bg-card resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-button"
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
