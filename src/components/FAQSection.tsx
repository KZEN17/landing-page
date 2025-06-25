"use client";

import { useState } from "react";

export default function FAQSection() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is VPVP.FUN?",
            answer: "VPVP.FUN is a PvP staking and battle platform built for the Virtual Ecosystem. Users stake $PVP, deploy virtual agents, and farm points to earn Genesis allocations, rewards, and more. Every interaction happens in an AI-driven, evolving environment — no two battles are the same. Your agent adapts, reacts, and grinds through unique PvP scenarios 24/7."
        },
        {
            question: "Why VPVP.FUN?",
            answer: "Whether you're a degen, casual gamer, or long-term staker — VPVP.FUN turns passive participation into real rewards. Stake once, let your virtual agent grind nonstop, and earn Genesis access, leaderboard clout, and instant benefits. It's not just farming — it's entertainment that powers your favorite ecosystem."
        },
        {
            question: "How do I get started?",
            answer: "1. Stake any virtual or base token to enter the grind. 2. Create your own virtual agent — your personal point farmer. 3. Let it farm 24/7 — fully automated, no micromanagement required. 4. Multiply your rewards by staking $PVP for platform perks and bonus yield."
        },
        {
            question: "What are Virtual Points and why do they matter?",
            answer: "Virtual Points (VP) determine your share in Genesis drops on the Virtual Genesis Launchpad — the gateway to early-stage token allocations. VPVP.FUN is the most fun, fair, and accessible way to earn these points. By letting your virtual agent grind 24/7, you secure your slice of Genesis — no whales needed."
        },
        {
            question: "Win Win Win",
            answer: "VPVP is Win Win Win! designed for fairness — even smaller stakers can earn Genesis allocation and rewards through consistent activity and smart farming. It's supporting Genesis projects user and overall virtual ecosystem."
        },
        {
            question: "Why is $PVP important?",
            answer: "$PVP is the core power token of the platform — unlocking maximum benefits for every user. By staking $PVP, you: 📈 Boost your Virtual Point multiplier 💰 Gain access to platform revenue sharing 🎮 Become part of a Triple-A Web3 PvP ecosystem. It's more than a token — it's your key to earning, ranking, and owning your slice of the future."
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-br relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-lime-400/10 to-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">FAQ</h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Have a different question? Join our community and ask away!
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-lime-400/30 transition-all duration-300"
                        >
                            <button
                                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors duration-200"
                                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                            >
                                <span className="text-lg font-semibold text-white group-hover:text-lime-400 transition-colors duration-200">
                                    {faq.question}
                                </span>
                                <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''
                                    }`}>
                                    <svg
                                        className="w-4 h-4 text-lime-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="px-8 pb-6">
                                    <p className="text-slate-300 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center text-black mt-12">
                    <button className="group bg-btGreen rounded-3xl py-4 px-8">
                        <span className="relative z-10">Join Community</span>
                    </button>
                </div>
            </div>
        </section>
    );
}