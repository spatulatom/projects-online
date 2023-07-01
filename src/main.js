import './fullpage.css'
import './index.css'
// some non essential css can be downladed dynamiclly here to speed up loadong of the page

import modes from "./dark-mode.js";
import contactForm from "./contact-form.js";
import { addDate } from './date';
import mobileMenu from "./mobile-nav.js";
import renderProject from "./render-projects.js";
import cursor from './coursor-effect';


modes()
contactForm()
// we can create a class instnace here but the whole class has to be exported from .date.js
// const date = new LocalDate()

// or we can just execute its method - that method has to have its 'this' bound plus need 
// to be exported on its own
console.log('ADD DATEEEEE', addDate())
addDate
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