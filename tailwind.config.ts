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
        },
        urgency: {
          amber: "#f59e0b",
          "amber-light": "#fbbf24",
          "amber-dark": "#d97706",
          red: "#ef4444",
          "red-light": "#f87171",
          "red-dark": "#dc2626"
        },
        success: {
          base: "#10b981",
          light: "#34d399",
          dark: "#059669"
        }
      },
      backgroundImage: {
        "grid-light": "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.08) 0.5px, transparent 0)",
        "hero-sheen": "linear-gradient(145deg, rgba(91,124,250,0.18), rgba(231,236,255,0.8))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-gradient": "radial-gradient(at 40% 20%, hsla(217,89%,61%,0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(245,66%,66%,0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(217,89%,61%,0.2) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(198,83%,56%,0.1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(245,66%,66%,0.2) 0px, transparent 50%)"
      },
      boxShadow: {
        glow: "0 22px 45px -20px rgba(29, 78, 216, 0.45)",
        "glow-intense": "0 25px 50px -12px rgba(29, 78, 216, 0.6), 0 0 30px -10px rgba(29, 78, 216, 0.4)",
        card: "0 32px 70px -40px rgba(15, 23, 42, 0.4)",
        elevated: "0 24px 60px rgba(15, 23, 42, 0.08)",
        "urgency-pulse": "0 0 0 0 rgba(239, 68, 68, 0.7)",
        "amber-glow": "0 20px 40px -15px rgba(245, 158, 11, 0.5)"
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)"]
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "urgency-pulse": "urgency-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite"
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(29, 78, 216, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(29, 78, 216, 0.8)" }
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        "urgency-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(239, 68, 68, 0.7)" },
          "50%": { boxShadow: "0 0 0 10px rgba(239, 68, 68, 0)" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" }
        },
        "shimmer": {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" }
        }
      }
    }
  },
  plugins: []
};

export default config;
