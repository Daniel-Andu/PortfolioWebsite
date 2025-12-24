import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#111111",
        accent: "#64ffda",

        text: {
          primary: "#e6e6e6",
          secondary: "#a8b2d1",
        },

        gray: {
          950: "#0a0a0a",
          900: "#111111",
          800: "#1f1f1f",
          700: "#2d2d2d",
          600: "#4a4a4a",
          500: "#6b7280",
          400: "#9ca3af",
          300: "#d1d5db",
        },

        emerald: {
          950: "#022c22",
          900: "#064e3b",
          800: "#065f46",
          700: "#047857",
          600: "#059669",
          500: "#10b981",
          400: "#34d399",
          300: "#6ee7b7",
          200: "#a7f3d0",
          100: "#d1fae5",
        },
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Space Grotesk", "monospace"],
      },

      animation: {
        blink: "blink 1s infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 3s ease-in-out infinite",
        gradient: "gradient 3s ease infinite",
      },

      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradient: {
          "0%, 100%": {
            backgroundSize: "200% 200%",
            backgroundPosition: "left center",
          },
          "50%": {
            backgroundSize: "200% 200%",
            backgroundPosition: "right center",
          },
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
