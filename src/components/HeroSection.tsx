export default function HeroSection() {
    return (
        <section className="flex py-12 items-center justify-center px-6 lg:px-12">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-1 items-center">
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
                        <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-lg">
                            The Ultimate PvP Staking And Battle Platform For The Virtual
                            Ecosystem. Stake $PVP, Deploy AI Agents, And Earn Genesis
                            Allocations 24/7.
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
                    <div className="relative flex items-center justify-center lg:justify-end h-full">
                        <div
                            className="w-screen h-full bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: "url('/images/hero-section.png')",
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                minHeight: '400px'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}