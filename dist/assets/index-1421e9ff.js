(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function l(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(a){if(a.ep)return;a.ep=!0;const t=l(a);fetch(a.href,t)}})();const M="modulepreload",R=function(e){return"/"+e},w={},A=function(s,l,o){if(!l||l.length===0)return s();const a=document.getElementsByTagName("link");return Promise.all(l.map(t=>{if(t=R(t),t in w)return;w[t]=!0;const n=t.endsWith(".css"),j=n?'[rel="stylesheet"]':"";if(!!o)for(let u=a.length-1;u>=0;u--){const h=a[u];if(h.href===t&&(!n||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${j}`))return;const d=document.createElement("link");if(d.rel=n?"stylesheet":M,n||(d.as="script",d.crossOrigin=""),d.href=t,document.head.appendChild(d),n)return new Promise((u,h)=>{d.addEventListener("load",u),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>s()).catch(t=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=t,window.dispatchEvent(n),!n.defaultPrevented)throw t})};const g=document.getElementById("light"),y=document.getElementById("dark"),m=document.getElementById("system"),x=document.getElementById("light-mobile"),v=document.getElementById("dark-mobile"),c=document.getElementById("system-mobile"),r=document.querySelector(".dropdown");function i(){g.classList.remove("text-cyan"),y.classList.remove("text-cyan"),m.classList.remove("text-cyan"),x.classList.remove("text-cyan"),v.classList.remove("text-cyan"),c.classList.remove("text-cyan")}"color-theme"in localStorage?localStorage.getItem("color-theme")==="dark"||!("color-theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?"mode-system"in localStorage?(i(),m.classList.add("text-cyan"),r.innerHTML=`<i
      id="dark"
      class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
    ></i>`,c.classList.add("text-cyan")):(i(),y.classList.add("text-cyan"),r.innerHTML=`<i
      id="dark"
      class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
    ></i>`,v.classList.add("text-cyan")):"mode-system"in localStorage?(i(),m.classList.add("text-cyan"),r.innerHTML=`<i
      class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
    >
    </i>`,c.classList.add("text-cyan")):(i(),g.classList.add("text-cyan"),r.innerHTML=`<i
      class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
    >
    </i>`,x.classList.add("text-cyan")):(i(),m.classList.add("text-cyan"),c.classList.add("text-cyan"),window.matchMedia("(prefers-color-scheme: dark)").matches?(r.innerHTML=`<i
      id="dark"
      class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
    ></i>`,c.classList.add("text-cyan")):r.innerHTML=`<i
    class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
  >
  </i>`);const D=window.matchMedia("(prefers-color-scheme: dark)");D.addEventListener("change",({matches:e})=>{console.log("EEEEEEVENTTTT listener triggered."),i(),m.classList.add("text-cyan"),c.classList.add("text-cyan"),e?(localStorage.setItem("color-theme","dark"),localStorage.setItem("mode-system","system"),document.documentElement.classList.add("dark"),r.innerHTML=`<i
      id="dark"
      class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
    ></i>`,console.log("change to dark mode!")):(console.log("change to light mode!"),localStorage.setItem("color-theme","light"),localStorage.setItem("mode-system","system"),document.documentElement.classList.remove("dark"),r.innerHTML=`<i
      class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
    >
    </i>`)});y.addEventListener("click",E);g.addEventListener("click",T);m.addEventListener("click",I);v.addEventListener("click",E);x.addEventListener("click",T);c.addEventListener("click",I);function E(){i(),y.classList.add("text-cyan"),r.innerHTML=`<i
  id="dark"
  class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
></i>`,v.classList.add("text-cyan"),document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark"),localStorage.removeItem("mode-system")}function T(){i(),g.classList.add("text-cyan"),r.innerHTML=`<i
  class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
>
</i>`,x.classList.add("text-cyan"),document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light"),localStorage.removeItem("mode-system")}function I(){i(),m.classList.add("text-cyan"),c.classList.add("text-cyan"),window.matchMedia("(prefers-color-scheme: dark)").matches?(localStorage.setItem("color-theme","dark"),localStorage.setItem("mode-system","system"),document.documentElement.classList.add("dark"),r.innerHTML=`<i
    id="dark"
    class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
  ></i>`):(localStorage.setItem("color-theme","light"),localStorage.setItem("mode-system","system"),document.documentElement.classList.remove("dark"),r.innerHTML=`<i
    class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
  >
  </i>`)}class P{constructor(){this.date=new Date(new Date().setHours(new Date().getHours()-24)),this.selector=document.querySelector(".date"),this.addDate=this.addDate.bind(this)}addDate(){let s=new Intl.DateTimeFormat("en-GB",{dateStyle:"full"}).format(this.date);this.selector?this.selector.innerHTML=s:console.error("Selector is null")}}const N=new P,C=N.addDate,L=document.getElementById("copyright-date"),B=new Date,H=B.getFullYear();L!==null&&(L.innerText=H.toString());let f=document.getElementById("menu-btn"),b=document.querySelector(".mobile-nav"),$=document.querySelectorAll(".mobile-nav__item a"),G=document.querySelectorAll(".icon"),k=document.querySelectorAll(".link");function O(){k.forEach(e=>{console.log(k,"mobilelinks"),e.addEventListener("click",()=>{document.querySelectorAll(".link.current")[0].classList.remove("current"),e.classList.add("current")})}),f.addEventListener("click",function(){f.classList.toggle("open"),b.classList.toggle("show")}),$.forEach(e=>{e.addEventListener("click",()=>{b.classList.remove("show"),f.classList.toggle("open")})}),G.forEach(e=>{e.addEventListener("click",()=>{b.classList.remove("show"),f.classList.toggle("open")})})}const q="/assets/next13beta-fcdc6258.png",_="/assets/search-853112c8.png",U="/assets/bookmark-bb3e3cf2.png",F="/assets/eb-788c729f.png",V="/assets/e-fashion3-4a11a5b4.png",z="/assets/td1-76dc4e83.png",W="/assets/todovanillajs-74be370a.png",Q=[{a1:"https://testing-next-13-beta-typescript-tailwind-prisma.vercel.app/",img:`${q}`,h2:"'Chat Room' (Next.js 13 beta, TypeScript, Tailwind CSS, fullstack)",p:`'Chat Room' is a CRUD full-stack Next.js app that allows me to explore many of the new Next.js 13 beta features like a new file convention with the app directory (not pages directory), where all components are now server components by default. I leverage the power of async/await and the new fetch() API in these server components for Static Site Generation (SSG) and Server-Side Rendering (SSR). To handle data fetching, I have implemented specialized pages such as error.js and loading.js. For managing data mutations across the app, I use the router.refresh() method. For item deletions, I utilize React Query for comparison. On the backend, the app benefits from new route handlers, organized within a dedicated new app/api directory. <a class="hover:text-cyan" href="https://github.com/spatulatom/testing-next-13-beta-typescript-tailwind-prisma#readme">Read more >></a>`,h3:"Next.js 13 beta, Prisma, PostgreSQL, Tailwind CSS, React Query, React Hot Toast, TypeScript, NextAuth.js, Vercel",a2:"https://github.com/spatulatom/testing-next-13-beta-typescript-tailwind-prisma#readme",a3:"https://testing-next-13-beta-typescript-tailwind-prisma.vercel.app/"},{a1:"https://spa-one-view.vercel.app",img:`${_}`,h2:`'search item' (React Testing Library, Next.js, TypeScript,
      Tailwind CSS)`,p:"A Single-Page Application (SPA) with just one view, which displays a paginated list of products. This project is built using Next.js with TypeScript, providing me with an opportunity to practice my skills with React Testing Library. During testing, I mock the APIs to replicate their behavior, allowing me to test the frontend effectively. The app includes a search bar that enables users to search and filter products based on their preferences. The pagination and filtering functionalities are reflected in the URL, allowing users to easily copy and paste the URL into another browser tab for later reference.",h3:" React Testing Library, Next.js, TypeScript, Context API, Tailwind CSS, Vercel",a2:"https://github.com/spatulatom/spa-one-view#readme",a3:"https://spa-one-view.vercel.app/"},{a1:"https://react-next-auth-ashy.vercel.app/",img:`${U}`,h2:"'bookmark a joke' (Next.js, Tailwind CSS, fullstack)",p:"Generate a joke and save it on your account. User login/create account interface. User account management options. It is a fullstack Next.js app with the backend located in the pages/api folder. Static Site Generation (SSG), Incremental Static Regeneration (ISG), and Server-Side Rendering (SSR) are in use. NextAuth.js is used for authentication and authorization (routes protection on the client and server side). MongoDB is used for data storage. React Context is used for 'global' state management. Tailwind CSS is used for styling.",h3:"Next.js, Tailwind CSS, NextAuth.js, MongoDB, Vercel",a2:"https://github.com/spatulatom/react-next-auth#readme",a3:"https://react-next-auth-ashy.vercel.app/"},{a1:"https://e-fashion-dc7d0.web.app/",img:`${V}`,h2:"'e-fashion' (MERN app)",p:"A fullstack app, an online clothing store with user authentication, sandbox PayPal payment, MongoDB, and Amazon Web Services used for storage. Page pagination. Filters to search for products; filters can be cross-referenced to narrow down the searches. Ratings and customer reviews. 'TOOLS' in the menu provides options for admin management of products, sales, and more. Redux is used for state management. All newly created users have admin access to all app's functionalities.",h3:"React.js, Redux, Node.js, Express.js, MongoDB, Uploadcare API, Firebase and render.com for deployment",a2:"https://github.com/spatulatom/e-store-redux-mern#readme-top",a3:"https://e-fashion-dc7d0.web.app/"},{a1:"https://eventsbook-91260.web.app/allevents",img:`${F}`,h2:"'eventsbook' (MERN app)",p:"A fullstack app, a social media platform where users can log in/create an account, upload photos/create posts (about upcoming social events), and add likes and comments. Users can also tag their event's location on the map thanks to the Google Maps Platform API or change their passwords with the use of the SendGrid API. User authentication with JWT token created on the backend, pictures, and data stored respectively on Amazon Web Services and MongoDB.",h3:"React.js, Node.js, Express.js, MongoDB, Cloudinary API, Firebase and render.com for deployment",a2:"https://github.com/spatulatom/frontend-eventsbook#readme-top",a3:"https://eventsbook-91260.web.app/allevents"},{a1:"https://spatulatom.github.io/todo-reactjs-redux/",img:`${z}`,h2:"a to-do list (React.js, Redux)",p:"This project is a to-do list built with React and Redux library. Tasks on the list can be marked as completed or they can be deleted. The list can be sorted as follows: it can display all tasks, only completed tasks, or only uncompleted tasks. Tasks are being saved in localStorage. Exploring the Redux library while building this app was great fun.",h3:"HTML, CSS, React.js, Redux",a2:"https://github.com/spatulatom/todo-reactjs-redux/tree/master#readme-top",a3:"https://spatulatom.github.io/todo-reactjs-redux/"},{a1:"https://spatulatom.github.io/todo-vanillajs/",img:`${W}`,h2:"a to-do list (Vanilla JavaScript)",p:"This project is a simple to-do list where todos can be created, marked as completed, or deleted. Besides a search bar, we have an option of displaying either all todos, completed todos, or uncompleted todos. Created todos are being saved in the browser's localStorage.",h3:"HTML, CSS, Vanilla JavaScript, GitHub Pages",a2:"https://github.com/spatulatom/todo-vanillajs",a3:"https://spatulatom.github.io/todo-vanillajs/"}],J=document.getElementById("projects");function Y(){Q.forEach(e=>{const s=document.createElement("div"),l=`<div class="slide flex justify-center items-center p-12">
  <!-- there is another div in here added by fullpage and has probably set
responsive width, the class on it is .fp-overflow-->
  <div
    class="flex container flex-col xl:flex-row lg:px-14 justify-center items-center"
  >
    <a
      aria-label="Go to the deployed app"
      href=${e.a1}
      target="_blank"
      class="hidden xl:block basis-7/12 overflow-hidden shadow-2xl dark:border-t-2 dark:border-b-2"
      rel="noopener"
    >
      <img
        class="hidden lg:block w-screen h-auto"
        src=${e.img}
        fetchpriority="low"
        loading="lazy"
        width="500"
        height="300"
        alt="screenshot of the project"
      />
    </a>

    <div
      class="xl:basis-5/12 w-full flex items-center relative overflow-visible "
    >
      <!-- this wrapper div below is needed for the positioning of text over image -->
      <div
        class="shadow-2xl p-6 w-[120%] dark:opacity-100 bg-white dark:bg-veryDarkBlue xl:absolute right-0 border-t-2 border-b-2 border-grayishViolet dark:border-white z-10"
      >
        <h2
          class="text-gray-700  dark:text-white text-center mb-1 uppercase"
        >
         ${e.h2}
        </h2>
        <p
          class="text-xs lg:text-sm text-gray-600 dark:text-gray-300 mb-2 text-justify"
        >
         ${e.p}
       
        </p>
        <h3
          class="text-darkViolet dark:text-cyan font-semibold text-right text-xs mb-3"
        >
       ${e.h3}
        </h3>
        <div class="tooltips flex justify-around lg:justify-end">
          <a
            aria-label="Go to the GitHub repository"
            href="${e.a2}"
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
            aria-label="Go to the deployed website"
            href="${e.a3}"
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
</div>`;s.innerHTML=l,J.appendChild(s)})}let p=document.querySelector(".cursor");function K(){window.addEventListener("mousemove",e);function e(o){p.style.top=o.pageY+"px",p.style.left=o.pageX+"px"}document.querySelectorAll(".cursor-none").forEach(o=>{o.addEventListener("mouseover",()=>{p.classList.add("cursor-effect-none")}),o.addEventListener("mouseleave",()=>{p.classList.remove("cursor-effect-none")})}),document.querySelectorAll(".bigger").forEach(o=>{o.addEventListener("mouseover",()=>{p.classList.add("cursor-grow")}),o.addEventListener("mouseleave",()=>{p.classList.remove("cursor-grow")})})}document.addEventListener("DOMContentLoaded",()=>{C()});O();Y();K();const S=document.querySelector(".form");S&&S.addEventListener("mouseover",()=>{console.log("ONMOUSE"),A(()=>import("./contact-form-693c97a9.js"),[]).then(e=>{const s=e.default;s()}).catch(e=>{console.error("Error loading contact-form module:",e)})});
