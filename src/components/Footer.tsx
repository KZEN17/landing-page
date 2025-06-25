"use client";
export default function Footer() {
    return (
        <footer className="bg-newGreyBG border-t border-newGreyBorder relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-btGreen opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-btPurple opacity-5 rounded-full blur-3xl"></div>

            <div className="relative z-10 container mx-auto px-6 py-12">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-btGreen rounded-lg flex items-center justify-center">
                                <span className="text-btDark font-bold text-lg">V</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white">VPVP.FUN</span>
                                <span className="text-xs text-btGrey -mt-1">Virtual Agents Platform</span>
                            </div>
                        </div>
                        <p className="text-btGrey text-sm leading-relaxed mb-6">
                            The ultimate PvP staking and battle platform for the Virtual Ecosystem.
                            Deploy AI agents and earn Genesis allocations 24/7.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            <a
                                href="#"
                                className="w-10 h-10 bg-newGreyAccent hover:bg-btGreen rounded-full flex items-center justify-center transition-all duration-200 group hover:scale-110"
                                aria-label="Follow us on Twitter"
                            >
                                <svg className="w-5 h-5 text-btGrey group-hover:text-btDark transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 bg-newGreyAccent hover:bg-btGreen rounded-full flex items-center justify-center transition-all duration-200 group hover:scale-110"
                                aria-label="Join our Discord"
                            >
                                <svg className="w-5 h-5 text-btGrey group-hover:text-btDark transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                                </svg>
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 bg-newGreyAccent hover:bg-btGreen rounded-full flex items-center justify-center transition-all duration-200 group hover:scale-110"
                                aria-label="Join our Telegram"
                            >
                                <svg className="w-5 h-5 text-btGrey group-hover:text-btDark transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.58 7.44c-.12.539-.432.672-.864.42l-2.388-1.764-1.152 1.116c-.128.128-.236.236-.484.236l.172-2.436 4.452-4.02c.196-.172-.04-.268-.308-.096l-5.504 3.464-2.372-.74c-.516-.16-.528-.516.108-.764L16.236 7.2c.428-.16.804.096.66.756z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Platform Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Platform</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-btGrey hover:text-btGreen transition-colors duration-200 text-sm">
                                    Start Farming
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-btGrey hover:text-btGreen transition-colors duration-200 text-sm">
                                    Deploy Agents
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-btGrey hover:text-btGreen transition-colors duration-200 text-sm">
                                    Stake $PVP
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-btGrey hover:text-btGreen transition-colors duration-200 text-sm">
                                    Genesis Launchpad
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-btGrey hover:text-btGreen transition-colors duration-200 text-sm">
                                    Leaderboard
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-btGrey hover:text-btGreen transition-colors duration-200 text-sm">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-btGrey hover:text-btGreen transition-colors duration-200 text-sm">
                                    Whitepaper
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-btGrey hover:text-btGreen transition-colors duration-200 text-sm">
                                    API Reference
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-btGrey hover:text-btGreen transition-colors duration-200 text-sm">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-btGrey hover:text-btGreen transition-colors duration-200 text-sm">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Community</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-btGrey hover:text-btGreen transition-colors duration-200 text-sm">
                                    Discord Server
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-btGrey hover:text-btGreen transition-colors duration-200 text-sm">
                                    Telegram Group
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-btGrey hover:text-btGreen transition-colors duration-200 text-sm">
                                    Twitter/X
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-btGrey hover:text-btGreen transition-colors duration-200 text-sm">
                                    Medium
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-btGrey hover:text-btGreen transition-colors duration-200 text-sm">
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-newGreyAccent to-newGreyBG rounded-2xl p-8 mb-12 border border-newGreyBorder">
                    <div className="text-center">
                        <h3 className="text-white font-bold text-xl mb-2">Stay Updated</h3>
                        <p className="text-btGrey mb-6">Get the latest updates on Genesis drops, platform features, and more.</p>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-newGreyBG border border-newGreyBorder rounded-lg text-white placeholder-btGrey focus:outline-none focus:border-btGreen transition-colors duration-200"
                            />
                            <button className="bg-btGreen hover:bg-opacity-90 text-btDark font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-newGreyBorder pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-btGrey text-sm">
                            © 2025 VPVP.FUN. All rights reserved.
                        </div>

                        <div className="flex items-center gap-6">
                            <a href="#" className="text-btGrey hover:text-btGreen transition-colors duration-200 text-sm">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-btGrey hover:text-btGreen transition-colors duration-200 text-sm">
                                Terms of Service
                            </a>
                            <a href="#" className="text-btGrey hover:text-btGreen transition-colors duration-200 text-sm">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>

                {/* Back to Top Button */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 w-12 h-12 bg-btGreen hover:bg-opacity-90 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
                    aria-label="Back to top"
                >
                    <svg className="w-6 h-6 text-btDark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            </div>
        </footer>
    );
}