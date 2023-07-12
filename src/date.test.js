import { addDate } from "./date";

import (addDate)

test('addDate should insert the formatted date as innerHTML', () => {
    const myInstance = new MyClass();
    myInstance.date = new Date();
    myInstance.selector = document.createElement('div');
    addDate();
    const local = new Intl.DateTimeFormat('en-GB', {
      dateStyle: 'full',
    }).format(myInstance.date);
    expect(myInstance.selector.innerHTML).toBe(local);
  });