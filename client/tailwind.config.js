/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#85FDFF",
        color2: "#8AEFFF",
        color3: "#8EE1FF",
        color4: "#93D4FF",
        color5: "#98C6FF",
        color6: "#9CB8FF",
        color7: "#A1AAFF",
        darkColor1: "#170E13",
        darkColor2: "#7A7ADB",
        darkColor3: "#191714",
        darkColor4: "#2234AE",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".clip-rhombus": {
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
