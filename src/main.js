import './fullpage.css'
import './index.css'
// some non essential css can be downladed dynamiclly here to speed up loadong of the page

import modes from "./dark-mode.js";
import contactForm from "./contact-form.js";
import LocalDate from './date';
import mobileMenu from "./mobile-nav.js";
import renderProject from "./render-projects.js";
import cursor from './coursor-effect';


modes()
contactForm()
const date = new LocalDate()
mobileMenu()
renderProject()
cursor()


// trying dynamic import on hover over contact form
// const formData = document.querySelector('.form');
// formData.addEventListener('mouseover', ()=>{
//     console.log('ONMOUSE')
//     import('./contact-form.js').then((module)=>{const form =module.formData;
//     form() })
//     // await contactForm()
// })