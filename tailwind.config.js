/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // watch for any tailwind classes - *, in any html document
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        // archivo: 'Archivo',
        
      },
      colors: {
        blackish: 'rgb(0, 0, 0, 0.3)',
        customBlack: 'rgb(30, 30, 40)',
        customGreen: '#6b706d'
      },

  
      width: {
        '80v': '80vw',
      },
    },
  },
  plugins: [],
};
