import HeroSection from "@/components/HeroSection";
import ServicosSection from "@/components/ServicosSection";
import BeneficiosSection from "@/components/BeneficiosSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import TopSectionsNav from "@/components/TopSectionsNav";
import MobileEmergencyBar from "@/components/MobileEmergencyBar";

const Index = () => (
  <>
    <TopSectionsNav />
    <main className="pt-20 md:pt-24 pb-20 md:pb-0">
      <HeroSection />
      <ServicosSection />
      <BeneficiosSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
    <MobileEmergencyBar />
  </>
);

export default Index;
