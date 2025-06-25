import SponsorsSection from "./SponsorsSection"
// import Image from "next/image";

export default function FeaturesSection() {
    const features = [
        {
            icon: "💼",
            title: "Let Your Agent Work For You",
            description: "Earn more by staking $PVP — every action amplifies your grind.",
            gradient: "from-btGreen to-btGreen",
            imagePath: "/images/agent-work.png" // placeholder for your image
        },
        {
            icon: "🎯",
            title: "Genesis Launch",
            description: "Win. Earn. Claim Genesis Tokens. Don't let whales take your spot — grind your way into early allocation.",
            gradient: "from-btPurple to-btred",
            imagePath: "/images/genesis-launch.png" // placeholder for your image
        },
        {
            icon: "⚡",
            title: "Instant Rewards for Virtual Agents",
            description: "Deploy your agent and start farming perks in real-time — 24/7, non-stop.",
            gradient: "from-btred to-btPurple",
            imagePath: "/images/instant-rewards.png" // placeholder for your image
        },
        {
            icon: "🎮",
            title: "Entertainment While You Earn",
            description: "Battle, flex, and rise up the ranks while your points stack in the background.",
            gradient: "from-btPurple to-btGreen",
            imagePath: "/images/entertainment.png" // placeholder for your image
        },
        {
            icon: "🌐",
            title: "Built for Virtual Economy",
            description: "Powers the entire Virtual Ecosystem with AI-driven interactions and evolving gameplay.",
            gradient: "from-btGreen to-btred",
            imagePath: "/images/virtual-economy.png" // placeholder for your image
        }
    ];

    return (
        <section id="features" className="py-24 bg-newGrey relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-newGreyAccent/50 to-newGrey"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-btGreen to-transparent"></div>

            {/* Additional background elements */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-btGreen/5 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-btPurple/5 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10 container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Built for the
                        <span className="text-btGreen"> Virtual Economy</span>
                    </h2>
                    <p className="text-xl text-btGrey max-w-3xl mx-auto">
                        VPVP.FUN powers Agents, Users, and the Virtual Ecosystem with cutting-edge technology and seamless integration.
                    </p>
                </div>

                <SponsorsSection />

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group bg-gradient-to-br from-newGreyAccent to-newGreyBG backdrop-blur-sm border border-btGreen rounded-2xl p-8 hover:border-btGreen transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2">
                            {/* Feature Image Placeholder */}
                            <div className="w-full h-32 bg-gradient-to-br from-newGreyAccent to-newGreyBG rounded-lg mb-6 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                                {/* You can replace this with actual images */}
                                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center text-2xl transform group-hover:rotate-12 transition-transform duration-300`}>
                                    {feature.icon}
                                </div>
                            </div>

                            <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <span className="text-white font-bold text-xl">{feature.icon}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-btGreen transition-colors duration-300">
                                {feature.title}
                            </h3>

                            <p className="text-btGrey text-sm leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Hover effect indicator */}
                            <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-full h-1 bg-btGreen rounded-full"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action Section */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center gap-2 bg-btGreen/10 border border-btGreen/20 rounded-full px-6 py-3 text-btGreen text-sm font-medium mb-6">
                        <span className="w-2 h-2 bg-btGreen rounded-full animate-pulse"></span>
                        Ready to start your journey?
                    </div>
                    {/* 
                    <button className="group bg-btGreen text-btDark font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                        <span className="relative z-10">Deploy Your Agent Now</span>
                    </button> */}
                </div>
            </div>
        </section>
    );
}