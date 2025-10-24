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
          DEFAULT: '#FF8C00',
          dark: '#E67E00',
          light: '#FFA500',
        },
        secondary: {
          DEFAULT: '#2C3E7E',
          dark: '#1E2A5E',
          light: '#3B4F9E',
        },
      },
    },
  },
  plugins: [],
}
