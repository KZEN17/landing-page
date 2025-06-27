import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // VPVP.FUN Brand Colors - EXPLICITLY DEFINED
                "btGreen": "#d1fd0a",
                "btred": "#ff005c",
                "btPurple": "#543990",
                "btGrey": "#8F8F8F",
                "btDark": "#080809",
                "newGrey": "#161616",
                "newGreyAccent": "#1d1d1d",
                "newGreyBG": "#0d0d0d",
                "newGreyBorder": "#252525",
                "greycontent": "#2C2C2C",

                // Alternative naming just in case
                "bt-green": "#d1fd0a",
                "bt-red": "#ff005c",
                "bt-purple": "#543990",
                "bt-grey": "#8F8F8F",
                "bt-dark": "#080809",
                "new-grey": "#161616",
                "new-grey-accent": "#1d1d1d",
                "new-grey-bg": "#0d0d0d",
                "new-grey-border": "#252525",
                "grey-content": "#2C2C2C",

                // EXPLICIT RGB VALUES TOO
                "vpvp-green": "rgb(209, 253, 10)",
                "vpvp-red": "rgb(255, 0, 92)",
                "vpvp-purple": "rgb(84, 57, 144)",
                "vpvp-grey": "rgb(143, 143, 143)",
                "vpvp-dark": "rgb(8, 8, 9)",
                "vpvp-bg": "rgb(13, 13, 13)",
                "vpvp-surface": "rgb(22, 22, 22)",
                "vpvp-accent": "rgb(29, 29, 29)",
                "vpvp-border": "rgb(37, 37, 37)",
            },
            animation: {
                "spin-slow": "spin 20s linear infinite",
                "float": "float 3s ease-in-out infinite",
                "float-delayed": "float-delayed 3s ease-in-out infinite 1.5s",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                "float-delayed": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-15px)" },
                },
            },
            fontFamily: {
                sans: ["Formula Condensed", "Arial", "sans-serif"],
                mono: ["Formula Condensed", "Courier", "monospace"],
            },
        },
    },
    plugins: [],
};

export default config;