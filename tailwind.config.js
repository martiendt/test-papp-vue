/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'fade-out': {
          '0%': {
            opacity: 1,
            visibility: 'visible',
          },
          '100%': {
            opacity: 0,
            visibility: 'hidden',
          },
        },
      },
    },
  },
  plugins: [],
}
