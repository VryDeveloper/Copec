/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '2.3xl': '1.25rem',
        '2.5xl': '1.50rem',
      },
      colors: {
        steel: {
          50: '#f4f6f8',
          100: '#e4e9ee',
          200: '#c9d3dc',
          400: '#7c8b9c',
          600: '#465262',
          800: '#232b35',
          900: '#161b21',
        },
      },
    },
  },
  plugins: [],
};
