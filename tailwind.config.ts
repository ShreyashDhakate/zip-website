import type { Config } from 'tailwindcss';

/** @type {Config} */
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',   // Includes all relevant page files
    './components/**/*.{js,ts,jsx,tsx}', // Includes all relevant component files
    './layouts/**/*.{js,ts,jsx,tsx}',  // Include layouts if you use them
    './src/**/*.{js,ts,jsx,tsx}',     // Include src directory for any global files
  ],
  theme: {
    extend: {
      // Custom animation and keyframes
      animation: {
        parallax: 'parallax 30s infinite',
      },
      keyframes: {
        parallax: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-50px)' },
        },
      },
      colors: {
        primary: '#1e3a8a',  // Example: Custom primary color
        secondary: '#2563eb', // Example: Custom secondary color
      },
      spacing: {
        '128': '32rem',  // Example: Custom spacing
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),  // Add forms plugin for better form styling
    require('@tailwindcss/typography'), // Add typography plugin for rich text styling
    require('@tailwindcss/aspect-ratio'), // Aspect ratio plugin for images/videos
  ],
};

export default config;
