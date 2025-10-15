import HeroSection from "@/components/hero-section";
import Features from "@/components/features-1";
import ContentSection from "@/components/content-3";
import StatsSection from "@/components/stats";
import ContactSection from "@/components/contact";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <ContentSection />
      <StatsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
