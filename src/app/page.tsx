import { Feature } from "@/components/Features";
import { HeroSection } from "@/components/HeroSection";
import { Partners } from "@/components/Partners";
import { Icons } from "@/lib/icons";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-btDark text-white w-full">
      {/* Header */}
      <header className="flex justify-end items-center p-6">
        <></>
        <a href="https://x.com/vpvpfun" target="_blank" rel="noreferrer">
          <button  >
            <Icons.twitter className="h-6 w-6" />
          </button>
        </a>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <HeroSection
          // refferal={referal}
          title="Welcome to Our Platform"
          subtitle={{
            regular: "Turn Your Token into a ",
            gradient: " Revenue-Generating Asset",
          }}
          description="Integrate your token into the VPVP ecosystem, deposit it in battles, and unlock new streams of automated earnings. Compete strategically and grow your project."
          ctaText="CREATE AGENT"
          ctaHref="/signup"
          bottomImage={{
            light: "https://www.launchuicomponents.com/app-light.png",
            dark: "https://www.launchuicomponents.com/app-dark.png",
          }}
          gridOptions={{
            angle: 65,
            opacity: 0.4,
            cellSize: 50,
            lightLineColor: "#4a4a4a",
            darkLineColor: "#2a2a2a",
          }}
        />
      </section>

      <section className="px-4 py-16">
        <Feature />

      </section>

      {/* Previous Partners */}
      <section className="px-4 py-16">
        <Partners />
      </section>
    </div>
  );
}