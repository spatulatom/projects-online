// "use strict" 
//   // because this is a module, I'm strict by default


let toggleButton = document.getElementById('menu-btn');
let mobileNav = document.querySelector('.mobile-nav');
let mobileNavItems = document.querySelectorAll('.mobile-nav__item a');
let themeIcons = document.querySelectorAll('.icon');

let mobileLinks = document.querySelectorAll('.link');





export default function mobileMenu() {
  // ADDING STYLING TO CLICKED LINK
  // remove class 'current' from link that has it (this class is
  // styled differently) and add that class to te link that has just bee clicked
  mobileLinks.forEach((link) => {
    console.log(mobileLinks, 'mobilelinks');
    link.addEventListener('click', () => {
      // items have to be queried from inside teh function every click
      // if the queried outsied of the function styling is not removed
      let items = document.querySelectorAll('.link.current');

      items[0].classList.remove('current');

      link.classList.add('current');
    });
  });

  // CHANGING HAMBURGER ICON STYLING DEPENDING ON A CLICK ON IT + SHOWING MOBILE MENU
  toggleButton.addEventListener('click', function () {
    toggleButton.classList.toggle('open');
    mobileNav.classList.toggle('show');
  });

  // CHANGING HAMBURGER ICON STYLING + CLOSING MENU UPON CLICKING ON NAV LINKS
  mobileNavItems.forEach((item) => {
    item.addEventListener('click', () => {
      mobileNav.classList.remove('show');
      toggleButton.classList.toggle('open');
    });
  });

  // CHANGING HAMBURGER ICON STYLING + CLOSING MOBILE MENU UPON CLICKING ON DARK/WHITE MODE ICONS
  themeIcons.forEach((item) => {
    item.addEventListener('click', () => {
      mobileNav.classList.remove('show');
      toggleButton.classList.toggle('open');
    });
  });
}
