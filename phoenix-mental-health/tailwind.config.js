/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: '#318F9A',       // Turquoise
        lightTurquoise: '#B8DED0',  // Light Turquoise
        darkGreen: '#095D40',       // Dark Green
        mediumGreen: '#7AA977',     // Medium Green (used only in logo)
        lightYellow: '#F4F5BA',     // Light Yellow (used only in logo)
        highlight: '#F4FADD',       // Highlight
        background: '#EAF1EF',      // Background
        black: '#000000',           // Black for text
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        dmSans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}




