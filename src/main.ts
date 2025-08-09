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

// ...existing code...

// Modify the click event listener to specifically handle navigation links in the menu
// adding js for tab navigation so when we tab navigate to anchor section the navigation pick up 
// at that section and skipps everyting in between, by deafult browser tab order will not jump to anchor section after enter is pressed on tab nav
document.addEventListener("click", (event) => {
  const target = event.target as HTMLElement | null;
  if (target && target.tagName === "A") {
    const anchor = target as HTMLAnchorElement;
    
    // Check if this is a menu navigation link (from the #myMenu)
    const isMenuLink = anchor.closest("#myMenu") !== null || 
                       anchor.closest(".mobile-nav") !== null;
    
    if (anchor.hash) {
      // Get section ID from the hash (e.g., #secondPage -> secondPage)
      const sectionId = anchor.hash.substring(1);
      
      // For menu links, we need to find the actual section content
      if (isMenuLink) {
        // Wait for fullpage.js to complete its navigation
        setTimeout(() => {
          // Find the section
          const section = document.querySelector(`.section[data-anchor="${sectionId}"], #${sectionId}`);
          
          if (section) {
            // Find the first focusable element in the section
            const focusTarget = findFirstFocusableElement(section as HTMLElement) || section;
            
            // Make it focusable if it's not already
            if (!(focusTarget as HTMLElement).tabIndex) {
              (focusTarget as HTMLElement).setAttribute("tabindex", "-1");
            }
            
            // Set focus
            (focusTarget as HTMLElement).focus();
          }
        }, 600); // Longer timeout to ensure fullpage.js navigation completes
      } else {
        // Handle regular in-page links (not from the menu)
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          setTimeout(() => {
            targetElement.setAttribute("tabindex", "-1");
            (targetElement as HTMLElement).focus();
            targetElement.removeAttribute("tabindex");
          }, 300);
        }
      }
    }
  }
});

// Helper function to find the first focusable element
function findFirstFocusableElement(container: HTMLElement): HTMLElement | null {
  const focusableElements = container.querySelectorAll(
    'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
  );
  
  return focusableElements.length > 0 ? focusableElements[0] as HTMLElement : null;
}

// ...existing code...



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