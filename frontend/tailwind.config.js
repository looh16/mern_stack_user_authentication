/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors : {
        primary : '#1E40AF',
        secondary : 'gray'
      }
    },
  },
  plugins: [],
}