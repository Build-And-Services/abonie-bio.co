/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        border: 'border 4s ease infinite',
        text: 'text 4s ease infinite',
      },
      rotate: {
        30: '25deg',
      },
    },
    keyframes: {
      text: {
        '0%': {
          'background-position': '200% 0',
          color: 'black',
        },
        '50%': {
          'background-position': '0% 50%',
          'background-size': '100% auto',
          color: 'transparent',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
        },
        '100%': {
          'background-position': '200% 0',
          color: 'black',
        },
      },
      border: {
        '0%, 100%': { 'background-position': '0% 50%' },
        '50%': { 'background-position': '100% 50%' },
      },
    },
  },
  plugins: [],
};
