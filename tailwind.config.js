/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class", // Enables dark mode via a `dark` class on <html>

  theme: {
    extend: {
      colors: {
        primary: "#0e0e0e",
        secondary: "#1f1f1f",
        accent: "#3b82f6", // Tailwind's blue-500
        light: "#f3f4f6",
        dark: "#0e0e0e",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      boxShadow: {
        soft: "0 4px 14px rgba(0,0,0,0.1)",
      },
      spacing: {
        section: "5rem",
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
