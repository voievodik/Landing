/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        base: ['1rem', '26px'],
        xl: ['2.5rem', '2.5rem']
      },
      colors: {
        primary: '#F4E041',
        secondary: '#00BDD3',
        'light-gray': '#F8F8F8'
      },
      fontFamily: {
        nonito: ['Nunito', 'sans-serif']
      }
    }
  },
  plugins: []
};
