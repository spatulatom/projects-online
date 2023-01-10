/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // watch for any tailwind classes - *, in any html document
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        blackish: 'rgb(0, 0, 0, 0.3)',
        customBlack: 'rgb(30, 30, 40)',
        cyan: 'hsl(180, 66%, 49%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%) ',
      },
      backgroundImage: {
        road: "url('../imgs/road3.jpg')",
        view: "url('../imgs/view.jpg')"
      },
      spacing: {
        180: '32rem',
      },
      width:{
        '20vw': '20vw'
      }
    },
  },
  plugins: [],
};
