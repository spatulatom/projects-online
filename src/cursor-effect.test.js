import cursorEffect from './coursor-effect';

describe('cursorEffect', () => {
  // The function adds an event listener to the window object for mousemove events.
  it('should add event listener to window object for mousemove events', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
    cursorEffect();
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'mousemove',
      expect.any(Function)
    );
  });

  // The function adds event listeners to elements with class 'cursor-effect-none' to hide the cursor on mouseover and show it again on mouseleave.
  it("should add event listeners to elements with class 'cursor-effect-none'", () => {
    const addEventListenerSpy = jest.spyOn(
      Element.prototype,
      'addEventListener'
    );
    const mouseCursor = document.createElement('div');
    document.querySelector = jest.fn().mockReturnValue(mouseCursor);
    const projects = [
      document.createElement('div'),
      document.createElement('div'),
    ];
    document.querySelectorAll = jest.fn().mockReturnValue(projects);
    cursorEffect();
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'mouseover',
      expect.any(Function)
    );
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'mouseleave',
      expect.any(Function)
    );
  });

  // The mouseCursor element is not found in the DOM, causing an error.
  it('should handle mouseCursor element not found in the DOM', () => {
    document.querySelector = jest.fn().mockReturnValue(null);
    expect(() => cursorEffect()).not.toThrow();
  });

  // The projects and biggers NodeList is empty, causing an error.
  it('should handle empty projects and biggers NodeList', () => {
    document.querySelectorAll = jest.fn().mockReturnValue([]);
    expect(() => cursorEffect()).not.toThrow();
  });

  // The mouseCursor element is not visible or has opacity set to 0, causing the cursor to be invisible.
  it('should handle invisible mouseCursor element', () => {
    const mouseCursor = document.createElement('div');
    mouseCursor.style = { opacity: 0 };
    document.querySelector = jest.fn().mockReturnValue(mouseCursor);
    expect(() => cursorEffect()).not.toThrow();
  });
});
