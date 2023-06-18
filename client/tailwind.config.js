/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rowcolor': '#fecdd3',
        'rowhover': '#fca5a5',
        'listcolor': '#84cc16'
      }
    },

  },
  plugins: [],
}

