/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter var'],
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        top: '0px -1px 18px 5px rgba(0,0,0,0.35);'
      }
    }
  },
  plugins: []
}
