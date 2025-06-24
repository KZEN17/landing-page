"use client";

import * as React from "react";
import { cn } from "@/utils";
import Image from "next/image";
import { motion } from "motion/react";
import { useCopyToClipboard } from "@/hooks/use-copy-clipboard";
import { useMediaQuery } from "@/hooks/useMediaQuery";
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
            refferal,
            className,
            title = "Build products for everyone",
            subtitle = {
                regular: "Designing your projects faster with ",
                gradient: "the largest figma UI kit.",
            },
            description = "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
            ctaText = "Browse courses",
            ctaHref = "#",
            bottomImage = {
                light: "https://farmui.vercel.app/dashboard-light.png",
                dark: "https://farmui.vercel.app/dashboard.png",
            },
            gridOptions,
            ...props
        },
        ref,
    ) => {
        // const { data } = useQuery({
        //     queryKey: ["me" + "ref"],
        //     queryFn: () => referralStatus(),
        // });
        const isDesktop = useMediaQuery("(min-width: 768px)");
        const [copyToClipboard] = useCopyToClipboard();

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

                                {/* Overlay */}
                                {/* <div className="absolute inset-0 z-10 bg-black opacity-40" /> */}

                                <div className="leading-0 z-10 mx-auto max-w-3xl space-y-5 text-center lg:leading-5">
                                    <h2 className="mx-auto bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] bg-clip-text text-4xl tracking-wider text-transparent dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] md:text-6xl">
                                        {subtitle.regular}
                                        {subtitle.gradient}
                                    </h2>
                                    <p className="mx-auto max-w-2xl text-lg text-gray-200">{description}</p>

                                    {/* <div className="mt-4">
                    <span className="text-xs font-semibold">
                      Sign up, Buy & Hold $BTA for Early Access, Save BIG on Deployment!
                      <br />
                    </span>
                    <span className="text-xs">Refer&Earn even BIGGER with 20% on every future transactions</span>
                  </div> */}

                                    <div className="flex items-center justify-center gap-4 md:gap-8">
                                        {/* <ReferralDialog code={"FFFFFF"} referralAmount={2} rank={1} /> */}

                                        {/* {data?.referralCode ? (
                      <RefferDialogResp
                        code={data.referralCode}
                        referralAmount={data.referralsCount}
                        rank={data.rank}
                      />
                    ) : (
                      <JoinDialogResp referral={refferal ?? ""} />
                    )} */}

                                        <a
                                            href="https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency=0xab10e517f3138b17108b32129e8c8446ad44a267"
                                            target="_blank"
                                        >
                                            <button className="bg-[#d1fd0a] text-black px-8 py-3 rounded font-bold text-lg hover:bg-btGreen/80 transition-colors">
                                                BUY VPVP
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* image as background of this div */}
                            <div className="leading-0 mx-auto mt-4 max-w-3xl space-y-5 text-center lg:leading-5">
                                <div className="flex w-full flex-wrap items-center justify-center gap-8 pt-4">
                                    {/* <Image
                    src={"/images/partners/bt.png"}
                    alt="Base Logo"
                    width={130}
                    height={100}
                    className="opacity-70"
                  /> */}
                                    <Image
                                        src={"/images/partners/virtuals.png"}
                                        alt="Base Logo"
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
                                        alt="Base Logo"
                                        width={130}
                                        height={100}
                                        className="opacity-70"
                                    />
                                </div>
                            </div>

                            {/* <div className="mt-8 flex w-full flex-col items-center justify-center gap-4">
                <a className="flex w-full max-w-lg grow items-center justify-center gap-2 rounded-md border px-4 text-gray-400 backdrop-blur-lg">
                  <Icons.solana />
                  {isDesktop ? (
                    <span className="ml-2 grow text-xs md:text-sm">BatJTTdVgREJDaqkaexb2HYKXFfaF9v2HJT3R9WJZtQp</span>
                  ) : (
                    <span className="ml-2 grow text-xs md:text-sm">
                      {shortenText("BatJTTdVgREJDaqkaexb2HYKXFfaF9v2HJT3R9WJZtQp", 10)}
                    </span>
                  )}
                  <Icons.copy
                    className="copy-icon hover:cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent event bubbling to parent anchor tag
                      copyToClipboard("BatJTTdVgREJDaqkaexb2HYKXFfaF9v2HJT3R9WJZtQp");
                    }}
                  />
                </a>
                <a className="flex w-full max-w-lg grow items-center justify-center gap-2 rounded-md border px-4 text-gray-400 backdrop-blur-lg">
                  <Icons.base className={"size-4"} />
                  {isDesktop ? (
                    <span className="ml-2 grow text-xs md:text-sm">0xaB10E517f3138b17108B32129E8C8446AD44a267</span>
                  ) : (
                    <span className="ml-2 grow text-xs md:text-sm">
                      {shortenText("0xaB10E517f3138b17108B32129E8C8446AD44a267", 10)}
                    </span>
                  )}
                  <Icons.copy
                    className="copy-icon hover:cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent event bubbling to parent anchor tag
                      copyToClipboard("0xaB10E517f3138b17108B32129E8C8446AD44a267");
                    }}
                  />
                </a>
              </div> */}

                            {/* {bottomImage && (
                <div className="relative z-10 mt-16 md:mx-10">
                  <img
                    src={bottomImage.light}
                    className="w-full rounded-lg border border-gray-200 shadow-lg dark:hidden"
                    alt="Dashboard preview"
                  />
                  <img
                    src={"/images/screen.webp"}
                    className="hidden w-full rounded-lg border border-gray-800 shadow-lg dark:block"
                    alt="Dashboard preview"
                  />
                </div>
              )} */}
                        </div>
                    </section>
                </div>
            </motion.div>
        );
    },
);
HeroSection.displayName = "HeroSection";

export { HeroSection };
