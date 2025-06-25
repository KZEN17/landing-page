import Image from "next/image";

export default function SponsorsSection() {
    return (
        <section className="bg-newGrey relative overflow-hidden mb-12 pb-4">
            {/* Background subtle effects */}
            <div className="leading-0 mx-auto max-w-3xl space-y-5 text-center lg:leading-5">
                <div className="flex w-full flex-wrap items-center justify-center gap-8 pt-4">
                    <Image
                        src={"/images/partners/virtuals.png"}
                        alt="Virtuals Logo"
                        width={200}
                        height={100}
                        className="opacity-70"
                    />
                    <Image
                        src={"/images/partners/base.png"}
                        alt="Base Logo"
                        width={200}
                        height={100}
                        className="opacity-70"
                    />
                    {/* <Image
                                        src={"/images/partners/solana.png"}
                                        alt="Solana Logo"
                                        width={130}
                                        height={100}
                                        className="opacity-70"
                                    /> */}
                </div>
            </div>

        </section>
    );
}