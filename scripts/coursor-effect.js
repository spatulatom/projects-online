let mouseCursor = document.querySelector('.cursor');

window.addEventListener('mousemove', cursor);

function cursor(e) {
  console.log('cursor');
  // if we console.log(e) we get MouseEvent, we will only
  // use pageY and pageX and this will give us exact position
  // where coordinate where our mouse position is
  //console.log(e.pageX, e.pageY);
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

// bigger cursor on hover over elements with class="bigger" (currently not in use)
// let biggers = document.querySelectorAll('.bigger');

biggers.forEach((bigger) => {
  bigger.addEventListener('mouseover', () => {
    mouseCursor.classList.add('cursor-grow');
  });
  bigger.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('cursor-grow');
  });
});

// cursor dissapearing on projects descriptions
let projects = document.querySelectorAll('.cursor-effect-none');

projects.forEach((project) => {
  project.addEventListener('mouseover', () => {
    mouseCursor.classList.add('none');
  });
  project.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('none');
  });
});

// cursor bigger on some content (currently not in use)
// let projectBoxes = document.querySelectorAll('.bigger--white');

projectBoxes.forEach((bigger) => {
  bigger.addEventListener('mouseover', () => {
    mouseCursor.classList.add('cursor-grow--white');
  });
  bigger.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('cursor-grow--white');
  });
});

// disposing of 'fancy' cursor when cursor on contact form (currently off)
// let cursorOnForm = document.querySelector('form');

cursorOnForm.addEventListener('mouseover', () => {
  mouseCursor.classList.add('none');
});

cursorOnForm.addEventListener('mouseleave', () => {
  mouseCursor.classList.remove('none');
});
