"use client";

import * as React from "react";
import { cn } from "@/utils";
import Image from "next/image";
import { motion } from "motion/react";

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    subtitle?: {
        regular: string;
        gradient: string;
    };
    refferal?: string;
    description?: string;
    ctaText?: string;
    ctaHref?: string;
    bottomImage?: {
        light: string;
        dark: string;
    };
    gridOptions?: {
        angle?: number;
        cellSize?: number;
        opacity?: number;
        lightLineColor?: string;
        darkLineColor?: string;
    };
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
    (
        {
            className,
            subtitle,
            description,
            ctaText,
            ctaHref,
            ...props
        },
        ref,
    ) => {
        return (
            <motion.div
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: 0.6,
                    duration: 1,
                }}
            >
                <div className={cn("relative", className)} ref={ref} {...props}>
                    <div className="absolute top-0 z-[0] h-screen w-full" />
                    <section className="z-1 relative mx-auto max-w-full">
                        <div className="z-10 gap-12">
                            <div
                                className="relative flex w-full p-4 md:p-16"
                                style={{
                                    backgroundImage: 'url("/images/new-banner.png")',
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="absolute inset-0 z-10 bg-black opacity-40"></div>

                                <div className="leading-0 z-10 mx-auto max-w-3xl space-y-5 text-center lg:leading-5">
                                    {subtitle && (
                                        <h2 className="mx-auto bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] bg-clip-text text-4xl tracking-wider text-transparent dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] md:text-6xl">
                                            {subtitle.regular}
                                            {subtitle.gradient}
                                        </h2>
                                    )}

                                    {description && (
                                        <p className="mx-auto max-w-2xl text-lg text-gray-200">{description}</p>
                                    )}

                                    <div className="flex items-center justify-center gap-4 md:gap-8">
                                        {ctaText && ctaHref && (
                                            <a href={ctaHref} target="_blank">
                                                <button className="bg-[#d1fd0a] text-black px-8 py-3 rounded font-bold text-lg hover:bg-btGreen/80 transition-colors">
                                                    {ctaText}
                                                </button>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="leading-0 mx-auto mt-4 max-w-3xl space-y-5 text-center lg:leading-5">
                                <div className="flex w-full flex-wrap items-center justify-center gap-8 pt-4">
                                    <Image
                                        src={"/images/partners/virtuals.png"}
                                        alt="Virtuals Logo"
                                        width={130}
                                        height={100}
                                        className="opacity-70"
                                    />
                                    <Image
                                        src={"/images/partners/base.png"}
                                        alt="Base Logo"
                                        width={130}
                                        height={100}
                                        className="opacity-70"
                                    />
                                    <Image
                                        src={"/images/partners/solana.png"}
                                        alt="Solana Logo"
                                        width={130}
                                        height={100}
                                        className="opacity-70"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </motion.div>
        );
    },
);

HeroSection.displayName = "HeroSection";

export { HeroSection };