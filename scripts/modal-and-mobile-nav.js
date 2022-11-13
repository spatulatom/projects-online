// let whiteMode = document.querySelector('.white-mode');
// let s1 = document.querySelector('.s1');
// let s2 = document.querySelector('.s2');
// let s3 = document.querySelector('.s3');

// whiteMode.addEventListener('click', function () {
//   let item = document.querySelector('.white');
//   console.log('item', s1, s3);
//   if (item !== null) {
//     let whites = document.querySelectorAll('.white');
//     console.log(whites, 'whites');
//     whites.forEach((link) => {
//       link.classList.remove('white');
//     });

//     console.log('nnndddnn');
//   } else {
//     whiteMode.classList.add('white');
//     s1.classList.add('white');
//     s2.classList.add('white');
//     s3.classList.add('white');
//   }

// });

let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
let mobileNavItems = document.querySelectorAll('.mobile-nav__item a');
let backdrop = document.querySelector('.backdrop');

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
    if (items.length) {
      items[0].classList.remove('current');
    }

    link.classList.add('current');
  });
});

// logic for mobile nav:
toggleButton.addEventListener('click', function () {
  let item = document.querySelector('.open');
  console.log('item', item);
  if (item !== null) {
    console.log('nnnnn');
    mobileNav.classList.remove('open');
    console.log('nnndddnn');
  } else {
    mobileNav.classList.add('open');
  }
});

mobileNavItems.forEach((item) => {
  item.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  });
});
