/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

const customColors = {
  primary: colors.indigo['600'],
  'primary-focus': colors.indigo['700'],
  'secondary-light': '#ff57d8',
  secondary: '#F000B9',
  'secondary-focus': '#BD0090',
  'accent-light': colors.indigo['400'],
  accent: '#5f5af6',
  'accent-focus': '#4d47f5',
  info: colors.sky['500'],
  'info-focus': colors.sky['600'],
  success: colors.emerald['500'],
  'success-focus': colors.emerald['600'],
  warning: '#ff9800',
  'warning-focus': '#e68200',
  error: '#ff5724',
  'error-focus': '#f03000',
}

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        tiny: ['0.625rem', '0.8125rem'],
        'tiny+': ['0.6875rem', '0.875rem'],
        'xs+': ['0.8125rem', '1.125rem'],
        'sm+': ['0.9375rem', '1.375rem'],
      },
      colors: {
        ...customColors,
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        18: '4.5rem',
      },
      boxShadow: {
        soft: '0 3px 10px 0 rgb(48 46 56 / 6%)',
        'soft-dark': '0 3px 10px 0 rgb(25 33 50 / 30%)',
      },
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
