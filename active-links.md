Question: im not sure how the active link styling is applied here and also how it actually changes when light/dark mode is toggled?


/* Styling for the active menu link */
#myMenu .active a {
  color: rgb(107 114 128); /* Light gray text */
  background-color: white; /* White background */
}

/* Dark mode styling for the active menu link */
.dark #myMenu .active a {
  color: hsl(260, 8%, 14%); /* Dark text */
  background-color: hsl(180, 66%, 49%); /* Cyan background */
}

2. How the Active Link Changes
The active link changes dynamically as you scroll through the sections. This is handled by FullPage.js, 
which automatically updates the active class on the corresponding <li> element in the navigation menu.
}
new fullpage("#fullpage", {
  anchors: ["firstPage", "secondPage", "fourthPage"], // Section anchors
  menu: "#myMenu", // Links the menu to FullPage.js
  navigation: true, // Enables navigation
});

The active class is dynamically added by FullPage.js to the <li> elements in the navigation menu (#myMenu) based on the currently visible section. 
However, this happens at runtime when the page is loaded and FullPage.js initializes. If you're inspecting the HTML source code directly (e.g., in your editor),
 you won't see the active class because it is not hardcoded—it is applied dynamically by JavaScript.

How to Verify the active Class
Open the Browser DevTools:

Right-click on your page in the browser and select Inspect.
Navigate to the Elements tab.
Scroll Through the Sections:

As you scroll through the sections of your page, FullPage.js will dynamically add the active class to the <li> element corresponding to the currently 
visible section.
Check the DOM:

Look at the <ul id="myMenu"> element in the DOM. You should see the active class being added to the <li> of the currently active section.
Why You Don't See It in the Editor
The active class is not part of the static HTML. It is added by FullPage.js during runtime based on the anchors configuration in your script.

new fullpage("#fullpage", {
  anchors: ["firstPage", "secondPage", "fourthPage"], // Section anchors
  menu: "#myMenu", // Links the menu to FullPage.js
});

The menu: "#myMenu" option links the navigation menu to the sections of the page.
FullPage.js uses the anchors array to determine which section corresponds to which menu item.
When a section becomes active, FullPage.js adds the active class to the corresponding <li> in the menu.
Debugging Tips
If the active class is not appearing at runtime:

Ensure that FullPage.js is correctly initialized (check for errors in the browser console).
Verify that the anchors array matches the data-menuanchor attributes in your <li> elements.
Confirm that the menu option points to the correct menu ID (#myMenu).