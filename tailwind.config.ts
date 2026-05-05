import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#F4EFE2",
          100: "#ECE5D2",
          200: "#DCD2B8",
          300: "#C9BB97",
        },
        brand: {
          50: "#EBFAF1",
          100: "#D2F4E0",
          200: "#A4E8C0",
          300: "#67D89A",
          400: "#2EC576",
          500: "#06B85C",
          600: "#009A4B",
          700: "#017A3C",
          800: "#015E30",
          900: "#024824",
        },
        ink: {
          900: "#0A0A0A",
          800: "#171717",
          700: "#262626",
          600: "#404040",
          500: "#737373",
          400: "#A3A3A3",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        warm: "0 20px 60px -20px rgba(6, 184, 92, 0.30)",
        soft: "0 10px 40px -15px rgba(10, 10, 10, 0.10)",
        card: "0 1px 0 0 rgba(10,10,10,0.04), 0 12px 32px -16px rgba(10,10,10,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
