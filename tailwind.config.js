/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        pop: "'Poppins', sans-serif"
      }
    },
  },
  plugins: [],
}
