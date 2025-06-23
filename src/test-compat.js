console.log("Testing browser compatibility with older browser targets");

// APIs that should be flagged with our restrictive browserslist:

// 1. fetch API (not supported in IE 11, old Chrome/Firefox)
fetch("/api/data").then((response) => response.json());

// 2. Promise methods (limited support in older browsers)
Promise.resolve().finally(() => console.log("finally"));
Promise.allSettled([Promise.resolve(1), Promise.reject(2)]);

// 3. Array methods (newer)
const array = [1, 2, 3];
array.includes(2); // Not in IE 11
array.find((x) => x > 1); // Limited support

// 4. String methods (newer)
const str = "hello world";
str.startsWith("hello"); // Not in IE 11
str.endsWith("world"); // Not in IE 11
str.repeat(3); // Not in IE 11

// 5. Object methods (newer)
Object.assign({}, { a: 1 }); // Not in IE 11
Object.values({ a: 1, b: 2 }); // Not in old browsers
Object.entries({ a: 1, b: 2 }); // Not in old browsers

// 6. Modern DOM APIs
if (document.querySelector) {
  document.querySelector(".test"); // Should be fine
}

// 7. CSS APIs (newer)
if (window.CSS && CSS.supports) {
  CSS.supports("display", "grid"); // Not in older browsers
}

// 8. Web APIs (modern)
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(() => {}); // Limited in old browsers
}
