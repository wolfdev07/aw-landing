import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#073980",
        darkBg: "#0F172A"
      },
      backgroundImage: {
        "gradient-cover": "linear-gradient(180deg, rgba(15, 23, 42, 0.5), rgba(54, 105, 224, 0.5) 111.58%)",
      }
    },
  },
  plugins: [],
} satisfies Config;
