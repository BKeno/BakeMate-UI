/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Inter', 'sans-serif'],
        handwritten: ['"Great Vibes"', 'cursive']
      },
      colors: {
        'bakery-cream': '#f5f5dc',
        'bakery-brown': '#8B4513',
        'bakery-gold': '#DAA520',
      },
    },
  },
  plugins: [require("daisyui")],
}