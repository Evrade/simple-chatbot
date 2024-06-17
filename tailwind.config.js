/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#06b6d4',
      },
      fontfontFamily: {
        sans: ['Poppins', 'sans'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

