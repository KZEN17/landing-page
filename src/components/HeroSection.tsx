import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="flex py-6 md:py-12 items-center justify-center px-4 md:px-6 lg:px-6">
            <div className="container mx-auto">
                {/* Mobile-first responsive grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 lg:gap-0 items-center">
                    {/* Left Content */}
                    <div className="space-y-4 md:space-y-6 order-2 lg:order-1 text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center px-3 md:px-4 py-1 text-btGreen text-xs md:text-sm font-medium">
                            PvP Staking • Virtual Agents • Genesis Access
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                            Deploy Virtual
                            <br />
                            <span className="text-btGreen">Agents</span>
                        </h1>

                        {/* Description */}
                        <p className="text-base md:text-lg lg:text-xl text-btGrey leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Grind Points. Claim Genesis. Rule PvP.
                            Create Your Agent, Stake Once, Farm Forever.
                            $PVP lets you deploy a virtual battle agent that grinds points 24/7 — earning you Genesis allocations, leaderboard rewards, and staking yield, all on autopilot.
                        </p>

                        {/* Stats Row - Responsive layout */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-8 mt-8 md:mt-12">
                            <div className="text-center lg:text-left">
                                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                                    1,337
                                    <span className="text-btGreen ml-1">+</span>
                                </div>
                                <div className="text-xs md:text-sm text-white/60">Active Farmers</div>
                            </div>
                            {/* CTA Button */}
                            <button className="bg-btGreen hover:bg-btGreen/90 text-black font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl transition-all duration-300 transform hover:scale-105 text-base md:text-lg w-full sm:w-auto">
                                START FARMING
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Hero Image */}
                    <div className="relative flex items-center justify-center lg:justify-start h-64 md:h-80 lg:h-full order-1 lg:order-2">
                        <div className="relative w-full h-full max-w-md lg:max-w-none">
                            <Image
                                src={'/images/hero-section.png'}
                                fill={true}
                                alt="Hero Image"
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 60vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}