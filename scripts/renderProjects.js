console.log('HEREE')
// import myArray from './projectsData.js'


const myArray = [
    {
        a1: 'https://testing-next-13-beta-typescript-tailwind-prisma.vercel.app/',
        img: 'imgs/next13beta.png',
        h2: `'Chat Room' (Next.js 13 beta, TypeScript, Tailwind CSS, fullstack)`,
        p: `'Chat Room' is a CRUD full-stack Next.js app that allows me to explore many of the new Next.js 13 beta features like a new file convention with the app directory (not pages directory), where all components are now server components by default. I leverage the power of async/await and the new fetch() API in these server components for Static Site Generation (SSG) and Server-Side Rendering (SSR). To handle data fetching, I have implemented specialized pages such as error.js and loading.js. For managing data mutations across the app, I use the router.refresh() method. For item deletions, I utilize React Query for comparison. On the backend, the app benefits from new route handlers, organized within a dedicated new app/api directory. [Read more...](https://github.com/spatulatom/testing-next-13-beta-typescript-tailwind-prisma#readme)`,
        h3: `Next.js 13 beta, Prisma, PostgreSQL, Tailwind CSS, React Query, React Hot Toast, TypeScript, NextAuth.js, Vercel`,
        a2: 'https://github.com/spatulatom/testing-next-13-beta-typescript-tailwind-prisma#readme',
        a3: 'https://testing-next-13-beta-typescript-tailwind-prisma.vercel.app/'
      },
    
    {
      a1: 'https://spa-one-view.vercel.app',
      img: 'imgs/search.png',
      h2: `'search item' (React Testing Library, Next.js, TypeScript,
      Tailwind CSS)'`,
      p: 'A Single-Page Application (SPA) with just one view, which displays a paginated list of products. This project is built using Next.js with TypeScript, providing me with an opportunity to practice my skills with React Testing Library. During testing, I mock the APIs to replicate their behavior, allowing me to test the frontend effectively. The app includes a search bar that enables users to search and filter products based on their preferences. The pagination and filtering functionalities are reflected in the URL, allowing users to easily copy and paste the URL into another browser tab for later reference.',
      h3: ' React Testing Library, Next.js, TypeScript, Context API, Tailwind CSS, Vercel',
      a2: 'https://github.com/spatulatom/spa-one-view#readme',
      a3: 'https://spa-one-view.vercel.app/'
    }, 
  
    {
      a1: 'https://react-next-auth-ashy.vercel.app/',
      img: 'imgs/bookmark.png',
      h2: "'bookmark a joke' (Next.js, Tailwind CSS, fullstack)",
      p: "Generate a joke and save it on your account. User login/create account interface. User account management options. It is a fullstack Next.js app with the backend located in the pages/api folder. Static Site Generation (SSG), Incremental Static Regeneration (ISG), and Server-Side Rendering (SSR) are in use. NextAuth.js is used for authentication and authorization (routes protection on the client and server side). MongoDB is used for data storage. React Context is used for 'global' state management. Tailwind CSS is used for styling.",
      h3: "Next.js, Tailwind CSS, NextAuth.js, MongoDB, Vercel",
      a2: "https://github.com/spatulatom/react-next-auth#readme",
      a3: "https://react-next-auth-ashy.vercel.app/"
    },
    {
      a1: 'https://e-fashion-dc7d0.web.app/',
      img: 'imgs/e-fashion3.png',
      h2: "'e-fashion' (MERN app)",
      p: "A fullstack app, an online clothing store with user authentication, sandbox PayPal payment, MongoDB, and Amazon Web Services used for storage. Page pagination. Filters to search for products; filters can be cross-referenced to narrow down the searches. Ratings and customer reviews. 'TOOLS' in the menu provides options for admin management of products, sales, and more. Redux is used for state management. All newly created users have admin access to all app's functionalities.",
      h3: "React.js, Redux, Node, Express.js, MongoDB, Uploadcare API, Firebase, and Render for deployment",
      a2: "https://github.com/spatulatom/e-store-redux-mern#readme-top",
      a3: "https://e-fashion-dc7d0.web.app/"
    },
    {
      a1: 'https://eventsbook-91260.web.app/allevents',
      img: 'imgs/eb.png',
      h2: "'eventsbook' (MERN app)",
      p: "A fullstack app, a social media platform where users can log in/create an account, upload photos/create posts (about upcoming social events), and add likes and comments. Users can also tag their event's location on the map thanks to the Google Maps Platform API or change their passwords with the use of the SendGrid API. User authentication with JWT token created on the backend, pictures, and data stored respectively on Amazon Web Services and MongoDB.",
      h3: "React.js, Node, Express.js, MongoDB, Cloudinary API, Firebase, and Render for deployment",
      a2: "https://github.com/spatulatom/frontend-eventsbook#readme-top",
      a3: "https://eventsbook-91260.web.app/allevents"
    },
    {
      a1: 'https://spatulatom.github.io/todo-reactjs-redux/',
      img: 'imgs/td1.png',
      h2: 'a to-do list (React.js, Redux)',
      p: 'This project is a to-do list built with React and Redux library. Tasks on the list can be marked as completed or they can be deleted. The list can be sorted as follows: it can display all tasks, only completed tasks, or only uncompleted tasks. Tasks are being saved in localStorage. Exploring the Redux library while building this app was great fun.',
      h3: 'HTML, CSS, React.js, Redux',
      a2: 'https://github.com/spatulatom/todo-reactjs-redux/tree/master#readme-top',
      a3: 'https://spatulatom.github.io/todo-reactjs-redux/'
    },
    {
      a1: 'https://spatulatom.github.io/todo-vanillajs/',
      img: 'imgs/todovanillajs.png',
      h2: 'a to-do list (Vanilla JavaScript)',
      p: 'This project is a simple to-do list where todos can be created, marked as completed, or deleted. Besides a search bar, we have an option of displaying either all todos, completed todos, or uncompleted todos. Created todos are being saved in the browser\'s localStorage.',
      h3: 'HTML, CSS, Vanilla JavaScript, GitHub Pages',
      a2: 'https://github.com/spatulatom/todo-vanillajs',
      a3: 'https://spatulatom.github.io/todo-vanillajs/'
    }
  ];


const container = document.getElementById('pro');
console.log('My arrayy')
myArray.forEach(obj => {
    console.log('My array')
  // Create a temporary container element
  const tempContainer = document.createElement('div');

  // Create the div structure using template literals
  const div = `
    <div class=" my-4">
      <h2 class="text-white">${obj.h2}</h2>
      <p>${obj.p}</p>
    </div>
  `;
  const h2Element = document.createElement('h2');
  h2Element.classList.add('text-white');
  h2Element.textContent = obj.h2;

  // Set the HTML content of the temporary container
  tempContainer.innerHTML = div;

  // Extract the first child element (the div) from the temporary container
  
console.log('DIV', tempContainer)
  // Append the div element to the container
  container.appendChild(tempContainer);
});