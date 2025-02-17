/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'cyrillic': ['Bebas Neue Cyrillic', 'sans-serif'],
        'inter': ['Inter-Light-BETA', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
