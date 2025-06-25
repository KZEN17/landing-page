// import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-black via-btDark to-black overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-btDark/80"></div>
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-btGreen/30 to-btGreen/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-40 left-20 w-64 h-64 bg-gradient-to-br from-btGreen/20 to-btGreen/5 rounded-full blur-2xl animate-pulse delay-1000"></div>

            <div className="relative z-10 container mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 bg-btGreen/10 border border-btGreen/20 rounded-full px-4 py-2 text-btGreen text-sm font-medium">
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
                            <button className="group relative bg-btGreen hover:from-btGreen/90 hover:to-btGreen text-btDark font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-btGreen/25">
                                <span className="relative z-10 text-black">Start Farming Now</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-btGreen/80 to-btGreen rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                            </button>

                            <div className="flex items-center gap-3 text-btGrey">
                                <span className="text-sm">Active Farmers</span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold text-white">1,337</span>
                                    <span className="text-btGreen font-semibold">+</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - 3D Visual */}
                    <div className="relative flex items-center justify-center lg:justify-end">
                        <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                            {/* Main 3D Ring */}
                            <div className="absolute inset-0 rounded-full animate-spin-slow shadow-2xl shadow-btGreen">
                                <div className="absolute inset-4 bg-gradient-to-tr from-black to-btDark rounded-full">
                                    <div className="absolute inset-8 bg-gradient-to-br from-btGreen via-btGreen to-btGreen rounded-full opacity-80 animate-pulse">
                                    </div>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-8 -right-8 w-16 h-16 bg-btGreen rounded-full animate-float shadow-lg shadow-btGreen/50"></div>
                            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-btGreen rounded-full animate-float-delayed shadow-lg shadow-btGreen/50"></div>
                            <div className="absolute top-1/2 -right-12 w-8 h-8 bg-btGreen rounded-full animate-bounce"></div>

                            {/* Additional floating particles */}
                            <div className="absolute top-1/4 -left-8 w-6 h-6 bg-btGreen rounded-full animate-float"></div>
                            <div className="absolute bottom-1/4 right-4 w-4 h-4 bg-btGreen rounded-full animate-bounce delay-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}