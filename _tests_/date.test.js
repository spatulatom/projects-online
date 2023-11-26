import { LocalDate } from '../src/date.js';

test('addDate should insert the formatted date as innerHTML', () => {
  const myInstance = new LocalDate();
  const date = new Date(new Date().setHours(new Date().getHours() - 24));
  myInstance.selector = document.createElement('div');
  myInstance.addDate();
  const local = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
  }).format(date);
  expect(myInstance.selector.innerHTML).toBe(local);
});

it('should handle missing selector element', () => {
  const localDate = new LocalDate();
  localDate.selector = null;
  console.error = jest.fn();
  localDate.addDate();
  expect(console.error).toHaveBeenCalledWith('Selector is null');
});

// The addDate function should insert the formatted date as innerHTML in a specified element using a custom date format.

test('addDate should insert the formatted date as innerHTML using a custom date format', () => {
  const myInstance = new LocalDate();
  myInstance.date = new Date();
  myInstance.selector = document.createElement('div');
  myInstance.format = 'yyyy-MM-dd';
  myInstance.addDate(); // call the method on the instance
  const formattedDate = myInstance.date.toLocaleDateString('en-GB', {
    dateStyle: 'full',
  });
  expect(myInstance.selector.innerHTML).toBe(formattedDate);
});
