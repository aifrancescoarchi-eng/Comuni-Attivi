import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ChiSono from "@/components/ChiSono";
import ComeFunziona from "@/components/ComeFunziona";
import BandiAttivi from "@/components/BandiAttivi";
import PerChi from "@/components/PerChi";
import Prezzi from "@/components/Prezzi";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ChiSono />
      <ComeFunziona />
      <BandiAttivi />
      <PerChi />
      <Prezzi />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
