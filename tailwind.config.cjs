/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tomato: "#F6683C",
        midnight: "#0c1c2a",
        lightSteel: "#B0C4DE",
        slateBlue: "#147EFB",
        denim: "#112a41",
        navy: "#06131f",
        dimGray: "#29292A",
        gainsboro: "#DCDCDC",
        bat: "#373738",
      },

      dropShadow: {
        white: "0 0 0.5rem #ffffff9F",
      },

      backgroundImage: {
        "language-logo": "url('./src/assets/svgs/translate.svg')",
      },

      fontFamily: {
        poppins: ["Poppins"],
      },

      height: {
        "web-header": "10vh",
        "mobile-header": "15vh",
        "web-page": "90vh",
        "mobile-page": "85vh",
      },

      minHeight: {
        "mobile-page": "85vh",
        "web-page": "90vh",
      },

      margin: {
        "web-header": "10vh",
        "mobile-header": "15vh",
      },

      gridTemplateColumns: {
        projects: "60% 40%",
      },

      gridTemplateRows: {
        home: "70% 30%",
      },

      screens: {
        md: "874px",
      },

      keyframes: {
        scale: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
      },

      animation: {
        scale: "scale .5s linear forwards",
      },
    },
  },
  plugins: [],
}
