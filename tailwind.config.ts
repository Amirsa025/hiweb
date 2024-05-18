import type { Config } from "tailwindcss";

type ColorObject = {
  [key: string]: string;
};

export const tailwindColors: ColorObject = {
  current: "currentColor",
  transparent: "transparent",
  "gray-50": "#E6E6E6",
  "gray-100": "#C9C9C9",
  "gray-200": "#A0A0A0",
  "gray-300": "#9A9A9A",
  "gray-400": "#989898",
  "base-25": "#353d47",
  "base-50": "#2a323c",
  "base-75": "#20272e",
  "base-100": "#1d232a",
  "base-200": "#191e24",
  "base-300": "#15191e",
  "base-content": "#A6ADBB",
  success: "#46B666",
  neutral: "#5C5C5C",
  "neutral-content": "#A0A0A0",
  error: "#FF6666",
  white: "#ffffff",
  black: "#000000",
  info: "#00ACED",
};
const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: tailwindColors,
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
    extend: {
      boxShadow: {
        card: " 0px 2px 8px 0px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        vazir: ["Vazir", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
