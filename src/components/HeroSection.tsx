// import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-black via-btDark to-black overflow-hidden">
            {/* Background Image - you can replace this with your bg-gradient.png */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{
                    backgroundImage: "url('/bg-gradient.png')",
                    // Fallback gradient if image doesn't load
                    background: "linear-gradient(135deg, rgba(209, 253, 10, 0.1) 0%, rgba(84, 57, 144, 0.1) 50%, rgba(255, 0, 92, 0.1) 100%)"
                }}
            ></div>

            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-btDark/80"></div>

            {/* Enhanced background decorative elements */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-btGreen/30 to-btGreen/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-40 left-20 w-64 h-64 bg-gradient-to-br from-btGreen/20 to-btGreen/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-lime-400/10 to-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl"></div>

            {/* Floating particles */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-btGreen rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-btGreen rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-btGreen/50 rounded-full animate-bounce"></div>

            <div className="relative z-10 container mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 bg-btGreen/10 border border-btGreen/20 rounded-full px-4 py-2 text-btGreen text-sm font-medium backdrop-blur-sm">
                            <span className="w-2 h-2 bg-btGreen rounded-full animate-pulse"></span>
                            PvP Staking • Virtual Agents • Genesis Access
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                            Deploy Virtual Agents
                            <br />
                            <span className="bg-gradient-to-r from-btGreen to-btGreen/80 bg-clip-text text-transparent">
                                Farm Genesis Points
                            </span>
                        </h1>

                        <p className="text-xl text-btGrey leading-relaxed max-w-lg">
                            The ultimate PvP staking and battle platform for the Virtual Ecosystem.
                            Stake $PVP, deploy AI agents, and earn Genesis allocations 24/7.
                        </p>

                        <div className="space-y-4">
                            <button className="group relative bg-btGreen hover:bg-opacity-90 text-btDark font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <span className="relative z-10 text-black">Start Farming Now</span>
                                <div className="absolute inset-0 bg-btGreen rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 blur-sm"></div>
                            </button>

                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-3 text-btGrey">
                                    <span className="text-sm">Active Farmers</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-bold text-white">1,337</span>
                                        <span className="text-btGreen font-semibold">+</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-btGrey">
                                    <span className="text-sm">$PVP Staked</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-2xl font-bold text-btGreen">$2.4M</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Enhanced 3D Visual with Virtual Agent */}
                    <div className="relative flex items-center justify-center lg:justify-end">
                        <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                            {/* Main 3D Ring */}
                            <div className="absolute inset-0 rounded-full animate-spin-slow shadow-2xl shadow-btGreen/30 border-4 border-btGreen/20">
                                <div className="absolute inset-4 bg-gradient-to-tr from-black to-btDark rounded-full border-2 border-btGreen/10">
                                    <div className="absolute inset-8 bg-btGreen rounded-full animate-pulse flex items-center justify-center">
                                        {/* Virtual Agent Icon/Image placeholder */}
                                        <div className="w-24 h-24 bg-btDark rounded-full flex items-center justify-center text-4xl">
                                            🤖
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating elements with enhanced animation */}
                            <div className="absolute -top-8 -right-8 w-16 h-16 bg-btGreen rounded-full animate-float shadow-lg flex items-center justify-center text-xl">
                                ⚡
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-btPurple rounded-full animate-float-delayed shadow-lg flex items-center justify-center">
                                💎
                            </div>
                            <div className="absolute top-1/2 -right-12 w-8 h-8 bg-btGreen rounded-full animate-bounce flex items-center justify-center text-xs">
                                $
                            </div>

                            {/* Additional floating particles with icons */}
                            <div className="absolute top-1/4 -left-8 w-6 h-6 bg-btGreen rounded-full animate-float flex items-center justify-center text-xs">
                                🎯
                            </div>
                            <div className="absolute bottom-1/4 right-4 w-4 h-4 bg-btGreen rounded-full animate-bounce delay-500"></div>

                            {/* Orbiting elements */}
                            <div className="absolute inset-0 animate-spin-slow">
                                <div className="absolute -top-2 left-1/2 w-3 h-3 bg-btGreen rounded-full transform -translate-x-1/2"></div>
                                <div className="absolute -bottom-2 left-1/2 w-3 h-3 bg-btred rounded-full transform -translate-x-1/2"></div>
                                <div className="absolute top-1/2 -left-2 w-3 h-3 bg-btPurple rounded-full transform -translate-y-1/2"></div>
                                <div className="absolute top-1/2 -right-2 w-3 h-3 bg-btGreen rounded-full transform -translate-y-1/2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}