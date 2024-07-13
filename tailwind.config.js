/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#737373',
        main: '#e0f2fe',
        secondary: '#64748b',
        dark: '#111827'
      },
      screens: {
        '2xl': '1220px'
      }
    },
  },
  plugins: [],
}

