import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#454083",
        secondary: "#EEE8F7",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        cinzel: ["Cinzel", "serif"],
        cormorant: ["Cormorant", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
