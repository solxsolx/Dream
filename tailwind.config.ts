import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        impact: [
          "Impact",
          "Haettenschweiler",
          "Franklin Gothic Bold",
          "Charcoal",
          "Helvetica Inserat",
          "Bitstream Vera Sans Bold",
          "Arial Black",
          "sans-serif",
        ],
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "gradient-x": "gradient-x 3s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      fontSize: {
        xxs: ["0.625rem", { lineHeight: "1rem" }],
        mammoth: ["8rem", { lineHeight: "1" }],
        elephant: ["9rem", { lineHeight: "2" }],
      },
      letterSpacing: {
        tightest: "-.075em",
      },
      lineHeight: {
        tighter: "1.1",
      },
    },
  },
  plugins: [],
};
export default config;
