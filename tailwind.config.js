/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '2.3xl': '1.25rem', 
        '2.5xl': '1.50rem', 
      },
    },
  },
  plugins: [],
};
