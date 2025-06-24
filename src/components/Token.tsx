"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import { Check } from "lucide-react";
import Image from "next/image";
import { Badge } from "./Badge";

export default function Token() {
    const ref = useRef(null); // Reference for the section
    const inView = useInView(ref, { once: true }); // Trigger when 20% of the section is visible
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref} // Attach the ref
            initial="hidden" // Start hidden
            animate={controls} // Animate based on controls
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{
                delay: 0.6,
                duration: 1,
            }}
        >
            <div className="w-full backdrop-blur-lg">
                <div className="">
                    <div className="grid grid-cols-1 items-center justify-between border-gray-500 border-1 gap-3 rounded-lg p-12 lg:grid-cols-2">
                        <div className="flex flex-col">
                            <div className="flex flex-col gap-2">
                                <div>
                                    <Badge variant="outline">$VPVP</Badge>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h2 className="font-regular max-w-xl text-left text-3xl tracking-wider lg:text-5xl">TOKENOMIC</h2>
                                    <p className="max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground">
                                        $VPVP fuels the Vpvp.Fun economy, ensuring liquidity, demand, and growth for creators and players
                                        alike.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:pl-6">
                                <div className="flex flex-row items-start gap-6">
                                    <Check className="mt-2 h-4 w-4 text-primary" />
                                    <div className="flex flex-col gap-1">
                                        <p>Liquidity Backbone</p>
                                        <p className="text-sm text-muted-foreground">
                                            Agent tokens are tied to $VPVP in dedicated liquidity pools. Creating agents locks $VPVP in these
                                            pools, reducing supply and increasing scarcity.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-6">
                                    <Check className="mt-2 h-4 w-4 text-primary" />
                                    <div className="flex flex-col gap-1">
                                        <p>Ecosystem Currency</p>
                                        <p className="text-sm text-muted-foreground">
                                            $VPVP serves as the primary medium for all transactions. Users must swap USDC (or other currencies)
                                            into $VPVP to acquire agent tokens, driving ongoing demand..
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row items-start gap-6">
                                    <Check className="mt-2 h-4 w-4 text-primary" />
                                    <div className="flex flex-col gap-1">
                                        <p>Revenue Engine</p>
                                        <p className="text-sm text-muted-foreground">
                                            On-chain payment systems powered by $VPVP ensure efficient and transparent earnings for AI agents
                                            and creators.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row items-start gap-6">
                                    <Check className="mt-2 h-4 w-4 text-primary" />
                                    <div className="flex flex-col gap-1">
                                        <p>Creator Growth Framework</p>
                                        <p className="text-sm text-muted-foreground">
                                            Taxes collected from transactions can fund marketing, team salaries, and infrastructure while
                                            rewarding users, fostering a sustainable and thriving ecosystem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            className="flex aspect-square  items-center justify-end ounded-md"
                            animate={{
                                y: [0, -20, 0], // Move up and down
                            }}
                            transition={{
                                duration: 2, // Duration of the animation
                                repeat: Infinity, // Loop the animation
                                repeatType: "loop", // Type of looping
                                ease: "easeInOut", // Smoothing effect
                            }}
                        >
                            <Image
                                sizes="100vw"
                                style={{
                                    width: "40%",
                                    height: "auto",
                                }}
                                className=""
                                src={"/images/vpvp-logo.jpeg"}
                                alt="Token"
                                width={300}
                                height={300}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
