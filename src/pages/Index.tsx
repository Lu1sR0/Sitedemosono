import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Authority from "@/components/Authority";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Journey from "@/components/Journey";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Authority />
      <Problems />
      <Services />
      <Methodology />
      <Journey />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
