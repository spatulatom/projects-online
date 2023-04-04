const date = document.querySelector('.date');
const body = document.getElementById('body');

const addDate = () => {
  console.log('loaded');
  let newDate = new Date(new Date().setHours(new Date().getHours() - 24));
  localDate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(
    newDate
  );
  date.innerHTML = localDate;
};
body.addEventListener('load', addDate());
