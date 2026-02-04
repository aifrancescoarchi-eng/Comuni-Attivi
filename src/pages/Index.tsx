import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Results />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
