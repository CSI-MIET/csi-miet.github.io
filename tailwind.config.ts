import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      textGradient: "linear-gradient(94deg, #FFF 6.12%, #DAC8FF 80.25%)",
      buttonGradient: "linear-gradient(97deg, #FFF -122.99%, #6F26FF 91.35%)",
    },
    colors: {
      glassEffect: "rgba( 255, 255, 255, 0.25 )",
      green: "#8FE600",
      purple: "#B95DFE",

      background: "#11111B",
    },
    boxShadow: {
      glass: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    },
  },
  plugins: [require("daisyui")],
};
export default config;
