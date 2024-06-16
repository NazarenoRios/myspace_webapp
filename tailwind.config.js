/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A3AFF",
        glass: "rgba(255,255,255,0.25)",
        brown: "rgb(30, 30, 17);",
        darkyellow: "#F3C669",
        darkyellowhover: "#F4D789",
        darkpurple: "#644c71",
        off: "#FFFFF0",
      },
      backgroundImage: {
        main: "url('/assets/background7.jpg')",
        mainDark: "url('/assets/background8.jpg')",
        login: "url('/assets/bgLogin.jpg')",
      },
      fontFamily: {
        WhitneyLight: ["WhitneyLight", "sans-serif"],
        WhitneyMedium: ["WhitneyMedium", "sans-serif"],
        WhitneySemibold: ["WhitneySemibold", "sans-serif"],
        WhitneyBold: ["WhitneyBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
