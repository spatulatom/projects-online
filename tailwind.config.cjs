/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // https://tailwindcss.com/docs/content-configuration#pattern-recommendations
  // if classes used in js files we need this config
  // ['./*.html] -  any html classes in the root
  // content: ['./scripts/*.{html,js}', './index.html', './query.html', './container-query.html', './chatgpt.html'],
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        blackish2: 'rgb(0, 0, 0, 0.3)',
        // customBlack: 'rgb(30, 30, 40)',
        customBlack: 'rgb(30, 30, 45)',
        cyan: 'hsl(180, 66%, 49%)',
        // darkViolet: 'hsl(257, 27%, 26%)',
        darkViolet: 'hsl(180, 66%, 49%)',
        red: 'hsl(0, 87%, 67%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%) ',
        whiteish: 'rgb(255, 255, 255, 0.9)',
        blackish: 'rgb(30, 30, 45,0.8)',
      },
      // backgroundImage: {
      //   road: "url('/images/road3.jpg')",
      //   view: "url('/images/view.jpg')",
      //   wall: "url('/images/wall.jpg')",
      //   keboardWhite: "url('/images/keyboard-white.jpg')",
      //   keyboardDark: "url('/images/keyboard-dark.png')",
      //     'header-desktop': "url('/images/bg-header-desktop.png')",
      
      // },
      spacing: {
        180: '32rem',
      },
      width: {
        '20vw': '23vw',
      }
    },
  },
  plugins: [ require('@tailwindcss/container-queries'),],
};
