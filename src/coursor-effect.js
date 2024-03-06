let mouseCursor = document.querySelector('.cursor');

function cursorEffect(){

window.addEventListener('mousemove', cursor);

 function cursor(e) {
  // console.log('cursor');
  // if we console.log(e) we get MouseEvent, we will only
  // use pageY and pageX and this will give us exact position
  // where coordinate where our mouse position is
  //console.log(e.pageX, e.pageY);
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

// cursor dissapearing on projects descriptions
let projects = document.querySelectorAll('.cursor-none');
projects.forEach((project) => {
  project.addEventListener('mouseover', () => {
    mouseCursor.classList.add('cursor-effect-none');
  });
  project.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('cursor-effect-none');
  });
});

// bigger cursor + filters on hover over elements with class="bigger" (currently not in use)
let biggers = document.querySelectorAll('.bigger');

biggers.forEach((bigger) => {
  bigger.addEventListener('mouseover', () => {
    mouseCursor.classList.add('cursor-grow');
  });
  bigger.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('cursor-grow');
  });
});

// cursor bigger on some content (currently not in use)
// let projectBoxes = document.querySelectorAll('.bigger--white');

// projectBoxes.forEach((bigger) => {
//   bigger.addEventListener('mouseover', () => {
//     mouseCursor.classList.add('cursor-grow--white');
//   });
//   bigger.addEventListener('mouseleave', () => {
//     mouseCursor.classList.remove('cursor-grow--white');
//   });
// });
}
export default cursorEffect;