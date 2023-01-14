let mouseCursor = document.querySelector('.cursor');

// LOGIC BEHIND THE FOLLOWING CURSOR RING:
// if we console.log(e) we get MouseEvent, we will see
// pageY and pageX and this will give us exact position
// where coordinate where our mouse position is
//console.log(e.pageX, e.pageY);
function cursor(e) {
  console.log('cursor');
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

// disposing of cursor effect when cursor on contact form
let cursorOnForm = document.querySelector('form');

cursorOnForm.addEventListener('mouseover', () => {
  mouseCursor.classList.add('none');
});

cursorOnForm.addEventListener('mouseleave', () => {
  mouseCursor.classList.remove('none');
});
