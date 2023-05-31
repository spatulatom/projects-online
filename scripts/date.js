// const date = document.querySelector('.date');
// const body = document.getElementById('body');

// const addDate = () => {
//   console.log('loaded');
//   let newDate = new Date(new Date().setHours(new Date().getHours() - 24));
//   localDate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(
//     newDate
//   );
//   date.innerHTML = localDate;
// };
// body.addEventListener('load', addDate());

// chatGPT SUGGESTIONS:

const date = document.querySelector('.date');
const body = document.getElementById('body');

function addDate() {
  console.log('loaded');
  let newDate = new Date(new Date().setHours(new Date().getHours() - 24));
  let localDate = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
  }).format(newDate);
  date.innerHTML = localDate;
}

document.addEventListener('DOMContentLoaded', addDate());

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
