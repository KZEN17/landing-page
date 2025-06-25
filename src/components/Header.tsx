"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-newGrey/80 backdrop-blur-md border-b border-newGreyBorder/50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-btGreen to-btGreen/80 rounded-lg flex items-center justify-center">
                            <span className="text-btDark font-bold text-lg">V</span>
                        </div>
                        <span className="text-xl font-bold text-white">VPVP.FUN</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-btGrey hover:text-btGreen transition-colors duration-200">
                            Features
                        </a>
                        <a href="#agents" className="text-btGrey hover:text-btGreen transition-colors duration-200">
                            Virtual Agents
                        </a>
                        <a href="#faq" className="text-btGrey hover:text-btGreen transition-colors duration-200">
                            FAQ
                        </a>
                    </nav>

                    {/* Social Icons & CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            <a
                                href="#"
                                className="w-10 h-10 bg-newGreyAccent hover:bg-btGreen rounded-full flex items-center justify-center transition-colors duration-200 group"
                            >
                                <svg className="w-5 h-5 text-btGrey group-hover:text-btDark" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            {/* <a
                                href="#"
                                className="w-10 h-10 bg-newGreyAccent hover:bg-btGreen rounded-full flex items-center justify-center transition-colors duration-200 group"
                            >
                                <svg className="w-5 h-5 text-btGrey group-hover:text-btDark" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-newGreyAccent hover:bg-btGreen rounded-full flex items-center justify-center transition-colors duration-200 group"
                            >
                                <svg className="w-5 h-5 text-btGrey group-hover:text-btDark" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13.6 21.2c-1.1.1-1.5-.5-1.5-1v-3.5c0-1.2-.4-2-.8-2.4 2.7-.3 5.5-1.3 5.5-6 0-1.3-.5-2.4-1.2-3.2.1-.8.1-2.4-.3-3.7 0 0-1-.3-3.3 1.2-1-.3-2.1-.3-3.2-.3s-2.2.1-3.2.3C3.3 2.4 2.3 2.7 2.3 2.7c-.4 1.3-.4 2.9-.3 3.7-.7.8-1.2 1.9-1.2 3.2 0 4.6 2.8 5.7 5.5 6-.3.3-.6.8-.7 1.6-.6.3-2.2.7-3.2-.9 0 0-.6-1-1.6-1.1 0 0-1 0-.1.6 0 0 .7.3 1.2 1.4 0 0 .6 2 3.4 1.4v2c0 .5-.4 1.1-1.5 1 5.2-1.7 8.9-6.5 8.9-12.2C24 5.4 18.6 0 12 0S0 5.4 0 12c0 5.7 3.7 10.5 8.9 12.2" />
                                </svg>
                            </a> */}
                        </div>

                        <button className="bg-btGreen hover:from-btGreen/90 hover:to-btGreen text-btDark font-semibold px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105">
                            Start Farming
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden w-10 h-10 bg-newGreyAccent rounded-lg flex items-center justify-center"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-newGreyBorder">
                        <nav className="flex flex-col gap-4">
                            <a href="#features" className="text-btGrey hover:text-btGreen transition-colors duration-200">
                                Features
                            </a>
                            <a href="#agents" className="text-btGrey hover:text-btGreen transition-colors duration-200">
                                Virtual Agents
                            </a>
                            <a href="#faq" className="text-btGrey hover:text-btGreen transition-colors duration-200">
                                FAQ
                            </a>
                            <button className="bg-gradient-to-r from-btGreen to-btGreen/90 text-btDark font-semibold px-6 py-2.5 rounded-full w-fit">
                                Start Farming
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}