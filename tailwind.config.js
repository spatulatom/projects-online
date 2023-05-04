/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // https://tailwindcss.com/docs/content-configuration#pattern-recommendations
  // if classes used in js files we need this config
  content: ['./scripts/*.{html,js}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        blackish: 'rgb(0, 0, 0, 0.3)',
        // customBlack: 'rgb(30, 30, 40)',
        customBlack: 'rgb(30, 30, 45)',
        cyan: 'hsl(180, 66%, 49%)',
        // darkViolet: 'hsl(257, 27%, 26%)',
        darkViolet: 'hsl(180, 66%, 49%)',
        red: 'hsl(0, 87%, 67%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%) ',
      },
      backgroundImage: {
        road: "url('../imgs/road3.jpg')",
        view: "url('../imgs/view.jpg')",
        wall: "url('../imgs/wall.jpg')",
        keboardWhite: "url('../imgs/keyboard-white.jpg')",
        keyboardDark: "url('../imgs/keyboard-dark.png')",
      },
      spacing: {
        180: '32rem',
      },
      width: {
        '20vw': '15vw',
      }
    },
  },
  plugins: [],
};
