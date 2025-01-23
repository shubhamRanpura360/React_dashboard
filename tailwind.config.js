/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


module.exports = {
  darkMode: 'class', 
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-background': '#1e1e2f',
        'dark-text': '#e4e4e7',
      },
    },
  },
  plugins: [],
};

