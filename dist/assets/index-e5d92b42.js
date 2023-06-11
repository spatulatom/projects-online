(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function c(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=c(t);fetch(t.href,a)}})();const u=document.getElementById("light"),g=document.getElementById("dark"),m=document.getElementById("system"),f=document.getElementById("light-mobile"),y=document.getElementById("dark-mobile"),l=document.getElementById("system-mobile"),o=document.querySelector(".dropdown");function i(){u.classList.remove("text-cyan"),g.classList.remove("text-cyan"),m.classList.remove("text-cyan"),f.classList.remove("text-cyan"),y.classList.remove("text-cyan"),l.classList.remove("text-cyan")}"color-theme"in localStorage?localStorage.getItem("color-theme")==="dark"||!("color-theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?"mode-system"in localStorage?(i(),m.classList.add("text-cyan"),o.innerHTML=`<i
      id="dark"
      class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
    ></i>`,l.classList.add("text-cyan")):(i(),g.classList.add("text-cyan"),o.innerHTML=`<i
      id="dark"
      class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
    ></i>`,y.classList.add("text-cyan")):"mode-system"in localStorage?(i(),m.classList.add("text-cyan"),o.innerHTML=`<i
      class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
    >
    </i>`,l.classList.add("text-cyan")):(i(),u.classList.add("text-darkViolet"),o.innerHTML=`<i
      class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
    >
    </i>`,f.classList.add("text-cyan")):(i(),m.classList.add("text-cyan"),l.classList.add("text-cyan"),window.matchMedia("(prefers-color-scheme: dark)").matches?(o.innerHTML=`<i
      id="dark"
      class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
    ></i>`,l.classList.add("text-cyan")):o.innerHTML=`<i
    class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
  >
  </i>`);window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:e})=>{i(),m.classList.add("text-cyan"),l.classList.add("text-cyan"),e?(localStorage.setItem("color-theme","dark"),localStorage.setItem("mode-system","system"),document.documentElement.classList.add("dark"),o.innerHTML=`<i
      id="dark"
      class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
    ></i>`,console.log("change to dark mode!")):(console.log("change to light mode!"),localStorage.setItem("color-theme","light"),localStorage.setItem("mode-system","system"),document.documentElement.classList.remove("dark"),o.innerHTML=`<i
      class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
    >
    </i>`)});g.addEventListener("click",v);u.addEventListener("click",w);m.addEventListener("click",k);y.addEventListener("click",v);f.addEventListener("click",w);l.addEventListener("click",k);function v(){i(),g.classList.add("text-cyan"),o.innerHTML=`<i
  id="dark"
  class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
></i>`,y.classList.add("text-cyan"),document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark"),localStorage.removeItem("mode-system")}function w(){i(),u.classList.add("text-cyan"),o.innerHTML=`<i
  class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
>
</i>`,f.classList.add("text-cyan"),document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light"),localStorage.removeItem("mode-system")}function k(){i(),m.classList.add("text-cyan"),l.classList.add("text-cyan"),window.matchMedia("(prefers-color-scheme: dark)").matches?(localStorage.setItem("color-theme","dark"),localStorage.setItem("mode-system","system"),document.documentElement.classList.add("dark"),o.innerHTML=`<i
    id="dark"
    class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
  ></i>`):(localStorage.setItem("color-theme","light"),localStorage.setItem("mode-system","system"),document.documentElement.classList.remove("dark"),o.innerHTML=`<i
    class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
  >
  </i>`)}const p=document.querySelector(".form"),d=document.querySelector(".form__feedback");function L(){const e=async s=>{s.preventDefault(),console.log("RESULTS",d);const c=new FormData(s.target),n={};if(c.forEach((t,a)=>{n[a]=t}),n.email!==n.email2)d.innerHTML="Your email adresses are not matching!",console.log(n,"object");else{delete n.email2;const t=JSON.stringify(n);console.log("json",t),d.innerHTML="Please wait...";try{const a=await fetch("https://my-portfolio-backend.onrender.com/contact-form",{method:"POST",headers:{"Content-Type":"application/json"},body:t});if(a.ok){const r=await a.json();console.log(r,"jsonResponse"),setTimeout(()=>{p.reset(),d.innerHTML=r.message},4e3),setTimeout(()=>{d.innerHTML="You will get a confirmation email from elkom9393@gmail.com (might be in the spam folder). Have a nice day! I will reply to you back soon!"},6e3)}else{const r=await a.json();console.log(r.message,"response"),d.innerHTML="Error occured while processing your form data, try again please!",p.reset()}}catch(a){console.log(a,"error"),d.innerHTML="Something went wrong with the external server, try again in a minute please!",p.reset()}}};p.addEventListener("submit",e)}const S=document.querySelector(".date");document.getElementById("body");function T(){function e(){console.log("loaded");let s=new Date(new Date().setHours(new Date().getHours()-24)),c=new Intl.DateTimeFormat("en-GB",{dateStyle:"full"}).format(s);S.innerHTML=c}document.addEventListener("DOMContentLoaded",e())}const j=document.getElementById("copyright-date"),I=new Date,M=I.getFullYear();j.innerText=M;let h=document.getElementById("menu-btn"),x=document.querySelector(".mobile-nav"),E=document.querySelectorAll(".mobile-nav__item a"),R=document.querySelectorAll(".icon"),b=document.querySelectorAll(".link");function H(){b.forEach(e=>{console.log(b,"mobilelinks"),e.addEventListener("click",()=>{document.querySelectorAll(".link.current")[0].classList.remove("current"),e.classList.add("current")})}),h.addEventListener("click",function(){h.classList.toggle("open"),x.classList.toggle("show")}),E.forEach(e=>{e.addEventListener("click",()=>{x.classList.remove("show"),h.classList.toggle("open")})}),R.forEach(e=>{e.addEventListener("click",()=>{x.classList.remove("show"),h.classList.toggle("open")})})}const D="/assets/next13beta-fcdc6258.png",P="/assets/search-853112c8.png",A="/assets/bookmark-bb3e3cf2.png",N="/assets/eb-788c729f.png",C="/assets/e-fashion3-4a11a5b4.png",B="/assets/td1-76dc4e83.png",$="/assets/todovanillajs-74be370a.png",O=[{a1:"https://testing-next-13-beta-typescript-tailwind-prisma.vercel.app/",img:`${D}`,h2:"'Chat Room' (Next.js 13 beta, TypeScript, Tailwind CSS, fullstack)",p:`'Chat Room' is a CRUD full-stack Next.js app that allows me to explore many of the new Next.js 13 beta features like a new file convention with the app directory (not pages directory), where all components are now server components by default. I leverage the power of async/await and the new fetch() API in these server components for Static Site Generation (SSG) and Server-Side Rendering (SSR). To handle data fetching, I have implemented specialized pages such as error.js and loading.js. For managing data mutations across the app, I use the router.refresh() method. For item deletions, I utilize React Query for comparison. On the backend, the app benefits from new route handlers, organized within a dedicated new app/api directory. <a class="hover:text-cyan" href="https://github.com/spatulatom/testing-next-13-beta-typescript-tailwind-prisma#readme">Read more >></a>`,h3:"Next.js 13 beta, Prisma, PostgreSQL, Tailwind CSS, React Query, React Hot Toast, TypeScript, NextAuth.js, Vercel",a2:"https://github.com/spatulatom/testing-next-13-beta-typescript-tailwind-prisma#readme",a3:"https://testing-next-13-beta-typescript-tailwind-prisma.vercel.app/"},{a1:"https://spa-one-view.vercel.app",img:`${P}`,h2:`'search item' (React Testing Library, Next.js, TypeScript,
      Tailwind CSS)'`,p:"A Single-Page Application (SPA) with just one view, which displays a paginated list of products. This project is built using Next.js with TypeScript, providing me with an opportunity to practice my skills with React Testing Library. During testing, I mock the APIs to replicate their behavior, allowing me to test the frontend effectively. The app includes a search bar that enables users to search and filter products based on their preferences. The pagination and filtering functionalities are reflected in the URL, allowing users to easily copy and paste the URL into another browser tab for later reference.",h3:" React Testing Library, Next.js, TypeScript, Context API, Tailwind CSS, Vercel",a2:"https://github.com/spatulatom/spa-one-view#readme",a3:"https://spa-one-view.vercel.app/"},{a1:"https://react-next-auth-ashy.vercel.app/",img:`${A}`,h2:"'bookmark a joke' (Next.js, Tailwind CSS, fullstack)",p:"Generate a joke and save it on your account. User login/create account interface. User account management options. It is a fullstack Next.js app with the backend located in the pages/api folder. Static Site Generation (SSG), Incremental Static Regeneration (ISG), and Server-Side Rendering (SSR) are in use. NextAuth.js is used for authentication and authorization (routes protection on the client and server side). MongoDB is used for data storage. React Context is used for 'global' state management. Tailwind CSS is used for styling.",h3:"Next.js, Tailwind CSS, NextAuth.js, MongoDB, Vercel",a2:"https://github.com/spatulatom/react-next-auth#readme",a3:"https://react-next-auth-ashy.vercel.app/"},{a1:"https://e-fashion-dc7d0.web.app/",img:`${C}`,h2:"'e-fashion' (MERN app)",p:"A fullstack app, an online clothing store with user authentication, sandbox PayPal payment, MongoDB, and Amazon Web Services used for storage. Page pagination. Filters to search for products; filters can be cross-referenced to narrow down the searches. Ratings and customer reviews. 'TOOLS' in the menu provides options for admin management of products, sales, and more. Redux is used for state management. All newly created users have admin access to all app's functionalities.",h3:"React.js, Redux, Node, Express.js, MongoDB, Uploadcare API, Firebase, and Render for deployment",a2:"https://github.com/spatulatom/e-store-redux-mern#readme-top",a3:"https://e-fashion-dc7d0.web.app/"},{a1:"https://eventsbook-91260.web.app/allevents",img:`${N}`,h2:"'eventsbook' (MERN app)",p:"A fullstack app, a social media platform where users can log in/create an account, upload photos/create posts (about upcoming social events), and add likes and comments. Users can also tag their event's location on the map thanks to the Google Maps Platform API or change their passwords with the use of the SendGrid API. User authentication with JWT token created on the backend, pictures, and data stored respectively on Amazon Web Services and MongoDB.",h3:"React.js, Node, Express.js, MongoDB, Cloudinary API, Firebase, and Render for deployment",a2:"https://github.com/spatulatom/frontend-eventsbook#readme-top",a3:"https://eventsbook-91260.web.app/allevents"},{a1:"https://spatulatom.github.io/todo-reactjs-redux/",img:`${B}`,h2:"a to-do list (React.js, Redux)",p:"This project is a to-do list built with React and Redux library. Tasks on the list can be marked as completed or they can be deleted. The list can be sorted as follows: it can display all tasks, only completed tasks, or only uncompleted tasks. Tasks are being saved in localStorage. Exploring the Redux library while building this app was great fun.",h3:"HTML, CSS, React.js, Redux",a2:"https://github.com/spatulatom/todo-reactjs-redux/tree/master#readme-top",a3:"https://spatulatom.github.io/todo-reactjs-redux/"},{a1:"https://spatulatom.github.io/todo-vanillajs/",img:`${$}`,h2:"a to-do list (Vanilla JavaScript)",p:"This project is a simple to-do list where todos can be created, marked as completed, or deleted. Besides a search bar, we have an option of displaying either all todos, completed todos, or uncompleted todos. Created todos are being saved in the browser's localStorage.",h3:"HTML, CSS, Vanilla JavaScript, GitHub Pages",a2:"https://github.com/spatulatom/todo-vanillajs",a3:"https://spatulatom.github.io/todo-vanillajs/"}],F=document.getElementById("projects");console.log("My arrayy");function G(){O.forEach(e=>{const s=document.createElement("div"),c=`<div class="slide flex justify-center items-center p-12">
  <!-- there is another div in here added by fullpage and has probably set
responsive width, the class on it is .fp-overflow-->
  <div
    class="flex container flex-col xl:flex-row lg:px-14 justify-center items-center m-auto"
  >
    <a
      aria-label="Read more"
      href=${e.a1}
      target="_blank"
      class="hidden xl:block basis-7/12 overflow-hidden shadow-2xl"
      rel="noopener"
    >
      <img
        class="hidden lg:block w-screen h-auto rounded-lg"
        src=${e.img}
        fetchpriority="low"
        loading="lazy"
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
         ${e.h2}
        </h2>
        <p
          title="Project's description"
          class="text-xs lg:text-sm text-gray-600 dark:text-gray-300 mb-2 text-justify"
        >
         ${e.p}
       
        </p>
        <h3
          title="Technologies used"
          class="text-darkViolet dark:text-cyan font-semibold text-right text-xs mb-3"
        >
       ${e.h3}
        </h3>
        <div class="tooltips flex justify-around lg:justify-end">
          <a
            aria-label="Read more"
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
            aria-label="Read more"
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
</div>`;s.innerHTML=c,console.log("DIV",s),F.appendChild(s)})}L();T();H();G();
