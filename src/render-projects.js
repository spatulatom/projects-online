// above: https://laravel.com/docs/9.x/vite#working-with-blade-and-routes
// "When referencing assets in your JavaScript or CSS, Vite automatically processes 
// and versions them. In addition, when building Blade based applications, Vite 
// can also process and version static assets that you reference solely in Blade 
// templates.

// However, in order to accomplish this, you need to make Vite aware of your 
// assets by importing the static assets into the application's entry point. 
// For example, if you want to process and version all images stored in 
// resources/images and all fonts stored in resources/fonts, you should add the 
// following in your application's resources/js/app.js entry point:"
// 1. yet static assets refrenced in html dont have to be imported into entry point -
// becuse html is an entry point (we can define in configs more entry points)
// check buttom form comments
// 2. even though this file is rendering html we have to treat it as js file and its
// assets have to be imported into an entry point. I suppose if they are imported here
// is fine since this file is imported into main.js which is imported into html in
// a script tag
// 3. I looks like we can import the files one by one with this syntax: 
// import eb from '../images/eb.png'
// or  use this syntax: 
// const modules = import.meta.glob([
  // '../images/**',
  // '../fonts/**',
  // '../dist/assets/**',
// ]);
// 4. When it comes to absolute vs relative paths used in img scr attributte it looks 
// like it dosent matter but just in case its better to use absolute paths when app 
// deployed and server confg changes and all those cases


import next13 from '../images/next13beta.png'
import search from '../images/search.png'
import bookmark from '../images/bookmark.png'
import eb from '../images/eb.png'
import efashion from '../images/e-fashion3.png'
import td1 from '../images/td1.png'
import tdvanilla from '../images/todovanillajs.png'



