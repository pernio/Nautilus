module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        manuscript: ['"Crimson Pro"', "serif"],
      },
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
      },
    },
  },
};
