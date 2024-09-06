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
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Use Poppins as the primary sans-serif font
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.custom-scrollbar': {
          '&::-webkit-scrollbar': {
          width: '8px',
          height: '64px',
          top: '207px',
          left: '1621px',
          gap: '0px',
          borderRadius: '8px 0px 0px 0px',
          opacity: '0px',
          backgroundImage: 'linear-gradient(177.32deg, #888989 5.6%, #4A4E54 93.28%)',
        },
         
        },
      });
    },
  ],
}

