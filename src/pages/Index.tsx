import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { HeroSection } from "@/components/HeroSection";
import { AboutPreview } from "@/components/AboutPreview";
import { ServicesPreview } from "@/components/ServicesPreview";
import { StatsSection } from "@/components/StatsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutPreview />
        <ServicesPreview />
        <StatsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />

    </div>
  );
};

export default Index;
