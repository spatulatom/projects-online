'use strict';
// module i think by default in strict mode

// OOP programming:
 class LocalDate {
  // Date and HTMLElement are globally availabe types
  date: Date;
  selector: HTMLElement;
  constructor() {
    this.date = new Date(new Date().setHours(new Date().getHours() - 24));
    this.selector = document.querySelector(`.date`) as HTMLElement;
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




// ts version: 
const element: HTMLElement | null = document.getElementById('copyright-date');

const currentDate: Date = new Date();

const year: number = currentDate.getFullYear();

if (element !== null) {
  element.innerText = year.toString();
}
