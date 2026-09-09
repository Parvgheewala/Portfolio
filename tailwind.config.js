/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        bg: {
          DEFAULT: "#08090b",
          elevated: "#0d0f12",
        },
        surface: {
          DEFAULT: "#111318",
          hover: "#151820",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
          strong: "rgba(255,255,255,0.14)",
        },
        ink: {
          DEFAULT: "#f4f5f7",
          secondary: "#9aa1ae",
          muted: "#5f6673",
        },
        accent: {
          DEFAULT: "#5b8cff",
          hover: "#7ba0ff",
          dim: "rgba(91,140,255,0.12)",
        },
        success: "#3ecf8e",
        warning: "#e2a33d",
        error: "#ef5a5a",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        display: ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        h1: ["clamp(2rem, 3.6vw, 3rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        h2: ["clamp(1.5rem, 2.4vw, 2rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      spacing: {
        section: "7rem",
        "section-sm": "4rem",
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(0,0,0,0.35)",
        glow: "0 0 0 1px rgba(91,140,255,0.25), 0 8px 30px rgba(91,140,255,0.08)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(8,9,11,0.9) 70%), radial-gradient(80% 60% at 50% 0%, rgba(91,140,255,0.10), transparent 60%)",
      },
      animation: {
        "fade-up": "fade-up 0.6s ease forwards",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
