import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

const config = {
  darkMode: "class",
  content: {
    files: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./features/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
    ],
  },

  prefix: "",
  theme: {
    screens, // Tailwind's default screens, in `rem`
    fontSize, // Tailwind's default font sizes, in `rem` (including line heights)
    container: {
      padding: "2rem",
    },
    extend: {
      screens: {
        "2xl": "1400px",
        "3xl": "1800px",
      },
      transitionProperty: {
        background: "background-color, background-position, background-size",
        colors: "color, background-color, border-color",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        dots: ["var(--font-dots)", ...fontFamily.sans],
        formula: ["var(--font-formula)", ...fontFamily.sans],
      },
      colors: {
        greycontent: "#2C2C2C",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btred: "#ff005c",
        btPurple: "#543990",
        btGreen: "#d1fd0a",
        btGrey: "#8F8F8F",
        btDark: "#080809",
        newGrey: "rgb(22, 22, 22)",
        newGreyAccent: "rgb(29, 29, 29)",
        newGreyBG: "rgb(13, 13, 13)",
        newGreyBorder: "rgb(37, 37, 37)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {},
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": {
            opacity: "1",
          },
          "20%,50%": {
            opacity: "0",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "slide-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "slide-right": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-left-infinite": "slide-left 14s linear infinite",
        "slide-right-infinite": "slide-right 14s linear infinite",
      },
      boxShadow: {
        input:
          "`0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`",
      },
      clipPath: {
        custom: "polygon(0px 0px, 0px 100%, 100% 100%, 100% 50px, 97% 27px, 91% 26px, 87% 0px)",
      },
    },
  },
  plugins: [
    fluid,
    require("tailwindcss-animate"),
    require("tailwind-clip-path"),
    require("tailwind-scrollbar"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dot-thick": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              // `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none">
              <path fill="${value}" id="pattern-circle" d="M17 11h2v8h8v2h-8v8h-2v-8h-8v-2h8z"/>

            </svg>`,
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" },
      );
    },
  ],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}

export default config;
