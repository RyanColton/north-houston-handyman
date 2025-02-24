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
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        themeLightBlue: "rgb(var(--lightblue))",
        themeDarkBlue: "rgb(var(--darkblue))",
        themeYellow: "rgb(var(--yellow))",
        themeGreen: "rgb(var(--green))",
        themeBrown: "rgb(var(--brown))",
      },
    },
  },
  plugins: [],
} satisfies Config;
