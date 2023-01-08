let toggleButton = document.getElementById('menu-btn');
let mobileNav = document.querySelector('.mobile-nav');
let mobileNavItems = document.querySelectorAll('.mobile-nav__item a');


let mobileLinks = document.querySelectorAll('.link');

//  so basically click eventlisteners are added to all links
// then when link is clicked first we check for ANY
// link that has 'current' class and we remove that class,
// secondly we add 'current' class to link that has been clicked
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

// logic for mobile nav:
// toggleButton.addEventListener('click', function () {
//   let item = document.querySelector('.open');
//   console.log('item', item);
//   if (item !== null) {
//     console.log('nnnnn');
//     mobileNav.classList.remove('open');
//     console.log('nnndddnn');
//   } else {
//     mobileNav.classList.add('open');
//   }
// });

toggleButton.addEventListener('click', function () {
  toggleButton.classList.toggle('open')
  mobileNav.classList.toggle('show');
  
});

mobileNavItems.forEach((item) => {
  item.addEventListener('click', () => {
    mobileNav.classList.remove('show');
    toggleButton.classList.toggle('open')
  });
});
