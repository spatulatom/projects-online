import modes from "./dark-mode.js";
import contactForm from "./contact-form.js";

modes()
contactForm()

// trying dynamic import on hover over contact form
// const formData = document.querySelector('.form');
// formData.addEventListener('mouseover', ()=>{
//     console.log('ONMOUSE')
//     import('./contact-form.js').then((module)=>{const form =module.formData;
//     form() })
//     // await contactForm()
// })