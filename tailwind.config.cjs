/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['BebasNeue', 'sans-serif'],
        'cyrillic': ['BebasNeue Cyrillic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
