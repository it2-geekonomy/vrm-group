import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
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
