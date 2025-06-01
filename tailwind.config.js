/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ededed",
        primary: "#FFD700", // Yellow
        secondary: "#1E90FF", // Neon Blue
        accent: "#FF4BE3", // Neon Pink
        muted: "#BFBFFF", // Soft Violet
      },
      fontFamily: {
        sans: ["'Geist Sans'", "Arial", "sans-serif"],
        mono: ["'Geist Mono'", "monospace"],
      },
      backgroundImage: {
        "neon-gradient": "linear-gradient(90deg, #3b82f6, #ec4899, #8b5cf6)", // blue-500 → pink-500 → violet-500
      },
    },
  },
  plugins: [],
};
