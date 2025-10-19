import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"] ,
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#1e3a8a",
          base: "#1d4ed8",
          light: "#5b7cfa",
          accent: "#6366f1",
          soft: "#eef2ff"
        }
      },
      backgroundImage: {
        "grid-light": "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.08) 0.5px, transparent 0)",
        "hero-sheen": "linear-gradient(145deg, rgba(91,124,250,0.18), rgba(231,236,255,0.8))"
      },
      boxShadow: {
        glow: "0 22px 45px -20px rgba(29, 78, 216, 0.45)",
        card: "0 32px 70px -40px rgba(15, 23, 42, 0.4)",
        elevated: "0 24px 60px rgba(15, 23, 42, 0.08)"
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)"]
      }
    }
  },
  plugins: []
};

export default config;
