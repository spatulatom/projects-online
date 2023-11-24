
import cursorEffect from "./coursor-effect";

describe('cursorEffect', () => {

    // The '.cursor' element does not exist in the DOM.
    it('should not add event listeners if \'.cursor\' element does not exist', () => {
      const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
      cursorEffect();
      expect(addEventListenerSpy).not.toHaveBeenCalled();
    });

    // The '.cursor' element does not have the 'top' and 'left' CSS properties.
    it('should not update cursor position if \'.cursor\' element does not have \'top\' and \'left\' CSS properties', () => {
      const mouseCursor = document.createElement('div');
      mouseCursor.classList.add('cursor');
      document.body.appendChild(mouseCursor);
      const event = new MouseEvent('mousemove', {
        pageX: 100,
        pageY: 200
      });
      cursorEffect();
      window.dispatchEvent(event);
      expect(mouseCursor.style.top).toBe('');
      expect(mouseCursor.style.left).toBe('');
    });

    // The 'projects' and 'biggers' variables are empty arrays.
    it('should not add event listeners if \'projects\' and \'biggers\' variables are empty arrays', () => {
      const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
      cursorEffect();
      expect(addEventListenerSpy).not.toHaveBeenCalled();
    });

    // The function adds event listeners to elements with class 'bigger' to apply the 'cursor-grow' class on mouseover and remove it on mouseleave.
    it('should add event listeners to elements with class \'bigger\'', () => {
      const mouseCursor = document.createElement('div');
      mouseCursor.classList.add('cursor');
      document.body.appendChild(mouseCursor);
      const bigger = document.createElement('div');
      bigger.classList.add('bigger');
      document.body.appendChild(bigger);
      cursorEffect();
      const mouseoverEvent = new MouseEvent('mouseover');
      const mouseleaveEvent = new MouseEvent('mouseleave');
      bigger.dispatchEvent(mouseoverEvent);
      expect(mouseCursor.classList.contains('cursor-grow')).toBe(true);
      bigger.dispatchEvent(mouseleaveEvent);
      expect(mouseCursor.classList.contains('cursor-grow')).toBe(false);
    });
});


   