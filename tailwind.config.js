/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", 
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00B3A4',
        secondary: '#333333',
        'custom-teal':'#497774'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
