/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter var'],
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
