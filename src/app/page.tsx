
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import FAQSection from "../components/FAQSection";
import { Partners } from "@/components/Partners";
import SponsorsSection from "@/components/SponsorsSection";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <FAQSection />
      <Partners />
    </div>
  );
}