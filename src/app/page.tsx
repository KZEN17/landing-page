
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import FAQSection from "../components/FAQSection";
import { Partners } from "@/components/Partners";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <FAQSection />
      <Partners />
      <Footer />
    </div>
  );
}