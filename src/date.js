'use strict';
// module i think by default in strict mode

// OOP programming:
 class LocalDate {
  constructor() {
    this.date = new Date(new Date().setHours(new Date().getHours() - 24));
    this.selector = document.querySelector(`.date`);
    // one option:
    // document.addEventListener('DOMContentLoaded', this.addDate.bind(this));

    // another one - we are executing our method as in our constructor
    // this.addDate()

    // third one - we are not going to export this whole class only this method so we need 
    // to bind 'this' keyword so so it keeps reference to this execution contex
    this.addDate = this.addDate.bind(this)
  }

  addDate() {
    let local = new Intl.DateTimeFormat('en-GB', {
      dateStyle: 'full',
    }).format(this.date);
    this.selector.innerHTML = local;
  }
}
 // const date = new LocalDate()
 const localDateInstance = new LocalDate();
 export const addDate = localDateInstance.addDate;


// PREVOIUS CODE IN FUNCTIONAL PROGRAMMING:

// const date = document.querySelector('.date');
// const body = document.getElementById('body');
// export default function dates(){
// function addDate() {
//   console.log('loaded');
//   let newDate = new Date(new Date().setHours(new Date().getHours() - 24));
//   let localDate = new Intl.DateTimeFormat('en-GB', {
//     dateStyle: 'full',
//   }).format(newDate);
//   date.innerHTML = localDate;
// }

// document.addEventListener('DOMContentLoaded', addDate());}

// const date = new LocalDate();
// console.log('DATEEEEE')
//  document.addEventListener('DOMContentLoaded', date.addDate);

// Apologies for the confusion. You are correct; the `load` event does not typically apply to the `body` element.

// It's more commonly used with elements like images, scripts, or iframes.

// To achieve the desired outcome, you can either use the `DOMContentLoaded`
// event or place the script at the end of the HTML file,
//  just before the closing `</body>` tag. This ensures that the JavaScript
// code runs after the DOM has been fully loaded.

// Here's an example using the `DOMContentLoaded` event:

// ```javascript
// document.addEventListener('DOMContentLoaded', () => {
//   addDate();
// });
// ```

// By using `DOMContentLoaded`, the `addDate` function will be executed when the
// initial HTML document has been completely loaded and parsed.

// Alternatively, you can move the `<script>` tag containing the
// JavaScript code to the end of the HTML file:

// ```html
// <!DOCTYPE html>
// <html>
// <head>
//   <!-- Head content -->
// </head>
// <body>
//   <!-- Body content -->

//   <script>
//     const date = document.querySelector('.date');
//     const addDate = () => {
//       console.log('loaded');
//       const newDate = new Date(new Date().setHours(new Date().getHours() - 24));
//       const localDate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(newDate);
//       date.innerHTML = localDate;
//     };
//     addDate();
//   </script>
// </body>
// </html>
// ```

// Moving the script to the end ensures that the DOM elements are a
// vailable for manipulation when the code is executed.

// COPYRIGHT DATE IN THE FOOTER:

const element = document.getElementById('copyright-date');

const currentDate = new Date();

const year = currentDate.getFullYear();

element.innerText = year;
