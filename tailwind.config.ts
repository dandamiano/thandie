import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "#fff8f3",
          200: "#fef0e6",
          300: "#fde8da",
          400: "#ffd148", // Your primary color
          500: "#fcb93e",
          600: "#fa9f34",
          700: "#e8872a",
          800: "#d6701f",
          900: "#c45814",
        },
      },
    },
  },
  plugins: [],
};
export default config;
