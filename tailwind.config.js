/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-inset': 'inset 0px 4.96px 12.4px 2.48px rgba(0, 0, 0, 0.25)',
      },
      fontSize: {
        'custom-large': '59.52px',
      },
    },
  },
  plugins: [],
}

