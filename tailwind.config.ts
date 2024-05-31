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
        '50': '#fefce8',
        '100': '#fdf8c4',
        '200': '#fcef8c',
        '300': '#fadd4a',
        '400': '#f7c918',
        '500': '#f2b90c',
        '600': '#c78807',
        '700': '#9f6109',
        '800': '#834c10',
        '900': '#703f13',
        '950': '#412007',
    },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
      
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
