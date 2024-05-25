/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        border: 'border 4s ease infinite',
        text: 'text 4s ease infinite',
        bounce: 'bounce 5s infinite',
        'bounce-reverse': 'bounce-reverse 5s infinite',
      },
      rotate: {
        30: '25deg',
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        full: '9999px',
        large: '12px',
        cstm: '50px',
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
      bounce: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-20px)' },
      },
      'bounce-reverse': {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(20px)' },
      },
    },
  },
  plugins: [],
};
