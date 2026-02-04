import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/393XXXXXXXXX"; // Sostituire con numero reale

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="lg"
        className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold shadow-lg hover:shadow-xl transition-all rounded-full h-14 w-14 p-0"
        aria-label="Scrivimi su WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
