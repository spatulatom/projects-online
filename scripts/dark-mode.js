const lightIcon = document.getElementById('light');
const darkIcon = document.getElementById('dark');
const systemIcon = document.getElementById('system');
const allIcons = document.querySelectorAll('.icons');

// When setting up modes that are hybrid between opertaing system and
// button clicking :
// 1.Check System Mode + add to <html class="dark"> or <html> no class for 
// the light mode and this is done 
// with: document.documentElement.classList.add/remove('dark') - this is 
// done by the first set of code in the <heade> in index.html file
// 2. Based on that set up the color of the icons.
// 3. Listen for manual click on the icon and set up now according 
// <html> class + color ot the icons + local storage


// 2. SET UP THE COLOR OF THE ICONS DEPENDING OT THE MODE 
if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  if ('mode-system' in localStorage) {
    systemIcon.classList.add('text-cyan');
  } else {
    darkIcon.classList.add('text-cyan');
  }
} else {
  if ('mode-system' in localStorage) {
    systemIcon.classList.add('text-cyan');
  } else {
    lightIcon.classList.add('text-cyan');
  }
}

// 3. Listen for the click, set up: html class to 'dark' or remove the class +
// set up color of the icons + set up localStorage

darkIcon.addEventListener('click', darkMode);
lightIcon.addEventListener('click', lightMode);
systemIcon.addEventListener('click', systemMode);

function darkMode() {
  lightIcon.classList.remove('text-cyan');
  systemIcon.classList.remove('text-cyan');
  darkIcon.classList.add('text-cyan');
  document.documentElement.classList.add('dark');
  localStorage.setItem('color-theme', 'dark');
  localStorage.removeItem('mode-system');
}
function lightMode() {
  darkIcon.classList.remove('text-cyan');
  systemIcon.classList.remove('text-cyan');
  lightIcon.classList.add('text-cyan');
  document.documentElement.classList.remove('dark');
  localStorage.setItem('color-theme', 'light');
  localStorage.removeItem('mode-system');
}
function systemMode() {
  lightIcon.classList.remove('text-cyan');
  darkIcon.classList.remove('text-cyan');
  systemIcon.classList.add('text-cyan');
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    localStorage.setItem('color-theme', 'dark');
    localStorage.setItem('mode-system', 'system');
    document.documentElement.classList.add('dark');
  } else {
    localStorage.setItem('color-theme', 'light');
    localStorage.setItem('mode-system', 'system');
    document.documentElement.classList.remove('dark');
  }
}
