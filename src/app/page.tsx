import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import FAQSection from "../components/FAQSection";
import { Partners } from "@/components/Partners";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import TokenomicsSection from "@/components/Tokenomics";
import CreateAgentSection from "@/components/CreateAgentSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      {/* Container for card-based sections with responsive spacing and padding */}
      <div className="space-y-4 md:space-y-8 max-w-[95%] md:max-w-[90%] mx-auto px-4 md:px-8 lg:px-12 pb-20">
        <div className="bg-[#171717a4] backdrop-blur-xs rounded-xl md:rounded-3xl shadow-2xl">
          {/* Header - stays on top */}
          <Header />
        </div>
        <div className="bg-[#171717a4] backdrop-blur-xs rounded-xl md:rounded-3xl shadow-2xl">
          {/* Hero Section - no card wrapper, full viewport */}
          <HeroSection />
        </div>
        {/* Features Section Card */}

        <div className="bg-[#171717a4] backdrop-blur-xs rounded-xl md:rounded-3xl shadow-2xl">
          <FeaturesSection />
        </div>

        {/* Create Agent Section Card */}
        <div className="bg-[#171717a4] backdrop-blur-xs rounded-xl md:rounded-3xl shadow-2xl">
          <CreateAgentSection />
        </div>
        {/* Tokenomics Section Card */}
        <div className="bg-[#171717a4] backdrop-blur-xs rounded-xl md:rounded-3xl shadow-2xl">
          <TokenomicsSection />
        </div>
        {/* FAQ Section Card */}
        <div className="bg-[#171717a4] backdrop-blur-xs rounded-xl md:rounded-3xl shadow-2xl">
          <FAQSection />
        </div>

        {/* Partners Section Card */}
        <div className="bg-[#171717a4] backdrop-blur-xs rounded-xl md:rounded-3xl shadow-2xl">
          <Partners />
        </div>

        {/* Footer Card */}
        <div className="bg-[#171717a4] backdrop-blur-xs rounded-xl md:rounded-3xl shadow-2xl">
          <Footer />
        </div>
      </div>
    </div>
  );
}