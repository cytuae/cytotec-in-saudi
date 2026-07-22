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
        navy: {
          DEFAULT: "#0B1F33",
          deep: "#071522",
        },
        gold: "#C8A96B",
        warm: "#FAF8F3",
        mist: "#EEF1F3",
        ink: "#17212B",
        success: "#17765A",
        warning: "#B36B21",
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex-arabic)", "Tahoma", "sans-serif"],
        display: ["var(--font-ibm-plex-arabic)", "Tahoma", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(11, 31, 51, 0.06)",
        lift: "0 12px 40px rgba(11, 31, 51, 0.1)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
