/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
     fontFamily: {
        inter: ['Inter', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        unbounded: ['Unbounded', 'sans-serif'],
        coolvetica: ['Coolvetica', 'sans-serif'],
        cutive: ['Cutive', 'serif'],
      },
    },
  },
  plugins: [],
};
