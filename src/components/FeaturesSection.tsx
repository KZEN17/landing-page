import SponsorsSection from "./SponsorsSection"

export default function FeaturesSection() {
    return (
        <section className="py-24 bg-newGrey relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-newGreyAccent/50 to-newGrey"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-btGreen to-transparent"></div>

            <div className="relative z-10 container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Built for the
                        <span className="text-btGreen"> Virtual Economy</span>
                    </h2>
                    <p className="text-xl text-btGrey max-w-3xl mx-auto">
                        VPVP.FUN powers Agents, Users, and the Virtual Ecosystem.
                    </p>
                </div>
                <SponsorsSection />
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Let Your Agent Work */}
                    <div className="group bg-gradient-to-br from-newGreyAccent/50 to-newGreyBG/50 backdrop-blur-sm border border-newGreyBorder/50 rounded-2xl p-8 hover:border-btGreen/50 transition-all duration-300 hover:shadow-2xl hover:shadow-btGreen/10">
                        <div className="w-12 h-12 bg-gradient-to-br from-btGreen to-btGreen/80 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-btDark font-bold text-xl">💼</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Let Your Agent Work For You</h3>
                        <p className="text-btGrey text-sm">
                            Earn more by staking $PVP — every action amplifies your grind.
                        </p>
                    </div>

                    {/* Genesis Launch */}
                    <div className="group bg-gradient-to-br from-newGreyAccent/50 to-newGreyBG/50 backdrop-blur-sm border border-newGreyBorder/50 rounded-2xl p-8 hover:border-btGreen/50 transition-all duration-300 hover:shadow-2xl hover:shadow-btGreen/10">
                        <div className="w-12 h-12 bg-gradient-to-br from-btPurple to-btred rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white font-bold text-xl">🎯</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Genesis Launch</h3>
                        <p className="text-btGrey text-sm">
                            Win. Earn. Claim Genesis Tokens. Don`&apos;`t let whales take your spot — grind your way into early allocation.
                        </p>
                    </div>

                    {/* Instant Rewards */}
                    <div className="group bg-gradient-to-br from-newGreyAccent/50 to-newGreyBG/50 backdrop-blur-sm border border-newGreyBorder/50 rounded-2xl p-8 hover:border-btGreen/50 transition-all duration-300 hover:shadow-2xl hover:shadow-btGreen/10">
                        <div className="w-12 h-12 bg-gradient-to-br from-btred to-btPurple rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white font-bold text-xl">⚡</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Instant Rewards for Virtual Agents</h3>
                        <p className="text-btGrey text-sm">
                            Deploy your agent and start farming perks in real-time — 24/7, non-stop.
                        </p>
                    </div>

                    {/* Entertainment */}
                    <div className="group bg-gradient-to-br from-newGreyAccent/50 to-newGreyBG/50 backdrop-blur-sm border border-newGreyBorder/50 rounded-2xl p-8 hover:border-btGreen/50 transition-all duration-300 hover:shadow-2xl hover:shadow-btGreen/10">
                        <div className="w-12 h-12 bg-gradient-to-br from-btPurple to-btGreen rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white font-bold text-xl">🎮</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Entertainment While You Earn</h3>
                        <p className="text-btGrey text-sm">
                            Battle, flex, and rise up the ranks while your points stack in the background.
                        </p>
                    </div>

                    {/* Virtual Economy */}
                    <div className="group bg-gradient-to-br from-newGreyAccent/50 to-newGreyBG/50 backdrop-blur-sm border border-newGreyBorder/50 rounded-2xl p-8 hover:border-btGreen/50 transition-all duration-300 hover:shadow-2xl hover:shadow-btGreen/10">
                        <div className="w-12 h-12 bg-gradient-to-br from-btGreen to-btred rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white font-bold text-xl">🌐</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Built for Virtual Economy</h3>
                        <p className="text-btGrey text-sm">
                            Powers the entire Virtual Ecosystem with AI-driven interactions and evolving gameplay.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}