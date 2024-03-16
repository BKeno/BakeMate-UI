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
        'handwritten': ['Great Vibes', 'cursive']
      },
      colors: {
        'bakery-cream': '#f5f5dc',
        'bakery-brown': '#8B4513',
        'bakery-gold': '#DAA520',
        'bakery-focus': '#b38b1d',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#DAA520', // Use bakery-gold as the primary color
          'primary-focus': '#b38b1d', // A darker shade of bakery-gold for focus state
          'primary-content': '#ffffff', // White text for high contrast on primary color
          // ... other custom theme settings
        },
      },
      // ... other themes if needed
    ],
  },
};