const myArray = [
  {
    a1: 'https://testing-next-13-beta-typescript-tailwind-prisma.vercel.app/',
    img: `${next13}`,
    h2: `'Chat Room' (Next.js 13 beta, TypeScript, Tailwind CSS, fullstack)`,
    p: `'Chat Room' is a CRUD full-stack Next.js app that allows me to explore many of the new Next.js 13 beta features like a new file convention with the app directory (not pages directory), where all components are now server components by default. I leverage the power of async/await and the new fetch() API in these server components for Static Site Generation (SSG) and Server-Side Rendering (SSR). To handle data fetching, I have implemented specialized pages such as error.js and loading.js. For managing data mutations across the app, I use the router.refresh() method. For item deletions, I utilize React Query for comparison. On the backend, the app benefits from new route handlers, organized within a dedicated new app/api directory. <a class="hover:text-cyan" href="https://github.com/spatulatom/testing-next-13-beta-typescript-tailwind-prisma#readme">Read more >></a>`,
    h3: `Next.js 13 beta, Prisma, PostgreSQL, Tailwind CSS, React Query, React Hot Toast, TypeScript, NextAuth.js, Vercel`,
    a2: 'https://github.com/spatulatom/testing-next-13-beta-typescript-tailwind-prisma#readme',
    a3: 'https://testing-next-13-beta-typescript-tailwind-prisma.vercel.app/',
  },
  {
    a1: 'https://spa-one-view.vercel.app',
    img: `${search}`,
    h2: `'search item' (React Testing Library, Next.js, TypeScript,
      Tailwind CSS)'`,
    p: 'A Single-Page Application (SPA) with just one view, which displays a paginated list of products. This project is built using Next.js with TypeScript, providing me with an opportunity to practice my skills with React Testing Library. During testing, I mock the APIs to replicate their behavior, allowing me to test the frontend effectively. The app includes a search bar that enables users to search and filter products based on their preferences. The pagination and filtering functionalities are reflected in the URL, allowing users to easily copy and paste the URL into another browser tab for later reference.',
    h3: ' React Testing Library, Next.js, TypeScript, Context API, Tailwind CSS, Vercel',
    a2: 'https://github.com/spatulatom/spa-one-view#readme',
    a3: 'https://spa-one-view.vercel.app/',
  },

  {
    a1: 'https://react-next-auth-ashy.vercel.app/',
    img: `${bookmark}`,
    h2: "'bookmark a joke' (Next.js, Tailwind CSS, fullstack)",
    p: "Generate a joke and save it on your account. User login/create account interface. User account management options. It is a fullstack Next.js app with the backend located in the pages/api folder. Static Site Generation (SSG), Incremental Static Regeneration (ISG), and Server-Side Rendering (SSR) are in use. NextAuth.js is used for authentication and authorization (routes protection on the client and server side). MongoDB is used for data storage. React Context is used for 'global' state management. Tailwind CSS is used for styling.",
    h3: 'Next.js, Tailwind CSS, NextAuth.js, MongoDB, Vercel',
    a2: 'https://github.com/spatulatom/react-next-auth#readme',
    a3: 'https://react-next-auth-ashy.vercel.app/',
  },
  {
    a1: 'https://e-fashion-dc7d0.web.app/',
    img: `${efashion}`,
    h2: "'e-fashion' (MERN app)",
    p: "A fullstack app, an online clothing store with user authentication, sandbox PayPal payment, MongoDB, and Amazon Web Services used for storage. Page pagination. Filters to search for products; filters can be cross-referenced to narrow down the searches. Ratings and customer reviews. 'TOOLS' in the menu provides options for admin management of products, sales, and more. Redux is used for state management. All newly created users have admin access to all app's functionalities.",
    h3: 'React.js, Redux, Node, Express.js, MongoDB, Uploadcare API, Firebase, and Render for deployment',
    a2: 'https://github.com/spatulatom/e-store-redux-mern#readme-top',
    a3: 'https://e-fashion-dc7d0.web.app/',
  },
  {
    a1: 'https://eventsbook-91260.web.app/allevents',
    img: `${eb}`,
    h2: "'eventsbook' (MERN app)",
    p: "A fullstack app, a social media platform where users can log in/create an account, upload photos/create posts (about upcoming social events), and add likes and comments. Users can also tag their event's location on the map thanks to the Google Maps Platform API or change their passwords with the use of the SendGrid API. User authentication with JWT token created on the backend, pictures, and data stored respectively on Amazon Web Services and MongoDB.",
    h3: 'React.js, Node, Express.js, MongoDB, Cloudinary API, Firebase, and Render for deployment',
    a2: 'https://github.com/spatulatom/frontend-eventsbook#readme-top',
    a3: 'https://eventsbook-91260.web.app/allevents',
  },
  {
    a1: 'https://spatulatom.github.io/todo-reactjs-redux/',
    img: `${td1}`,
    h2: 'a to-do list (React.js, Redux)',
    p: 'This project is a to-do list built with React and Redux library. Tasks on the list can be marked as completed or they can be deleted. The list can be sorted as follows: it can display all tasks, only completed tasks, or only uncompleted tasks. Tasks are being saved in localStorage. Exploring the Redux library while building this app was great fun.',
    h3: 'HTML, CSS, React.js, Redux',
    a2: 'https://github.com/spatulatom/todo-reactjs-redux/tree/master#readme-top',
    a3: 'https://spatulatom.github.io/todo-reactjs-redux/',
  },
  {
    a1: 'https://spatulatom.github.io/todo-vanillajs/',
    img: `${tdvanilla}`,
    h2: 'a to-do list (Vanilla JavaScript)',
    p: "This project is a simple to-do list where todos can be created, marked as completed, or deleted. Besides a search bar, we have an option of displaying either all todos, completed todos, or uncompleted todos. Created todos are being saved in the browser's localStorage.",
    h3: 'HTML, CSS, Vanilla JavaScript, GitHub Pages',
    a2: 'https://github.com/spatulatom/todo-vanillajs',
    a3: 'https://spatulatom.github.io/todo-vanillajs/',
  },
];



