import Image from "next/image";

export const Partners = () => {
    const logos = [
        { name: "farcana", logo: "/images/partners/farcana.png" },
        { name: "Games", logo: "/images/partners/games.png" },
        { name: "OW2", logo: "/images/partners/ow2.png" },
        { name: "parallel", logo: "/images/partners/parallel.png" },
        { name: "sandbox", logo: "/images/partners/sandbox.png" },
        { name: "sharpnel", logo: "/images/partners/sharpnel.png" },

        { name: "BigTime", logo: "/images/partners/bigtime.png" },
        { name: "CS2", logo: "/images/partners/cs2.png" },
        { name: "delysium", logo: "/images/partners/delysium.png" },
        { name: "faceit", logo: "/images/partners/faceit.png" },
        { name: "metalcore", logo: "/images/partners/metalcore.png" },
        { name: "offthegrid", logo: "/images/partners/offthegrid.png" },
        { name: "Cross The Ages", logo: "/images/partners/crosstheages.png" },
        { name: "Azur", logo: "/images/partners/azur.png" },
    ];



    return (
        <div className="flex flex-col items-center justify-center space-y-8 px-4 mt-10 md:px-8">
            {/* Left Scrolling Logos */}
            <h2 className="my-4  bg-clip-text text-4xl font-semibold text-newGray">
                PREVIOUS PARTNERS
            </h2>
            <div
                className="grid grid-cols-4 items-center justify-items-center gap-8 md:grid-cols-5 lg:grid-cols-7"
                style={{
                    display: "grid",

                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {logos.map((logo) => (
                    <Image
                        src={logo.logo}
                        alt={logo.name}
                        key={`${logo.name}-2`}
                        sizes="100vw"
                        className="opacity-70"
                        style={{
                            width: "70%",
                            height: "auto",
                        }}
                        width={200}
                        height={200}
                    />
                ))}
            </div>
        </div>
    );
};