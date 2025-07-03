"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function TokenomicsSection() {
    const tokenData = [
        { name: "Genesis Sale", value: 24.0, color: "#D1FD0A" },
        { name: "Liquidity Pool", value: 8.0, color: "#828282" },
        { name: "Community Sale", value: 4.0, color: "#686868" },
        { name: "Referral + Mindshare", value: 14.0, color: "#273000" },
        { name: "Ecosystem Growth", value: 37.5, color: "#3D4B00" },
        { name: "Team", value: 12.5, color: "#7D9900" }
    ];

    return (
        <section id="tokenomics" className="py-12 relative">
            <div className="relative z-10 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                        Token
                        <span className="text-btGreen">omics</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        $ROOM Powers Everything Inside The Backroom. It Unlocks Access To Private Info Streams, Fuels Speculation Through Tradable Keys, & Rewards Creators For Valuable Insights. Access, Incentive, & Liquidity — All In One Token.
                    </p>
                </div>

                {/* Desktop Layout: Side by side */}
                <div className="hidden lg:flex lg:items-center lg:gap-12">
                    {/* Left side - Bullet points (60% width) */}
                    <div className="lg:w-3/5 space-y-2">
                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                                <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0 bg-[#D1FD0A]"></div>
                                <div className="flex-1">
                                    <div className="text-white font-medium text-base">Genesis Sale</div>
                                    <div className="text-[#666666] text-sm mt-1 leading-relaxed">Fundraising</div>
                                </div>
                            </div>
                            <div className="text-white font-bold text-lg ml-4">24.0%</div>
                        </div>
                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                                <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0 bg-[#828282]"></div>
                                <div className="flex-1">
                                    <div className="text-white font-medium text-base">Liquidity Pool</div>
                                    <div className="text-[#666666] text-sm mt-1 leading-relaxed">Fundraising</div>
                                </div>
                            </div>
                            <div className="text-white font-bold text-lg ml-4">8.0%</div>
                        </div>

                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                                <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0 bg-[#686868]"></div>
                                <div className="flex-1">
                                    <div className="text-white font-medium text-base">Community Sale</div>
                                    <div className="text-[#666666] text-sm mt-1 leading-relaxed">6 Months Cliff, Then 100% Unlocked</div>
                                </div>
                            </div>
                            <div className="text-white font-bold text-lg ml-4">4.0%</div>
                        </div>

                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                                <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0 bg-[#273000]"></div>
                                <div className="flex-1">
                                    <div className="text-white font-medium text-base">Referral + Mindshare</div>
                                    <div className="text-[#666666] text-sm mt-1 leading-relaxed">6 Months Cliff, Then 100% Unlocked</div>
                                </div>
                            </div>
                            <div className="text-white font-bold text-lg ml-4">14.0%</div>
                        </div>

                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                                <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0 bg-[#3D4B00]"></div>
                                <div className="flex-1">
                                    <div className="text-white font-medium text-base">Ecosystem Growth</div>
                                    <div className="text-[#666666] text-sm mt-1 leading-relaxed">3 Months Cliff, 24-Month Linear Vesting</div>
                                </div>
                            </div>
                            <div className="text-white font-bold text-lg ml-5">37.5%</div>
                        </div>

                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                                <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0 bg-[#7D9900]"></div>
                                <div className="flex-1">
                                    <div className="text-white font-medium text-base">Team</div>
                                    <div className="text-[#666666] text-sm mt-1 leading-relaxed">12 Months Cliff, 12-Month Linear Vesting</div>
                                </div>
                            </div>
                            <div className="text-white font-bold text-lg ml-4">12.5%</div>
                        </div>
                    </div>

                    {/* Right side - Chart (40% width) */}
                    <div className="lg:w-2/5 flex justify-center">
                        <div className="relative w-96 h-96">
                            {/* Chart */}
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={tokenData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        animationDuration={1000}
                                        animationBegin={500}
                                        animationEasing="ease-in-out"
                                        outerRadius={120}
                                        innerRadius={100}
                                        fill="#8884d8"
                                        dataKey="value"
                                        startAngle={90}
                                        endAngle={450}
                                    >
                                        {tokenData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>

                            {/* Center logo */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <svg width="141" height="141" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M70.5 0C109.436 0 141.001 31.5646 141.001 70.501C141.001 109.437 109.436 141.002 70.5 141.002C31.5637 141.002 0 109.437 0 70.501C0.000122354 31.5647 31.5638 0.000243349 70.5 0ZM89.3506 35.3115C78.8384 34.521 66.7091 41.4587 66.709 57.4453C66.709 68.8129 73.8938 78.0519 79.458 82.293C80.4536 83.0518 80.8683 84.3853 80.2979 85.4844C72.9419 99.6573 66.607 96.0152 64.2822 92.2275C56.7314 78.0795 55.7093 52.8123 56.1553 41.0156C56.1752 40.4898 55.7462 40.0547 55.208 40.0547H38.541C38.0202 40.0548 37.5978 40.4674 37.5996 40.9766C37.6198 45.9866 37.7998 56.8531 38.4062 66.9316C38.7034 71.87 40.0101 84.3827 43.7656 93.0479C49.5221 106.329 58.2822 113.242 69.1348 112.78C83.1192 112.186 92.4845 96.647 96.0215 87.5615C96.4045 86.5778 97.3581 85.9079 98.4375 85.8809C105.948 85.6928 110.156 84.3509 111.966 83.3311C112.54 83.0074 112.801 82.3786 112.801 81.7324V71.6445C112.801 70.9024 112.025 70.3783 111.297 70.5938C110.592 70.8024 109.765 71.0207 108.925 71.2061C107.266 71.572 106.063 70.0454 106.505 68.4453C113.226 44.0954 99.4297 36.0696 89.3506 35.3115ZM86.9248 51.1221C88.2727 50.5952 91.2912 50.4902 92.585 54.2842C93.5804 57.2048 91.7655 62.4977 90.0166 66.3428C89.3349 67.8414 87.3987 68.075 86.4658 66.7109C85.323 65.0399 83.9878 62.703 82.8809 59.8174C80.9401 54.7582 84.7685 51.9126 86.9248 51.1221Z" fill="#3B3B3B" />
                                </svg>

                            </div>

                            {/* Positioned Labels */}
                            {/* 24.0 - Top Left */}
                            <div className="absolute top-8 left-4">
                                <div className="bg-[#D1FD0A] text-black px-3 py-1 rounded text-sm font-bold">
                                    % 24.0
                                </div>
                            </div>

                            {/* 4.0 - Left */}
                            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                                <div className="bg-[#8F8F8F] text-white px-3 py-1 rounded text-sm font-bold">
                                    % 4.0
                                </div>
                            </div>

                            {/* 8.0 - Bottom Left */}
                            <div className="absolute bottom-8 left-4">
                                <div className="bg-[#8F8F8F] text-white px-3 py-1 rounded text-sm font-bold">
                                    % 8.0
                                </div>
                            </div>

                            {/* 14.0 - Top Right */}
                            <div className="absolute top-8 right-4">
                                <div className="bg-[#8F8F8F] text-white px-3 py-1 rounded text-sm font-bold">
                                    % 14.0
                                </div>
                            </div>

                            {/* 37.5 - Right */}
                            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                                <div className="bg-[#D1FD0A] text-black px-3 py-1 rounded text-sm font-bold">
                                    % 37.5
                                </div>
                            </div>

                            {/* 12.5 - Bottom Right */}
                            <div className="absolute bottom-8 right-4">
                                <div className="bg-[#8F8F8F] text-white px-3 py-1 rounded text-sm font-bold">
                                    % 12.5
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout: Stacked */}
                <div className="lg:hidden space-y-8">
                    {/* Bullet points first on mobile */}
                    <div className="space-y-4">
                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                                <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0 bg-[#D1FD0A]"></div>
                                <div className="flex-1">
                                    <div className="text-white font-medium text-base">Genesis Sale</div>
                                    <div className="text-[#666666] text-sm mt-1 leading-relaxed">Fundraising</div>
                                </div>
                            </div>
                            <div className="text-white font-bold text-lg ml-4">24.0%</div>
                        </div>

                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                                <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0 bg-[#8F8F8F]"></div>
                                <div className="flex-1">
                                    <div className="text-white font-medium text-base">Liquidity Pool</div>
                                    <div className="text-[#666666] text-sm mt-1 leading-relaxed">Fundraising</div>
                                </div>
                            </div>
                            <div className="text-white font-bold text-lg ml-4">8.0%</div>
                        </div>

                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                                <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0 bg-[#8F8F8F]"></div>
                                <div className="flex-1">
                                    <div className="text-white font-medium text-base">Community Sale</div>
                                    <div className="text-[#666666] text-sm mt-1 leading-relaxed">6 Months Cliff, Then 100% Unlocked</div>
                                </div>
                            </div>
                            <div className="text-white font-bold text-lg ml-4">4.0%</div>
                        </div>

                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                                <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0 bg-[#8F8F8F]"></div>
                                <div className="flex-1">
                                    <div className="text-white font-medium text-base">Referral + Mindshare</div>
                                    <div className="text-[#666666] text-sm mt-1 leading-relaxed">6 Months Cliff, Then 100% Unlocked</div>
                                </div>
                            </div>
                            <div className="text-white font-bold text-lg ml-4">14.0%</div>
                        </div>

                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                                <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0 bg-[#D1FD0A]"></div>
                                <div className="flex-1">
                                    <div className="text-white font-medium text-base">Ecosystem Growth</div>
                                    <div className="text-[#666666] text-sm mt-1 leading-relaxed">3 Months Cliff, 24-Month Linear Vesting</div>
                                </div>
                            </div>
                            <div className="text-white font-bold text-lg ml-4">37.5%</div>
                        </div>

                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                                <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0 bg-[#8F8F8F]"></div>
                                <div className="flex-1">
                                    <div className="text-white font-medium text-base">Team</div>
                                    <div className="text-[#666666] text-sm mt-1 leading-relaxed">12 Months Cliff, 12-Month Linear Vesting</div>
                                </div>
                            </div>
                            <div className="text-white font-bold text-lg ml-4">12.5%</div>
                        </div>
                    </div>

                    {/* Chart below on mobile */}
                    <div className="flex justify-center">
                        <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                            {/* Chart */}
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={tokenData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        outerRadius={100}
                                        innerRadius={50}
                                        fill="#8884d8"
                                        dataKey="value"
                                        startAngle={90}
                                        endAngle={450}
                                    >
                                        {tokenData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>

                            {/* Center logo */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-16 h-16 bg-[#2C2C2C] rounded-full flex items-center justify-center border-2 border-[#D1FD0A]">
                                    <span className="text-[#666666] font-bold text-lg">V</span>
                                </div>
                            </div>

                            {/* Positioned Labels for mobile */}
                            {/* 24.0 - Top Left */}
                            <div className="absolute top-6 left-3">
                                <div className="bg-[#D1FD0A] text-black px-2 py-1 rounded text-xs font-bold">
                                    % 24.0
                                </div>
                            </div>

                            {/* 4.0 - Left */}
                            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                                <div className="bg-[#8F8F8F] text-white px-2 py-1 rounded text-xs font-bold">
                                    % 4.0
                                </div>
                            </div>

                            {/* 8.0 - Bottom Left */}
                            <div className="absolute bottom-6 left-3">
                                <div className="bg-[#8F8F8F] text-white px-2 py-1 rounded text-xs font-bold">
                                    % 8.0
                                </div>
                            </div>

                            {/* 14.0 - Top Right */}
                            <div className="absolute top-6 right-3">
                                <div className="bg-[#8F8F8F] text-white px-2 py-1 rounded text-xs font-bold">
                                    % 14.0
                                </div>
                            </div>

                            {/* 37.5 - Right */}
                            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                                <div className="bg-[#D1FD0A] text-black px-2 py-1 rounded text-xs font-bold">
                                    % 37.5
                                </div>
                            </div>

                            {/* 12.5 - Bottom Right */}
                            <div className="absolute bottom-6 right-3">
                                <div className="bg-[#8F8F8F] text-white px-2 py-1 rounded text-xs font-bold">
                                    % 12.5
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}