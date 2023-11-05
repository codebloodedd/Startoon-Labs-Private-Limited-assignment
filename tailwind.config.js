/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#002647",
        secondary: "#37DD0D",
        tertiary: "#FBFBFB",
        "darkest": "#1F1F1F",
        "grey-darker": "#333333",
        "grey-dark": "#555555",
        "grey-light": "#888888",
        "grey-lighter": "#B6B6B6",
      },
    },
  },
  plugins: [],
};
