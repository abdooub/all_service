/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#31276C',
          dark: '#241D52',
          light: '#453A85',
        },
        secondary: {
          DEFAULT: '#FF8C00',
          dark: '#E67E00',
          light: '#FFA500',
        },
      },
    },
  },
  plugins: [],
}
