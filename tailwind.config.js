/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ["Ubuntu"],
      },
      backgroundImage: {
        "bg-sidebar-mobile": "url('../assets/images/bg-sidebar-mobile.svg')",
        "big-curvy-desktop": "url('../images/bg-curvy-desktop.svg')",
      },
      colors: {
        Marine: "#02295A",
        Purplish: "#513DFF",
        Pastel: "#ADBEFF",
        Light: "#BFE2FD",
        Strawberry: "#ED3548",
        Magnolia: "hsl(217, 100%, 97%)",
        Alabaster: "hsl(231, 100%, 99%)",
        Coolgray: "hsl(231, 11%, 63%)",
        Lightgray: "hsl(229, 24%, 87%)"
      },
    },
  },
  plugins: [],
};
