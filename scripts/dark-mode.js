document.getElementById('toggle').addEventListener('change', function (e) {
  console.log('E', e.currentTarget.checked);
  if (this.checked &&  window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
});
document.getElementById('fullpage').addEventListener('click', function (e) {
  console.log('E', e.currentTarget.checked);
  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
});