const container = document.getElementById('projects');
console.log('My arrayy');
export default function renderProject(){
myArray.forEach((obj) => {

  // Create a temporary container element
  const tempContainer = document.createElement('div');

  // Create the div structure using template literals
  const div = `<div class="slide flex justify-center items-center p-12">
  <!-- there is another div in here added by fullpage and has probably set
responsive width, the class on it is .fp-overflow-->
  <div
    class="flex container flex-col xl:flex-row lg:px-14 justify-center items-center m-auto"
  >
    <a
      aria-label="Read more"
      href=${obj.a1}
      target="_blank"
      class="hidden xl:block basis-7/12 overflow-hidden shadow-2xl"
      rel="noopener"
    >
      <img
        class="hidden lg:block w-screen h-auto rounded-lg"
        src=${obj.img}
  

        width="500"
        height="300"
        alt="screenshot of the project"
      />
    </a>

    <div
      class="xl:basis-5/12 w-full flex items-center relative overflow-visible"
    >
      <!-- this wrapper div below is needed for the positioning of text over image -->
      <div
        class="p-6 w-[120%] dark:opacity-100 bg-white dark:bg-veryDarkBlue xl:absolute right-0 border-t-2 border-b-2 border-grayishViolet dark:border-white z-10"
      >
        <h2
          title="Project's title"
          class="text-darkViolet dark:text-cyan text-center mb-1 font-bold uppercase"
        >
         ${obj.h2}
        </h2>
        <p
          title="Project's description"
          class="text-xs lg:text-sm text-gray-600 dark:text-gray-300 mb-2 text-justify"
        >
         ${obj.p}
       
        </p>
        <h3
          title="Technologies used"
          class="text-darkViolet dark:text-cyan font-semibold text-right text-xs mb-3"
        >
       ${obj.h3}
        </h3>
        <div class="tooltips flex justify-around lg:justify-end">
          <a
            aria-label="Read more"
            href="${obj.a2}"
            target="_blank"
            class="tooltip"
            rel="noopener"
          >
            <span
              ><i
                class="fab fa-github fa-xl text-gray-500 dark:text-white"
              ></i
            ></span>
            <span class="tooltiptext">On GitHub</span>
          </a>
          <a
            aria-label="Read more"
            href="${obj.a3}"
            target="_blank"
            class="tooltip"
            rel="noopener"
          >
            <span
              ><i
                class="fa-solid fa-eye fa-xl text-gray-500 dark:text-white"
              ></i
            ></span>
            <span class="tooltiptext">Deployed Website</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>`;

  // Set the HTML content of the temporary container
  tempContainer.innerHTML = div;

  // Extract the first child element (the div) from the temporary container

  console.log('DIV', tempContainer);
  // Append the div element to the container
  container.appendChild(tempContainer);
});}

// By adding "type": "module" to your package.json file,
//  you're indicating that your project supports ECMAScript
//  modules. This allows you to use the import and export
//  syntax in your JavaScript files. And that myArray could be imported

// After making this change, you should be able to use the
// import/export syntax without needing the .mjs file extension.

// BUT IT DOSENT WORK , YOU NEED WEBPACK OR BUNDLE FOT IT TO WORK.
// ALSO NOT WORKING WITH data.json JSON DOSENT FOR THE SAME REASON (YOU COULD FETCH IT
// you could fetch your data json without webpack bundle but it still dosent work:
// Fetch the JSON file
// fetch('data.json')
//   .then(response => response.json())
//   .then(data => {
//     // Get the container element
//     const container = document.getElementById('container');

//     // Iterate over the data array and create HTML elements
//     data.forEach(item => {
//       // Create a new paragraph element
//       const p = document.createElement('p');

//       // Set the text content of the paragraph
//       p.textContent = `a1: ${item.a1}, h2: ${item.h2}`;

//       // Append the paragraph to the container
//       container.appendChild(p);
//     });
//   })
//   .catch(error => {
//     console.error('Error fetching JSON:', error);
//   });
// ) - BUT IT STILL DOSEN WORK
// so
