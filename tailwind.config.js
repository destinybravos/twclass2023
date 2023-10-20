/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./resources/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors: {
        primary: '#ca3436',
        secondary: '#ededed'
      }
    },
  },
  plugins: [],
}

