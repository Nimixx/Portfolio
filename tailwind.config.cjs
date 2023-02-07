/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#fdfdfd',
        black: {
          100: '#3b3b3b',
          200: '#252525',
          300: '#212121',
          400: '#1e1e1e',
          500: '#1a1a1a',
          600: '#0d0d0d',
          700: '#0c0c0c',
          800: '#0a0a0a',
          900: '#090909',
        },
      },
      backgroundImage: {
        background: "url('./src/assets/background.webp')",
      },
    },
  },
  plugins: [],
};
