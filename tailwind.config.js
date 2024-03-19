/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      // ? sans: "Roboto Mono , monospace", if you want the font-family to be global
      pizza: "Roboto Mono , monospace", // ? to specific the font family using <font-pizza> in the class name
    },
    // ? if you want add addition prop in tailwind css without override the rest
    extend: {
      fontSize: {
        huge: "12rem",
      },
      gridTemplateColumns: {
        "auto-fit-250": "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
    height: {
      screen: "100dvh",
    },
  },
  plugins: [],
};
