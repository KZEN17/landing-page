"use client";

import { useEffect, useRef } from "react";


import { motion, useAnimation, useInView } from "motion/react";
import Image from "next/image";
import { Badge } from "./Badge";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Token from "./Token";

function Feature() {
    return (
        <div className="flex flex-col gap-20 md:px-8 lg:gap-40">
            <Feat1 />
            <Feat2 />
            <Feat3 />
            <Token />

        </div>

    );
}

export { Feature };

const Feat1 = () => {
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
            <div className="w-full">
                <div className="md:pl-8">
                    <div className="grid grid-cols-1 items-center justify-end gap-10 lg:grid-cols-2">
                        <div className="flex flex-col items-start gap-4">
                            <div>
                                <Badge>IMPORT</Badge>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="font-regular text-left text-xl tracking-wider md:text-3xl lg:max-w-xl lg:text-4xl">
                                    Add Your Project
                                </h2>
                                <p className="max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-lg">
                                    After registering on VPVP, you can add your project if it hasn’t been listed yet. This grants
                                    access to automated battles, liquidity-driven rewards, and new earning opportunities, helping your
                                    token grow within the ecosystem.
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className="w-full max-w-full">
                            <div className="flex items-center justify-center rounded-2xl bg-muted">
                                <Image
                                    src={"/images/feat1.png"}
                                    alt="BattleTech Logo"
                                    sizes="100vw"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                    }}
                                    width={200}
                                    height={200}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Feat2 = () => {
    const ref = useRef(null); // Reference for the section
    const inView = useInView(ref, { once: true }); // Trigger when 20% of the section is visible
    const controls = useAnimation();
    const isDesktop = useMediaQuery("(min-width: 768px)");

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
            <div className="w-full">
                <div className="md:pr-8">
                    <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center">
                        <div className="min-h-full w-full flex-1 rounded-2xl">
                            <div className="h-fit w-full max-w-full">
                                <div className="flex h-fit items-center justify-center rounded-md">
                                    <Image
                                        src={"/images/feat2.png"}
                                        alt="BattleTech Logo"
                                        sizes="100vw"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-4 py-8 pl-0 lg:pl-20">
                            <div>
                                <Badge>PARTICIPATE</Badge>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="font-regular text-left text-xl tracking-wider md:text-3xl lg:max-w-xl lg:text-4xl">
                                    Deposit Your Tokens
                                </h2>
                                <p className="max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-md">
                                    To participate in battles, deposit your project's tokens into the VPVP liquidity pools. Meet the
                                    minimum requirement or add more for increased rewards and a stronger market presence. Your tokens fuel
                                    engagement, liquidity, and competitive battles.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Feat3 = () => {
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
            <div className="w-full">
                <div className="md:pl-8">
                    <div className="grid grid-cols-1 items-center justify-end gap-10 lg:grid-cols-2">
                        <div className="flex flex-col items-start gap-4">
                            <div>
                                <Badge>EARN</Badge>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="font-regular text-left text-xl tracking-wider md:text-3xl lg:max-w-2xl lg:text-4xl">
                                    Earn Through Battle
                                </h2>
                                <p className="max-w-2xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-lg">
                                    Once your tokens are deposited, the battle system is activated, allowing your project to compete in
                                    automated cycles. Earn rewards through strategic participation, buybacks, and burns, while
                                    strengthening your token’s value and visibility. Good luck let the battles begin!
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className="w-full max-w-full">
                            <div className="flex items-center justify-center rounded-2xl bg-muted">
                                <Image
                                    src={"/images/feat3.png"}
                                    alt="BattleTech Logo"
                                    sizes="100vw"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                    }}
                                    width={200}
                                    height={200}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
