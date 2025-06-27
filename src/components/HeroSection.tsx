import Image from "next/image";
export default function HeroSection() {
    return (
        <section className="flex py-12 items-center justify-center px-6 lg:px-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-[40%_60%] gap-0 items-center">
                    {/* Left Content */}
                    <div className="space-y-0">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 text-btGreen text-sm font-medium backdrop-blur-sm">
                            PvP Staking • Virtual Agents • Genesis Access
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                            Deploy Virtual
                            <br />
                            <span className="text-btGreen">Agents</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg lg:text-xl text-btGrey leading-relaxed max-w-lg">
                            Grind Points. Claim Genesis. Rule PvP.
                            Create Your Agent, Stake Once, Farm Forever.
                            $PVP lets you deploy a virtual battle agent that grinds points 24/7 — earning you Genesis allocations, leaderboard rewards, and staking yield, all on autopilot.

                        </p>

                        {/* Stats Row */}
                        <div className="flex items-center gap-8 mt-12">
                            <div className="text-left">
                                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                                    1,337
                                    <span className="text-btGreen ml-1">+</span>
                                </div>
                                <div className="text-sm text-white/60">Active Farmers</div>
                            </div>
                            {/* CTA Button */}
                            <button className="bg-btGreen hover:bg-btGreen/90 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg">
                                START FARMING
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Hero Image */}
                    <div className="relative flex items-center justify-center lg:justify-start h-full">
                        <Image
                            src={'/images/hero-section.png'}
                            fill={true}
                            alt="Hero Image"

                        />
                    </div>
                </div>
            </div>
        </section>
    );
}