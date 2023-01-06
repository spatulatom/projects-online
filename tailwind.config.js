/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  // watch for any tailwind classes - *, in any html document
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        archivo: 'Archivo',
        latoLight: 'LatoLight',
        latoBold: 'LatoBold',
        latoReg: 'LatoReg',
      },
      colors: {
        blackish: 'rgb(0, 0, 0, 0.3)',
        main: 'rgb(30, 30, 40)'
      },

      height: {
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh',
        '100v': '100vh',
      },
      width: {
        '80v': '80vw',
      },
    },
  },
  plugins: [],
};
