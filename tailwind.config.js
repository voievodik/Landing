/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '480px' }
    },
    extend: {
      fontSize: {
        base: ['1rem', '26px'],
        xl: ['2.5rem', '2.5rem']
      },
      colors: {
        primary: '#F4E041',
        secondary: '#00BDD3',
        'light-gray': '#F8F8F8',
        error: '#EE4E4E',
        gray: {
          1: '#D0CFCF',
          2: '#7E7E7E'
        }
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif']
      }
    }
  },
  plugins: []
};
