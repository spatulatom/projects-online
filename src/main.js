import './fullpage.css'
import './index.css'

import modes from "./dark-mode.js";
import contactForm from "./contact-form.js";
import LocalDate from './date';
import mobileMenu from "./mobile-nav.js";
import renderProject from "./render-projects.js";


modes()
contactForm()
const date = new LocalDate()
mobileMenu()
renderProject()


// trying dynamic import on hover over contact form
// const formData = document.querySelector('.form');
// formData.addEventListener('mouseover', ()=>{
//     console.log('ONMOUSE')
//     import('./contact-form.js').then((module)=>{const form =module.formData;
//     form() })
//     // await contactForm()
// })