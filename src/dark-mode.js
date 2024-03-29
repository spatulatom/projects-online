'use strict';
// module i think by default in strict mode

const lightIcon = document.getElementById('light');
const darkIcon = document.getElementById('dark');
const systemIcon = document.getElementById('system');
const lightMobile = document.getElementById('light-mobile');
const darkMobile = document.getElementById('dark-mobile');
const systemMobile = document.getElementById('system-mobile');
const dropDown = document.querySelector('.dropdown');

// LOGIC BEHIND DARK/WHITE MODES + SYTEM OS MODE in Tailwind CSS
// When setting up modes that are hybrid between opertaing system and
// button clicking:
// 1.Check System Mode + add to <html class="dark"> or <html> no class for
// the light mode - THIS IS DONE IN INDEX.HTML IN  <script> SECTION
// with: document.documentElement.classList.add/remove('dark') - this is
// done by the first set of code in the <heade> in index.html file
// 2. Based on that set up the color of the icons.
// 3. Listen for manual click on the icon and set up now according
// <html> class + color ot the icons + local storage

// helper function for resetting colors of the icons: with vite when color set
// in html and we add color here the original color satys and takes prcedence
// I thisnk it worked differntly without vite and so far I have seen any other
// bugs in the app becuse of that even though js was done on the premises that
// the added class takes prcedence

function resetColors() {
  lightIcon.classList.remove('text-cyan');
  darkIcon.classList.remove('text-cyan');
  systemIcon.classList.remove('text-cyan');
  lightMobile.classList.remove('text-cyan');
  darkMobile.classList.remove('text-cyan');
  systemMobile.classList.remove('text-cyan');
}

// 2. SET UP THE COLOR OF THE ICONS DEPENDING ON FIRST LOAD AND REFRESH-
export default function modes() {}
if (!('color-theme' in localStorage)) {
  resetColors();
  systemIcon.classList.add('text-cyan');
  systemMobile.classList.add('text-cyan');
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    dropDown.innerHTML = `<i
      id="dark"
      class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
    ></i>`;
    systemMobile.classList.add('text-cyan');
  } else {
    dropDown.innerHTML = `<i
    class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
  >
  </i>`;
  }
} else {
  if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    if ('mode-system' in localStorage) {
      resetColors();
      systemIcon.classList.add('text-cyan');
      dropDown.innerHTML = `<i
      id="dark"
      class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
    ></i>`;
      systemMobile.classList.add('text-cyan');
    } else {
      resetColors();
      darkIcon.classList.add('text-cyan');
      dropDown.innerHTML = `<i
      id="dark"
      class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
    ></i>`;
      darkMobile.classList.add('text-cyan');
    }
  } else {
    if ('mode-system' in localStorage) {
      resetColors();
      systemIcon.classList.add('text-cyan');
      dropDown.innerHTML = `<i
      class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
    >
    </i>`;
      systemMobile.classList.add('text-cyan');
    } else {
      resetColors();
      lightIcon.classList.add('text-cyan');
      dropDown.innerHTML = `<i
      class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
    >
    </i>`;
      lightMobile.classList.add('text-cyan');
    }
  }
}
// listen for OS mode changes (user changes their OS mode preference
// while using your app)
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
mediaQuery.addEventListener('change', ({ matches }) => {
  console.log('EEEEEEVENTTTT listener triggered.');

  resetColors();
  systemIcon.classList.add('text-cyan');

  systemMobile.classList.add('text-cyan');

  if (matches) {
    localStorage.setItem('color-theme', 'dark');
    localStorage.setItem('mode-system', 'system');
    document.documentElement.classList.add('dark');
    dropDown.innerHTML = `<i
      id="dark"
      class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
    ></i>`;
    console.log('change to dark mode!');
  } else {
    console.log('change to light mode!');
    localStorage.setItem('color-theme', 'light');
    localStorage.setItem('mode-system', 'system');
    document.documentElement.classList.remove('dark');
    dropDown.innerHTML = `<i
      class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
    >
    </i>`;
  }
});

// clean up:
// Add event listener to remove the event listener when the user navigates away
// https://web.dev/bfcache/?utm_source=lighthouse&utm_medium=lr#never-use-the-unload-event
// window.addEventListener('unload', () => {
//   setTimeout(() => {
//     mediaQuery.removeEventListener('change', handleChange);
//     console.log('Event listener removed.');
//   }, 1000); // Delay the removal for 1 second (adjust as needed) to see it ind the dev tolls but it dosent show
// });

// 3. Listen for the click, set up: html class to 'dark' or remove the class +
// SET UP COLOR OF THE ICONS WHEN MAUALLY SWITCHED + SAVE MODE IN LOCALSTORAGE

darkIcon.addEventListener('click', darkMode);
lightIcon.addEventListener('click', lightMode);
systemIcon.addEventListener('click', systemMode);
// mobile nav
darkMobile.addEventListener('click', darkMode);
lightMobile.addEventListener('click', lightMode);
systemMobile.addEventListener('click', systemMode);

function darkMode() {
  resetColors();
  darkIcon.classList.add('text-cyan');
  dropDown.innerHTML = `<i
  id="dark"
  class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
></i>`;

  darkMobile.classList.add('text-cyan');
  document.documentElement.classList.add('dark');
  localStorage.setItem('color-theme', 'dark');
  localStorage.removeItem('mode-system');
}
function lightMode() {
  resetColors();
  lightIcon.classList.add('text-cyan');
  dropDown.innerHTML = `<i
  class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
>
</i>`;
  // mobile nav

  lightMobile.classList.add('text-cyan');
  document.documentElement.classList.remove('dark');
  localStorage.setItem('color-theme', 'light');
  localStorage.removeItem('mode-system');
}
function systemMode() {
  resetColors();
  systemIcon.classList.add('text-cyan');

  systemMobile.classList.add('text-cyan');

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    localStorage.setItem('color-theme', 'dark');
    localStorage.setItem('mode-system', 'system');
    document.documentElement.classList.add('dark');
    dropDown.innerHTML = `<i
    id="dark"
    class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
  ></i>`;
  } else {
    localStorage.setItem('color-theme', 'light');
    localStorage.setItem('mode-system', 'system');
    document.documentElement.classList.remove('dark');
    dropDown.innerHTML = `<i
    class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
  >
  </i>`;
  }
}
