let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav-links li');

window.addEventListener('mousemove', cursor);

navLinks.forEach((link) => {
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add('link-grow');
    link.classList.add('hovered-link');
  });
  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('link-grow');
    link.classList.remove('hovered-link');
  });
});

function cursor(e) {
  console.log('cursor');
  // if we console.log(e) we get MouseEvent, we will only
  // use pageY and pageX and this will give us exact position
  // where coordinate where our mouse position is
  //console.log(e.pageX, e.pageY);
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

// bigger cursor on hover over elements with class="bigger"
let biggers = document.querySelectorAll('.bigger');

biggers.forEach((bigger) => {
  bigger.addEventListener('mouseover', () => {
    mouseCursor.classList.add('cursor-grow');
  });
  bigger.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('cursor-grow');
  });
});

let projectBoxes = document.querySelectorAll('.bigger--white');

projectBoxes.forEach((bigger) => {
  bigger.addEventListener('mouseover', () => {
    mouseCursor.classList.add('cursor-grow--white');
  });
  bigger.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('cursor-grow--white');
  });
});

// disposing of 'fancy' cursor when cursor on modals
let cursorOnModal = document.querySelectorAll('.modal');

cursorOnModal.forEach((noDisplay) =>
  noDisplay.addEventListener('mouseover', () => {
    mouseCursor.classList.add('none');
  })
);

cursorOnModal.forEach((noDisplay) =>
  noDisplay.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('none');
  })
);

// disposing of 'fancy' cursor when cursor on contact form
let cursorOnForm = document.querySelector('form');

cursorOnForm.addEventListener('mouseover', () => {
    mouseCursor.classList.add('none');
  })


cursorOnForm.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('none');
  })

