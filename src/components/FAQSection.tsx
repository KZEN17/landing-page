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
            answer: "1. Stake any virtual or base token to enter the grind.\n2. Create your own virtual agent — your personal point farmer.\n3. Let it farm 24/7 — fully automated, no micromanagement required.\n4. Multiply your rewards by staking $PVP for platform perks and bonus yield."
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
            answer: "$PVP is the core power token of the platform — unlocking maximum benefits for every user. By staking $PVP, you:  Boost your Virtual Point multiplier  Gain access to platform revenue sharing  Become part of a Triple-A Web3 PvP ecosystem. It's more than a token — it's your key to earning, ranking, and owning your slice of the future."
        }
    ];

    return (
        <section id="faq" className="py-12 relative overflow-hidden">
            <div className="relative z-10 container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">FAQ</h2>
                    <p className="text-lg text-btGrey max-w-2xl mx-auto">
                        Have a different question? Join our community and ask away!
                    </p>
                </div>

                <div className="mx-auto px-6 space-y-2">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-r from-black-800/30  to-black-900/100  border border-gray-700/50 rounded-2xl overflow-hidden hover:border-lime-400/30 transition-all duration-300"
                        >
                            <button
                                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-btGrey-800/30 transition-colors duration-200"
                                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                            >
                                <span className="text-lg font-semibold text-white group-hover:text-[#D1FD0A] transition-colors duration-200">
                                    {faq.question}
                                </span>
                                <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''
                                    }`}>
                                    <svg width="17" height="26" viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6227 22.7132L11.6286 22.9463L2.83378 25.0055L2.38382 25.1115L2.30269 24.6556L0.728268 15.7947L0.549503 14.7946L1.39918 15.3517L4.26026 17.2271L5.43274 15.451L6.16573 15.9323L4.75062 18.0742L4.5094 18.4393L4.14494 18.1994L1.76831 16.6398L3.08418 24.0474L10.4343 22.3261L8.06289 20.7705L7.69562 20.5285L7.93826 20.1627L12.5837 13.1298L11.2088 12.2281L11.6928 11.4971L13.4315 12.6375L13.7986 12.8794L13.556 13.2452L8.91063 20.2781L11.7698 22.1528L12.6227 22.7132ZM7.73075 15.9126L3.23717 12.9584L7.86031 5.94651L8.10153 5.58127L7.73495 5.34072L4.28649 3.07164L14.5581 0.673423L16.4095 11.044L12.9596 8.77568L12.5951 8.53563L12.3538 8.90081L7.73073 15.9127L7.73075 15.9126Z" fill="#D1FD0A" />
                                    </svg>

                                </div>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="px-8 pb-6">
                                    <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center text-black mt-12">
                    <button className="group bg-btGreen rounded-xl py-4 px-8">
                        <span className="relative z-10 text-lg font-bold">JOIN COMMUNITY</span>
                    </button>
                </div>
            </div>
        </section>
    );
}