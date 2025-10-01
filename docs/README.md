# React Router
react router er en udvikler pakke til react som tilføjer routing til din react app

## Hvorfor findes react router?

React skaber en SPA (Single page app), det betyder at modsat en normal app skrevet kun med html, css og javascript, så har den kun index.html fil som inholder en smugle html som er nødvendig, og resten af dommen bliver skabt med javascript, det betyder at react har ingen ide om hvilken route den bliver kørt på.

Det lader ogs navigere imellem sider uden at loade vores assets en gang til, det gør at bruger oplevelsen bliver hurtigere og mere flydende

## Modes

React router har 3 forskellige modes du kan bruge til at configurer din routing

hver mode har sine egne fordele og ulemper

* [Declarative](#Declarative)
* [Data](#Data)
* [Framework](#Framework)

vælg hvilken mode du gerne vil [bruge](#hvilken-mode-skal-jeg-bruge)

### Declarative
Decalarative mode lader dig bruge simpel routing i din app der matcher urlen til forskellige react componenter, og giver dig adgang til apier som `<Link>`, `useNavigate`, og `useLocation`
exempel:

```jsx
// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/home.jsx";
import AboutPage from "./pages/about.jsx";
import HelloPage from "./pages/hello.jsx";

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/hello" element={<HelloPage/>}/>
    </Routes>
  </BrowserRouter>,
);
```
```jsx
// src/pages/hello.jsx
export default function HelloPage() {
    const {name} = useParams();
    return <h1>Hello {name}</h1>
}
```
### Data
Data mode er en data dreven routing. her definere du din routing struktur uden for reacts dom, det giver dig adgang til apier som `loader`, `actions`, og `useFetcher`

exempel:
```jsx
// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from "./pages/home.jsx"
import AboutPage from "./pages/about.jsx"
import HelloPage from "./pages/hello.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/about",
    element: <AboutPage/>,
  },
  {
    path: "/hello",
    element: <HelloPage/>,
    loader: async ({params}) => {
        return {name: params.name}
    } 
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
```
```jsx
// src/pages/hello.jsx
export default function HelloPage() {
    const {name} = useLoaderData();
    return <h1>Hello {name}</h1>
}
```
### Framework
Framework mode er en wrapper på [data mode](#data) igennem et vite plugin.

Det får react router til at fungere næsten som et vert andet framework som next.js, vue.js og svelte-kit.
```jsx
// src/routes.js
import {route} from "@react-router/dev/routes";

export defualt [
    route("/", "./pages/home.jsx")
    route("/about", "./pages/about.jsx")
    route("/hello/:name", "/pages/hello.jsx")
]
```
```jsx
// src/pages/hello.jsx
export async loader({params}) {
    return {name: params.name}
}

export default function HelloPage({
    loaderData
}) {
    return <h1>Hello {loaderData.name}</h1>
}
```
### Hvilken mode skal jeg bruge
hver mode tilføjer flere kun flere apier til dit projekt, og det er relativt simpelt at skifte til den næste som det passer dig.
her er en lille outline til grunde for at vælge de forskellige.

#### Declarative
Er den du skal vælge hvis du primært har med statiske sider at gøre.

#### Data
Er til når du gerne vil have en mere interactiv side med loading sider og afsendelse af formulare

#### Framework
Er til når du vil lave en fuldt ud app med react som kan *næsten* det hele
Som statisk genering af sider når du bygger siden
Server renderede sider


## Kom godt i gang

<div class="warn">
denne tutorial tager udgangspunkt i hvordan man bruger <a href="/#/?id=declarative">Declarative mode</a> . <br>
Den forventer også du har forstand på

- html
- css
- js
- og en smugle react


</div>


lav et nyt react projekt
```sh
npm create vite --template react react-router-tutorial
cd react-router-tutorial
```

installer alle vores dependencies
```sh
npm i
npm i react-router
```

vi har nu en simpel react app kørende med et vite template.
start appen i dev mode
```sh
npm run dev
```

du kan nu åbne siden på `localhost:5173`

lige nu har vi kun en app med 1 side.

vi skal nu tilføje react router til projektet så vi kan skabe så mange sider vi vil.
```jsx
// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

```

her definere vi en nu router med en liste af routes.
til at started med har vi kun 1 route til / som rendere vores app Component

hvis vi nu går tilbage til vores app vil du se, der ikke er noget som har ændret sig.

```jsx
// src/app.jsx
import './App.css'
import { Link } from 'react-router'

function App() {

  return (
    <>
      <h1>React Router tutorial</h1>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR updates.
      </p>
      <ul>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/about" >About</Link></li>
      </ul>
    </>
  )
}

export default App
```

Her har vi tilføjet 2 links, 1 tilbage til vores start side, og en til en about side vi ikke har skabt endu, så lad ogs gøre det.

Vi har brugt Link komponentet fra react-router fordi navigere side uden at reloade dokumentet

jeg kan godt lide at burge at bruge default exports til mine sider og bruge named expors til componenter.
du kan selv vælge hvilken du gerne vil bruge.

```jsx
// src/pages/about.jsx
export default function About() {
    return (
        <>
        <h1>About page</h1>
        <p>This is the about page</p>
        </>
    )
}
```

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'

import AboutPage from './pages/about.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
```
vi har nu importert og indsat vores about side Komponent ind i vores router
vi kan nu gå til vores about page uden problemer.

Hov! hvor blev vores links af?
Da vi kun tilføjede vores links til vores start side, så kan vi ikke se dem på vores about side.
Men det kan vi fikse med Layouts. Layouts lader os lave et komponet som vores side ligger inden i.

lad ogs lave et ny layout og rykke vores start og about page ind i et layout.
```jsx
// src/layout.jsx
import { Link, Outlet } from 'react-router'

export default function layout() {
    return (
        <>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about" >About</Link></li>
            </ul>
            <Outlet />
        </>
    )
}
```
her har vi rykket vores link ind i vores layout Komponent.

Her bruger vi et nyt Komponent der hedder Outlet.
Det Outlet lader os gøre er at sige, Her vil vi gerne have de næste elementer til at ligge.

?> du kan også godt ligge layouts ind i hindanden

```jsx
// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'

import AboutPage from './pages/about.jsx'
import Layout from "./layout.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
```
Her ligger vi vores 2 routes ind endu et Route komponent, som kun får et Komponent,
der siger til react router at det her er bare et layout den skal bruge hvis nogle af dens under routes matcher.



