/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html","./src/**/*.{js,jsx,ts,tsx}"], // adjust to your folder
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        unbounded: ["Unbounded", "cursive"],
        cutive: ["Cutive", "serif"],
         coolvetica: ["Coolvetica", "sans-serif"],// custom
      },
      
    },
  },
  plugins: [ require('@tailwindcss/line-clamp'),],
};
