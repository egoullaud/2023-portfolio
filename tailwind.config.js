/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      alike: "var(--alike-font)",
      hind: "var(--hind-font)",
    },
    extend: {
      backgroundImage: {
        hero: "url('../public/hero2.png')",
      },
    },
  },
  plugins: [],
};
