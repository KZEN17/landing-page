"use client";

import { useState, useEffect } from "react";

export default function Header() {
    const [, setActiveSection] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
            <div className="flex items-center gap-2 md:gap-4">
                {/* Mobile Menu Button - Only visible on small screens */}
                <button
                    className="md:hidden w-10 h-10 bg-transparent border border-gray-600 hover:border-btGreen rounded-lg flex items-center justify-center transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Menu"
                >
                    <svg className="w-5 h-5 text-btGrey" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 12h18m-9 5l7-7-7-7" />
                    </svg>
                </button>

                {/* Search Field - Takes up most of the space */}
                <div className="flex-1">
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            className="w-full bg-newGrey hover:bg-black focus:bg-black border border-gray-900 hover:border-[#D1FD0ACC] focus:border-btGreen hover:shadow-lg hover:shadow-[#D1FD0ACC]/30 focus:shadow-lg focus:shadow-btGreen/30 rounded-lg md:rounded-xl pl-4 md:pl-12 pr-4 py-2 md:py-3 text-sm md:text-base text-white placeholder-btGrey transition-all duration-200 focus:outline-none"
                        />
                    </div>
                </div>

                {/* X Button - Hidden on mobile */}
                <button
                    className="hidden md:flex w-12 h-12 bg-transparent hover:bg-transparent border border-gray-600 hover:border-btGreen rounded-xl items-center justify-center transition-all duration-200 group hover:border-[#D1FD0ACC] focus:border-btGreen hover:shadow-lg hover:shadow-[#D1FD0ACC]/30"
                    aria-label="Close"
                >
                    <svg className="w-5 h-5 text-btGrey group-hover:text-btDark transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </button>

                {/* Start Farming Button */}
                <button className="group bg-btGreen hover:bg-opacity-90 uppercase text-btDark font-semibold px-3 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg whitespace-nowrap text-xs md:text-base">
                    Start Farming
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-4 p-4 bg-newGrey rounded-lg border border-gray-600">
                    <nav className="space-y-2">
                        <a href="#features" className="block py-2 text-white hover:text-btGreen transition-colors">Features</a>
                        <a href="#faq" className="block py-2 text-white hover:text-btGreen transition-colors">FAQ</a>
                        <a href="#partners" className="block py-2 text-white hover:text-btGreen transition-colors">Partners</a>
                    </nav>
                </div>
            )}
        </div>
    );
}