"use client";

import { useState, useEffect } from "react";
// import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        setIsMenuOpen(false); // Close mobile menu after clicking
    };

    // Track which section is currently in view
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['features', 'agents', 'faq', 'partners'];
            const scrollPosition = window.scrollY + 100; // Offset for header height

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }

            // If we're at the top of the page, no section is active
            if (window.scrollY < 100) {
                setActiveSection('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-newGrey bg-opacity-80 backdrop-blur-md border-b border-newGreyBorder">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        {/* Logo Image - replace with your actual logo */}
                        <div className="relative w-10 h-10 bg-btGreen rounded-lg flex items-center justify-center overflow-hidden">
                            {/* Uncomment and use this when you have your logo image */}
                            {/* <Image 
                                src="/images/logo.png" 
                                alt="VPVP.FUN Logo" 
                                width={40} 
                                height={40}
                                className="object-contain"
                            /> */}
                            <span className="text-btDark font-bold text-lg">V</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-white">VPVP.FUN</span>
                            <span className="text-xs text-btGrey -mt-1">Virtual Agents Platform</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <button
                            onClick={() => scrollToSection('features')}
                            className={`transition-colors duration-200 relative group ${activeSection === 'features' ? 'text-btGreen' : 'text-btGrey hover:text-btGreen'
                                }`}
                        >
                            Features
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-btGreen transition-all duration-200 ${activeSection === 'features' ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}></span>
                        </button>
                        <button
                            onClick={() => scrollToSection('agents')}
                            className={`transition-colors duration-200 relative group ${activeSection === 'agents' ? 'text-btGreen' : 'text-btGrey hover:text-btGreen'
                                }`}
                        >
                            Virtual Agents
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-btGreen transition-all duration-200 ${activeSection === 'agents' ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}></span>
                        </button>
                        <button
                            onClick={() => scrollToSection('faq')}
                            className={`transition-colors duration-200 relative group ${activeSection === 'faq' ? 'text-btGreen' : 'text-btGrey hover:text-btGreen'
                                }`}
                        >
                            FAQ
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-btGreen transition-all duration-200 ${activeSection === 'faq' ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}></span>
                        </button>
                        <button
                            onClick={() => scrollToSection('partners')}
                            className={`transition-colors duration-200 relative group ${activeSection === 'partners' ? 'text-btGreen' : 'text-btGrey hover:text-btGreen'
                                }`}
                        >
                            Partners
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-btGreen transition-all duration-200 ${activeSection === 'partners' ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}></span>
                        </button>
                    </nav>

                    {/* Social Icons & CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            {/* Twitter/X */}
                            <a
                                href="#"
                                className="w-10 h-10 bg-newGreyAccent hover:bg-btGreen rounded-full flex items-center justify-center transition-all duration-200 group hover:scale-110"
                                aria-label="Follow us on Twitter"
                            >
                                <svg className="w-5 h-5 text-btGrey group-hover:text-btDark transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>

                            {/* Discord */}
                            <a
                                href="#"
                                className="w-10 h-10 bg-newGreyAccent hover:bg-btGreen rounded-full flex items-center justify-center transition-all duration-200 group hover:scale-110"
                                aria-label="Join our Discord"
                            >
                                <svg className="w-5 h-5 text-btGrey group-hover:text-btDark transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                                </svg>
                            </a>

                            {/* Telegram */}
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

                        <button className="group bg-btGreen hover:bg-opacity-90 text-btDark font-semibold px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                            <span className="flex items-center gap-2">
                                Start Farming
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden w-10 h-10 bg-newGreyAccent rounded-lg flex items-center justify-center hover:bg-btGreen hover:bg-opacity-20 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className={`w-6 h-6 text-white transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-newGreyBorder animate-in slide-in-from-top duration-300">
                        <nav className="flex flex-col gap-4">
                            <button
                                onClick={() => scrollToSection('features')}
                                className={`text-left py-2 transition-colors duration-200 ${activeSection === 'features' ? 'text-btGreen' : 'text-btGrey hover:text-btGreen'
                                    }`}
                            >
                                Features
                            </button>
                            <button
                                onClick={() => scrollToSection('agents')}
                                className={`text-left py-2 transition-colors duration-200 ${activeSection === 'agents' ? 'text-btGreen' : 'text-btGrey hover:text-btGreen'
                                    }`}
                            >
                                Virtual Agents
                            </button>
                            <button
                                onClick={() => scrollToSection('faq')}
                                className={`text-left py-2 transition-colors duration-200 ${activeSection === 'faq' ? 'text-btGreen' : 'text-btGrey hover:text-btGreen'
                                    }`}
                            >
                                FAQ
                            </button>
                            <button
                                onClick={() => scrollToSection('partners')}
                                className={`text-left py-2 transition-colors duration-200 ${activeSection === 'partners' ? 'text-btGreen' : 'text-btGrey hover:text-btGreen'
                                    }`}
                            >
                                Partners
                            </button>

                            {/* Mobile Social Icons */}
                            <div className="flex items-center gap-3 py-2">
                                <a href="#" className="w-8 h-8 bg-newGreyAccent hover:bg-btGreen rounded-full flex items-center justify-center transition-colors duration-200">
                                    <svg className="w-4 h-4 text-btGrey hover:text-btDark" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-8 h-8 bg-newGreyAccent hover:bg-btGreen rounded-full flex items-center justify-center transition-colors duration-200">
                                    <svg className="w-4 h-4 text-btGrey hover:text-btDark" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-8 h-8 bg-newGreyAccent hover:bg-btGreen rounded-full flex items-center justify-center transition-colors duration-200">
                                    <svg className="w-4 h-4 text-btGrey hover:text-btDark" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.58 7.44c-.12.539-.432.672-.864.42l-2.388-1.764-1.152 1.116c-.128.128-.236.236-.484.236l.172-2.436 4.452-4.02c.196-.172-.04-.268-.308-.096l-5.504 3.464-2.372-.74c-.516-.16-.528-.516.108-.764L16.236 7.2c.428-.16.804.096.66.756z" />
                                    </svg>
                                </a>
                            </div>

                            <button className="bg-btGreen text-btDark font-semibold px-6 py-2.5 rounded-full w-fit transition-all duration-300 hover:bg-opacity-90">
                                Start Farming
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}