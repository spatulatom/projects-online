(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function m(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=m(t);fetch(t.href,a)}})();const g=document.getElementById("light"),f=document.getElementById("dark"),d=document.getElementById("system"),y=document.getElementById("light-mobile"),b=document.getElementById("dark-mobile"),l=document.getElementById("system-mobile"),n=document.querySelector(".dropdown");function r(){g.classList.remove("text-cyan"),f.classList.remove("text-cyan"),d.classList.remove("text-cyan"),y.classList.remove("text-cyan"),b.classList.remove("text-cyan"),l.classList.remove("text-cyan")}"color-theme"in localStorage?localStorage.getItem("color-theme")==="dark"||!("color-theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?"mode-system"in localStorage?(r(),d.classList.add("text-cyan"),n.innerHTML=`<i
      id="dark"
      class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
    ></i>`,l.classList.add("text-cyan")):(r(),f.classList.add("text-cyan"),n.innerHTML=`<i
      id="dark"
      class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
    ></i>`,b.classList.add("text-cyan")):"mode-system"in localStorage?(r(),d.classList.add("text-cyan"),n.innerHTML=`<i
      class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
    >
    </i>`,l.classList.add("text-cyan")):(r(),g.classList.add("text-cyan"),n.innerHTML=`<i
      class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
    >
    </i>`,y.classList.add("text-cyan")):(r(),d.classList.add("text-cyan"),l.classList.add("text-cyan"),window.matchMedia("(prefers-color-scheme: dark)").matches?(n.innerHTML=`<i
      id="dark"
      class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
    ></i>`,l.classList.add("text-cyan")):n.innerHTML=`<i
    class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
  >
  </i>`);const T=window.matchMedia("(prefers-color-scheme: dark)");T.addEventListener("change",({matches:e})=>{console.log("EEEEEEVENTTTT listener triggered."),r(),d.classList.add("text-cyan"),l.classList.add("text-cyan"),e?(localStorage.setItem("color-theme","dark"),localStorage.setItem("mode-system","system"),document.documentElement.classList.add("dark"),n.innerHTML=`<i
      id="dark"
      class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
    ></i>`,console.log("change to dark mode!")):(console.log("change to light mode!"),localStorage.setItem("color-theme","light"),localStorage.setItem("mode-system","system"),document.documentElement.classList.remove("dark"),n.innerHTML=`<i
      class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
    >
    </i>`)});f.addEventListener("click",L);g.addEventListener("click",S);d.addEventListener("click",k);b.addEventListener("click",L);y.addEventListener("click",S);l.addEventListener("click",k);function L(){r(),f.classList.add("text-cyan"),n.innerHTML=`<i
  id="dark"
  class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
></i>`,b.classList.add("text-cyan"),document.documentElement.classList.add("dark"),localStorage.setItem("color-theme","dark"),localStorage.removeItem("mode-system")}function S(){r(),g.classList.add("text-cyan"),n.innerHTML=`<i
  class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
>
</i>`,y.classList.add("text-cyan"),document.documentElement.classList.remove("dark"),localStorage.setItem("color-theme","light"),localStorage.removeItem("mode-system")}function k(){r(),d.classList.add("text-cyan"),l.classList.add("text-cyan"),window.matchMedia("(prefers-color-scheme: dark)").matches?(localStorage.setItem("color-theme","dark"),localStorage.setItem("mode-system","system"),document.documentElement.classList.add("dark"),n.innerHTML=`<i
    id="dark"
    class="fa-solid fa-moon fa-xl cursor-pointer transition-all text-cyan"
  ></i>`):(localStorage.setItem("color-theme","light"),localStorage.setItem("mode-system","system"),document.documentElement.classList.remove("dark"),n.innerHTML=`<i
    class="fa-solid fa-sun fa-xl cursor-pointer text-cyan"
  >
  </i>`)}const h=document.querySelector(".form"),c=document.querySelector(".form__feedback");function E(){const e=async o=>{o.preventDefault(),console.log("RESULTS",c);const m=new FormData(o.target),s={};if(m.forEach((t,a)=>{s[a]=t}),s.email!==s.email2)c.innerHTML="Your email adresses are not matching!",console.log(s,"object");else{delete s.email2;const t=JSON.stringify(s);console.log("json",t),c.innerHTML="Please wait...";try{const a=await fetch("https://my-portfolio-backend.onrender.com/contact-form",{method:"POST",headers:{"Content-Type":"application/json"},body:t});if(a.ok){const i=await a.json();console.log(i,"jsonResponse"),setTimeout(()=>{h.reset(),c.innerHTML=i.message},4e3),setTimeout(()=>{c.innerHTML="You will get an confirmation email from tom.sypula@gmail.com (it might be in the spam folder). I will reply back to you within 24h. Thank you and have a nice day!"},6e3)}else{const i=await a.json();console.log(i.message,"response"),c.innerHTML="Error occured while processing your form data, try again please!",h.reset()}}catch(a){console.log(a,"error"),c.innerHTML="Something went wrong with the external server, try again in a minute please!",h.reset()}}};h.addEventListener("submit",e)}class j{constructor(){this.date=new Date(new Date().setHours(new Date().getHours()-24)),this.selector=document.querySelector(".date"),this.addDate=this.addDate.bind(this)}addDate(){let o=new Intl.DateTimeFormat("en-GB",{dateStyle:"full"}).format(this.date);this.selector.innerHTML=o}}const I=new j,M=I.addDate,v=document.getElementById("copyright-date"),R=new Date,D=R.getFullYear();v!==null&&(v.innerText=D.toString());let u=document.getElementById("menu-btn"),x=document.querySelector(".mobile-nav"),H=document.querySelectorAll(".mobile-nav__item a"),A=document.querySelectorAll(".icon"),w=document.querySelectorAll(".link");function N(){w.forEach(e=>{console.log(w,"mobilelinks"),e.addEventListener("click",()=>{document.querySelectorAll(".link.current")[0].classList.remove("current"),e.classList.add("current")})}),u.addEventListener("click",function(){u.classList.toggle("open"),x.classList.toggle("show")}),H.forEach(e=>{e.addEventListener("click",()=>{x.classList.remove("show"),u.classList.toggle("open")})}),A.forEach(e=>{e.addEventListener("click",()=>{x.classList.remove("show"),u.classList.toggle("open")})})}const P="/assets/next13beta-fcdc6258.png",C="/assets/search-853112c8.png",B="/assets/bookmark-bb3e3cf2.png",$="/assets/eb-788c729f.png",q="/assets/e-fashion3-4a11a5b4.png",O="/assets/td1-76dc4e83.png",F="/assets/todovanillajs-74be370a.png",G=[{a1:"https://testing-next-13-beta-typescript-tailwind-prisma.vercel.app/",img:`${P}`,h2:"'Chat Room' (Next.js 13 beta, TypeScript, Tailwind CSS, fullstack)",p:`'Chat Room' is a CRUD full-stack Next.js app that allows me to explore many of the new Next.js 13 beta features like a new file convention with the app directory (not pages directory), where all components are now server components by default. I leverage the power of async/await and the new fetch() API in these server components for Static Site Generation (SSG) and Server-Side Rendering (SSR). To handle data fetching, I have implemented specialized pages such as error.js and loading.js. For managing data mutations across the app, I use the router.refresh() method. For item deletions, I utilize React Query for comparison. On the backend, the app benefits from new route handlers, organized within a dedicated new app/api directory. <a class="hover:text-cyan" href="https://github.com/spatulatom/testing-next-13-beta-typescript-tailwind-prisma#readme">Read more >></a>`,h3:"Next.js 13 beta, Prisma, PostgreSQL, Tailwind CSS, React Query, React Hot Toast, TypeScript, NextAuth.js, Vercel",a2:"https://github.com/spatulatom/testing-next-13-beta-typescript-tailwind-prisma#readme",a3:"https://testing-next-13-beta-typescript-tailwind-prisma.vercel.app/"},{a1:"https://spa-one-view.vercel.app",img:`${C}`,h2:`'search item' (React Testing Library, Next.js, TypeScript,
      Tailwind CSS)`,p:"A Single-Page Application (SPA) with just one view, which displays a paginated list of products. This project is built using Next.js with TypeScript, providing me with an opportunity to practice my skills with React Testing Library. During testing, I mock the APIs to replicate their behavior, allowing me to test the frontend effectively. The app includes a search bar that enables users to search and filter products based on their preferences. The pagination and filtering functionalities are reflected in the URL, allowing users to easily copy and paste the URL into another browser tab for later reference.",h3:" React Testing Library, Next.js, TypeScript, Context API, Tailwind CSS, Vercel",a2:"https://github.com/spatulatom/spa-one-view#readme",a3:"https://spa-one-view.vercel.app/"},{a1:"https://react-next-auth-ashy.vercel.app/",img:`${B}`,h2:"'bookmark a joke' (Next.js, Tailwind CSS, fullstack)",p:"Generate a joke and save it on your account. User login/create account interface. User account management options. It is a fullstack Next.js app with the backend located in the pages/api folder. Static Site Generation (SSG), Incremental Static Regeneration (ISG), and Server-Side Rendering (SSR) are in use. NextAuth.js is used for authentication and authorization (routes protection on the client and server side). MongoDB is used for data storage. React Context is used for 'global' state management. Tailwind CSS is used for styling.",h3:"Next.js, Tailwind CSS, NextAuth.js, MongoDB, Vercel",a2:"https://github.com/spatulatom/react-next-auth#readme",a3:"https://react-next-auth-ashy.vercel.app/"},{a1:"https://e-fashion-dc7d0.web.app/",img:`${q}`,h2:"'e-fashion' (MERN app)",p:"A fullstack app, an online clothing store with user authentication, sandbox PayPal payment, MongoDB, and Amazon Web Services used for storage. Page pagination. Filters to search for products; filters can be cross-referenced to narrow down the searches. Ratings and customer reviews. 'TOOLS' in the menu provides options for admin management of products, sales, and more. Redux is used for state management. All newly created users have admin access to all app's functionalities.",h3:"React.js, Redux, Node.js, Express.js, MongoDB, Uploadcare API, Firebase and render.com for deployment",a2:"https://github.com/spatulatom/e-store-redux-mern#readme-top",a3:"https://e-fashion-dc7d0.web.app/"},{a1:"https://eventsbook-91260.web.app/allevents",img:`${$}`,h2:"'eventsbook' (MERN app)",p:"A fullstack app, a social media platform where users can log in/create an account, upload photos/create posts (about upcoming social events), and add likes and comments. Users can also tag their event's location on the map thanks to the Google Maps Platform API or change their passwords with the use of the SendGrid API. User authentication with JWT token created on the backend, pictures, and data stored respectively on Amazon Web Services and MongoDB.",h3:"React.js, Node.js, Express.js, MongoDB, Cloudinary API, Firebase and render.com for deployment",a2:"https://github.com/spatulatom/frontend-eventsbook#readme-top",a3:"https://eventsbook-91260.web.app/allevents"},{a1:"https://spatulatom.github.io/todo-reactjs-redux/",img:`${O}`,h2:"a to-do list (React.js, Redux)",p:"This project is a to-do list built with React and Redux library. Tasks on the list can be marked as completed or they can be deleted. The list can be sorted as follows: it can display all tasks, only completed tasks, or only uncompleted tasks. Tasks are being saved in localStorage. Exploring the Redux library while building this app was great fun.",h3:"HTML, CSS, React.js, Redux",a2:"https://github.com/spatulatom/todo-reactjs-redux/tree/master#readme-top",a3:"https://spatulatom.github.io/todo-reactjs-redux/"},{a1:"https://spatulatom.github.io/todo-vanillajs/",img:`${F}`,h2:"a to-do list (Vanilla JavaScript)",p:"This project is a simple to-do list where todos can be created, marked as completed, or deleted. Besides a search bar, we have an option of displaying either all todos, completed todos, or uncompleted todos. Created todos are being saved in the browser's localStorage.",h3:"HTML, CSS, Vanilla JavaScript, GitHub Pages",a2:"https://github.com/spatulatom/todo-vanillajs",a3:"https://spatulatom.github.io/todo-vanillajs/"}],V=document.getElementById("projects");console.log("My arrayy");function U(){G.forEach(e=>{const o=document.createElement("div"),m=`<div class="slide flex justify-center items-center p-12">
  <!-- there is another div in here added by fullpage and has probably set
responsive width, the class on it is .fp-overflow-->
  <div
    class="flex container flex-col xl:flex-row lg:px-14 justify-center items-center"
  >
    <a
      aria-label="Read more"
      href=${e.a1}
      target="_blank"
      class="hidden xl:block basis-7/12 overflow-hidden shadow-2xl bigger"
      rel="noopener"
    >
      <img
        class="hidden lg:block w-screen h-auto rounded-lg"
        src=${e.img}
        fetchpriority="low"
        
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
          class="text-darkViolet dark:text-cyan text-center mb-1 font-bold uppercase"
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
</div>`;o.innerHTML=m,console.log("DIV",o),V.appendChild(o)})}let p=document.querySelector(".cursor");function z(){window.addEventListener("mousemove",e);function e(s){console.log("cursor"),p.style.top=s.pageY+"px",p.style.left=s.pageX+"px"}document.querySelectorAll(".cursor-effect-none").forEach(s=>{s.addEventListener("mouseover",()=>{p.classList.add("opacity-0")}),s.addEventListener("mouseleave",()=>{p.classList.remove("opacity-0")})}),document.querySelectorAll(".bigger").forEach(s=>{s.addEventListener("mouseover",()=>{p.classList.add("cursor-grow")}),s.addEventListener("mouseleave",()=>{p.classList.remove("cursor-grow")})})}E();M();N();U();z();
