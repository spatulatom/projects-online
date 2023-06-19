

// class Date{
//     constructor(date){
//         this.date = new Date(new Date().setHours(new Date().getHours() - 24))
//         this.selector = document.querySelector(`.${date}`);
//     }
//     addDate(){
//         let localDate = new Intl.DateTimeFormat('en-GB', {
//             dateStyle: 'full',
//           }).format(this.date);
//           this.selector.innerHTML = localDate;
//     }
// }

// const date = new Date()
// document.addEventListener('DOMContentLoaded', date.addDate());
class LocalDate{
    constructor(date){
        this.date = new Date(new Date().setHours(new Date().getHours() - 24))
        this.selector = document.querySelector(`.${date}`);
    }
    addDate(){
        let localDate = new Intl.DateTimeFormat('en-GB', {
            dateStyle: 'full',
          }).format(this.date);
          this.selector.innerHTML = localDate;
    }
}

const date = new LocalDate()
document.addEventListener('DOMContentLoaded', date.addDate());