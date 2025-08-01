import './fullpage.css'
import './index.css'
// some non essential css can be downladed dynamiclly here to speed up 
// loadong of the page
// when using Tailwind CSS, it's common to import the CSS file into your 
// JavaScript or TypeScript entry point. This ensures that Tailwind's utility 
// classes are available throughout your application. Here's why this is done:

import modes from "./dark-mode.js";
// import contactForm from "./contact-form.js";
import { addDate } from './date';
import mobileMenu from "./mobile-nav.js";
import renderProject from "./render-projects.js";
// import cursor from "./coursor-effect.js";


modes()
// contactForm()

// we can create a class instnace here but the whole class has to be exported from .date.js
// const date = new LocalDate()

// or we can just execute its method - that method has to have its 'this' bound plus need 
// to be exported on its own

document.addEventListener('DOMContentLoaded', () => {
    // Your code here
    addDate()
  });

mobileMenu()
renderProject()
// cursor()



// trying dynamic import on hover over contact form
const formData = document.querySelector('.form');

if (formData) {
  formData.addEventListener('mouseover', () => {
    console.log('ONMOUSE');
    // When you dynamically import a module in TypeScript, you don't need to specify the file extension (e.g., .ts or .js). The TypeScript compiler and the bundler (like Vite or Webpack) handle the resolution of the module based on the import path and the project's configuration.
    import('./contact-form').then((module) => {
      const contactForm = module.default;
      contactForm();
    }).catch((error) => {
      console.error('Error loading contact-form module:', error);
    });
  });
}

// When you use dynamic imports for code splitting, the dynamically 
// imported code is indeed not included in the initial bundle. Instead, 
// it is split into separate chunks that are only loaded when needed. 
// However, these chunks are still processed, optimized, and minimized 
// by Vite during the build process.

// How It Works:
// Build Process:

// During the build process, Vite analyzes your code and identifies 
// dynamic imports.
// Vite then creates separate chunks for these dynamically imported 
// modules.
// These chunks are optimized, minimized, and stored on the server 
// as separate files.
// Serving the Chunks:

// When the application runs and the dynamic import is triggered 
// (e.g., on hover), the browser makes a request to the server to 
// fetch the corresponding chunk.
// The server serves the optimized and minimized chunk to the browser.
// The browser then executes the code from the chunk.