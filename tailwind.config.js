/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],   
  theme: {
    extend: {
      colors: {
        'theme-grey-100': '#F2F9FE',
        'theme-grey-200': '#909193',
        'theme-grey-300': '#223344',
        'theme-grey-400': '#111729',
        'theme-purple': '#2A4DD0',
        'theme-green': '#4CA154',
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
}