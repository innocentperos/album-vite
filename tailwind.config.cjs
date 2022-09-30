/** @type {import('tailwindcss').Config} */
 
 const defaultTheme =require('tailwindcss/defaultTheme')
 
 
module.exports = {
  mode:"jit",
  content: [
    "./index.html",
    "./page/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
