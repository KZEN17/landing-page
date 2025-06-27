"use client";
export default function Footer() {
    return (
        <footer className="relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-btGreen opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-btPurple opacity-5 rounded-full blur-3xl"></div>

            <div className="relative z-10 container mx-auto px-6 py-12">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <svg width="132" height="47" viewBox="0 0 132 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M73.8219 9.20367C76.8403 9.20368 79.3251 10.213 81.0575 11.9402C82.5013 13.3797 83.3876 15.2836 83.6418 17.4271C83.6132 16.1746 83.6008 15.1051 83.5981 14.3943C83.5974 14.227 83.7322 14.0914 83.8984 14.0914H89.2154C89.3871 14.0914 89.5241 14.2343 89.5177 14.407C89.3755 18.2822 89.7016 26.5824 92.1105 31.23C92.8521 32.4743 94.8731 33.6708 97.2198 29.015C97.4018 28.6539 97.2693 28.2159 96.9517 27.9667C95.1766 26.5735 92.8844 23.5385 92.8844 19.8043C92.8844 14.5526 96.7539 12.2737 100.108 12.5333C103.323 12.7823 107.724 15.4186 105.58 23.4176C105.439 23.9432 105.823 24.4448 106.352 24.3246C106.62 24.2636 106.884 24.192 107.109 24.1235C107.142 24.1133 107.176 24.1083 107.209 24.1076V10.2066C107.209 9.65272 107.656 9.20367 108.208 9.20367H122.103C125.121 9.20368 127.606 10.213 129.339 11.9402C131.069 13.6659 131.999 16.0587 131.999 18.7318C131.999 21.7302 130.956 24.198 129.164 25.9145C127.375 27.6267 124.894 28.5408 122.103 28.5408H114.406C113.854 28.5408 113.406 28.9899 113.406 29.5438V37.6879C113.406 38.2418 112.959 38.6909 112.407 38.6909H108.208C107.656 38.6909 107.209 38.2418 107.209 37.6879V28.3695C106.578 28.6946 105.257 29.0873 103.006 29.1453C102.662 29.1542 102.358 29.3742 102.236 29.6974C101.107 32.682 98.1196 37.7864 93.6583 37.9816C90.1961 38.1332 87.4016 35.8624 85.5652 31.4994C84.3671 28.6529 83.9502 24.5426 83.8554 22.9204C83.7875 21.7587 83.7366 20.5651 83.6985 19.4339C83.5481 22.1162 82.5332 24.3339 80.8824 25.9145C79.0942 27.6267 76.6131 28.5408 73.8219 28.5408H66.1249C65.5729 28.5408 65.1253 28.9899 65.1253 29.5438V37.6879C65.1253 38.2418 64.6778 38.6909 64.1257 38.6909H59.9273C59.3753 38.6909 58.9277 38.2418 58.9277 37.6879V10.2066C58.9277 9.65272 59.3753 9.20367 59.9273 9.20367H73.8219ZM101.139 18.7656C100.727 17.5192 99.7636 17.5538 99.3336 17.7269C98.6457 17.9866 97.4247 18.9214 98.0438 20.5833C98.3969 21.5313 98.8229 22.2991 99.1875 22.848C99.4851 23.2961 100.103 23.2193 100.32 22.7271C100.878 21.4639 101.457 19.725 101.139 18.7656ZM66.1249 14.9407C65.5729 14.9407 65.1253 15.3897 65.1253 15.9436V21.8009C65.1253 22.3548 65.5729 22.8038 66.1249 22.8038H73.582C74.8926 22.8038 75.8354 22.3201 76.4589 21.6046C77.0935 20.8763 77.4405 19.8563 77.4405 18.7318C77.4405 17.5712 77.0491 16.635 76.4024 15.9902C75.7559 15.3457 74.8022 14.9407 73.582 14.9407H66.1249ZM114.406 14.9407C113.854 14.9407 113.406 15.3897 113.406 15.9436V21.8009C113.406 22.3548 113.854 22.8038 114.406 22.8038H121.863C123.174 22.8038 124.117 22.3201 124.74 21.6046C125.375 20.8763 125.722 19.8563 125.722 18.7318C125.722 17.5712 125.33 16.635 124.684 15.9902C124.037 15.3457 123.083 14.9407 121.863 14.9407H114.406Z" fill="white" />
                                <path d="M22.9824 0.947266C35.675 0.947416 45.9639 11.2448 45.9639 23.9473C45.9639 36.6497 35.675 46.9471 22.9824 46.9473C10.2897 46.9473 0 36.6498 0 23.9473C0 11.2447 10.2897 0.947266 22.9824 0.947266ZM28.8936 11.585C24.9396 11.2965 20.377 13.8287 20.377 19.6641C20.377 23.8135 23.0799 27.1863 25.1729 28.7344C25.5471 29.0113 25.7035 29.4974 25.4893 29.8984C22.7224 35.0719 20.3393 33.7429 19.4648 32.3604C16.6247 27.1961 16.2405 17.9731 16.4082 13.667C16.4157 13.4751 16.2542 13.3165 16.0518 13.3164H9.78223C9.58657 13.3167 9.42813 13.4667 9.42871 13.6523C9.43629 15.4811 9.50431 19.4481 9.73242 23.127C9.84423 24.9298 10.3356 29.4964 11.748 32.6592C13.9133 37.5073 17.208 40.0307 21.29 39.8623C26.55 39.6452 30.0729 33.9736 31.4033 30.6572C31.5473 30.2982 31.9056 30.0539 32.3115 30.0439C35.1366 29.9753 36.7196 29.4856 37.4004 29.1133C37.6164 28.9952 37.7138 28.7652 37.7139 28.5293V24.8467C37.7136 24.576 37.4222 24.3852 37.1484 24.4639C36.8836 24.54 36.5726 24.6189 36.2568 24.6865C35.633 24.8201 35.1796 24.2628 35.3457 23.6787C37.8735 14.7905 32.6847 11.8616 28.8936 11.585ZM27.9814 17.3555C28.4885 17.1632 29.6237 17.1251 30.1104 18.5098C30.4849 19.5758 29.8024 21.5085 29.1445 22.9121C28.888 23.4589 28.1594 23.5437 27.8086 23.0459C27.3788 22.436 26.8772 21.5825 26.4609 20.5293C25.7312 18.6828 27.1704 17.644 27.9814 17.3555Z" fill="white" />
                            </svg>

                        </div>
                        <p className="text-btGrey text-sm leading-relaxed mb-6">
                            The ultimate PvP staking and battle platform
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
                                    Explore Agents
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-btGrey hover:text-btGreen transition-colors duration-200 text-sm">
                                    Create an Agent
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-btGrey hover:text-btGreen transition-colors duration-200 text-sm">
                                    Start Farming
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
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-btGrey hover:text-btGreen transition-colors duration-200 text-sm">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-btGrey hover:text-btGreen transition-colors duration-200 text-sm">
                                    Support
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-btGrey hover:text-btGreen transition-colors duration-200 text-sm">
                                    FAQ
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-newGreyBorder pt-8">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <div className="text-btGrey text-sm">
                            © 2025 VPVP.FUN. All rights reserved.
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