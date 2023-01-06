document.getElementById('toggle').addEventListener('change', function (e) {
  console.log('E', e.currentTarget.checked);
  if (this.checked) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
});
