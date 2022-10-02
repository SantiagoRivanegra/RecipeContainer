/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg-home': "url('/client/src/images/bg-home.jpg')",
        'vh': '100vh'
      }
    },
  },
  plugins: [],
}