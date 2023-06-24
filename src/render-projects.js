// above: https://laravel.com/docs/9.x/vite#working-with-blade-and-routes
// "When referencing assets in your JavaScript or CSS, Vite automatically processes
// and versions them. In addition, when building Blade based applications, Vite
// can also process and version static assets that you reference solely in Blade
// templates.

// However, in order to accomplish this, you need to make Vite aware of your
// assets by importing the static assets into the application's entry point.
// For example, if you want to process and version all images stored in
// resources/images and all fonts stored in resources/fonts, you should add the
// following in your application's resources/js/app.js entry point:"
// 1. yet static assets refrenced in html dont have to be imported into entry point -
// becuse html is an entry point (we can define in configs more entry points)
// check buttom form comments
// 2. even though this file is rendering html we have to treat it as js file and its
// assets have to be imported into an entry point. I suppose if they are imported here
// is fine since this file is imported into main.js which is imported into html in
// a script tag
// 3. I looks like we can import the files one by one with this syntax:
// import eb from '../images/eb.png'
// or  use this syntax:
// const modules = import.meta.glob([
// '../images/**',
// '../fonts/**',
// '../dist/assets/**',
// ]);
// 4. When it comes to absolute vs relative paths used in img scr attributte it looks
// like it dosent matter but just in case its better to use absolute paths when app
// deployed and server confg changes and all those cases

import { myArray } from './products-array';

const container = document.getElementById('projects');
console.log('My arrayy');
export default function renderProject() {
  myArray.forEach((obj) => {
    // Create a temporary container element
    const tempContainer = document.createElement('div');

    // Create the div structure using template literals
    const div = `<div class="slide flex justify-center items-center p-12">
  <!-- there is another div in here added by fullpage and has probably set
responsive width, the class on it is .fp-overflow-->
  <div
    class="flex container flex-col xl:flex-row lg:px-14 justify-center items-center m-auto"
  >
    <a
      aria-label="Read more"
      href=${obj.a1}
      target="_blank"
      class="hidden xl:block basis-7/12 overflow-hidden shadow-2xl"
      rel="noopener"
    >
      <img
        class="hidden lg:block w-screen h-auto rounded-lg"
        src=${obj.img}
        fetchpriority="low"
        
        width="500"
        height="300"
        alt="screenshot of the project"
      />
    </a>

    <div
      class="xl:basis-5/12 w-full flex items-center relative overflow-visible"
    >
      <!-- this wrapper div below is needed for the positioning of text over image -->
      <div
        class="p-6 w-[120%] dark:opacity-100 bg-white dark:bg-veryDarkBlue xl:absolute right-0 border-t-2 border-b-2 border-grayishViolet dark:border-white z-10"
      >
        <h2
          title="Project's title"
          class="text-darkViolet dark:text-cyan text-center mb-1 font-bold uppercase"
        >
         ${obj.h2}
        </h2>
        <p
          title="Project's description"
          class="text-xs lg:text-sm text-gray-600 dark:text-gray-300 mb-2 text-justify"
        >
         ${obj.p}
       
        </p>
        <h3
          title="Technologies used"
          class="text-darkViolet dark:text-cyan font-semibold text-right text-xs mb-3"
        >
       ${obj.h3}
        </h3>
        <div class="tooltips flex justify-around lg:justify-end">
          <a
            aria-label="Read more"
            href="${obj.a2}"
            target="_blank"
            class="tooltip"
            rel="noopener"
          >
            <span
              ><i
                class="fab fa-github fa-xl text-gray-500 dark:text-white"
              ></i
            ></span>
            <span class="tooltiptext">On GitHub</span>
          </a>
          <a
            aria-label="Read more"
            href="${obj.a3}"
            target="_blank"
            class="tooltip"
            rel="noopener"
          >
            <span
              ><i
                class="fa-solid fa-eye fa-xl text-gray-500 dark:text-white"
              ></i
            ></span>
            <span class="tooltiptext">Deployed Website</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>`;

    // Set the HTML content of the temporary container
    tempContainer.innerHTML = div;

    // Extract the first child element (the div) from the temporary container

    console.log('DIV', tempContainer);
    // Append the div element to the container
    container.appendChild(tempContainer);
  });
}

// By adding "type": "module" to your package.json file,
//  you're indicating that your project supports ECMAScript
//  modules. This allows you to use the import and export
//  syntax in your JavaScript files. And that myArray could be imported

// After making this change, you should be able to use the
// import/export syntax without needing the .mjs file extension.

// BUT IT DOSENT WORK , YOU NEED WEBPACK OR BUNDLE FOT IT TO WORK.
// ALSO NOT WORKING WITH data.json JSON DOSENT FOR THE SAME REASON (YOU COULD FETCH IT
// you could fetch your data json without webpack bundle but it still dosent work:
// Fetch the JSON file
// fetch('data.json')
//   .then(response => response.json())
//   .then(data => {
//     // Get the container element
//     const container = document.getElementById('container');

//     // Iterate over the data array and create HTML elements
//     data.forEach(item => {
//       // Create a new paragraph element
//       const p = document.createElement('p');

//       // Set the text content of the paragraph
//       p.textContent = `a1: ${item.a1}, h2: ${item.h2}`;

//       // Append the paragraph to the container
//       container.appendChild(p);
//     });
//   })
//   .catch(error => {
//     console.error('Error fetching JSON:', error);
//   });
// ) - BUT IT STILL DOSEN WORK
// so
