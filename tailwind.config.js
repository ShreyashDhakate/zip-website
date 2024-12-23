/** @type {import('tailwindcss').Config} */
module.exports = {
  // Include paths where Tailwind should look for class names
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust according to your file structure
    './public/**/*.html', // If you're using public folder
  ],
  theme: {
    extend: {
      colors: {
        // Example: Adding custom colors
        primary: '#1e3a8a', // Replace with your desired color
        secondary: '#2563eb', // Replace with your desired color
      },
      spacing: {
        // Example: Custom spacing (you can adjust according to your needs)
        128: '32rem',
        144: '36rem',
      },
      fontFamily: {
        // Example: Adding custom fonts
        sans: ['Inter', 'Arial', 'sans-serif'],
        heading: ['Roboto', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out forwards',
        'fade-slide-in': 'fadeSlideIn 1.5s ease-in-out forwards',
        'pulse-slow': 'pulse 10s linear infinite',
        'fade-scale': 'fadeScale 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeSlideIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeScale: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
    },
  },
  plugins: [
    // Example: Adding useful Tailwind plugins
    require('@tailwindcss/forms'), // For form styling
    require('@tailwindcss/typography'), // For prose (rich text) styling
    require('@tailwindcss/aspect-ratio'), // For aspect-ratio utilities
    require('@tailwindcss/line-clamp'), ,// For line-clamp utilities (text truncation)
    require('tailwind-scrollbar'),
  ],
  },
}
