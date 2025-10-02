import { Link } from "react-router";
import CodeBlock from "./components/codeblock.jsx";

export default function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header-container">
          <div className="title-container">
            <h1>React-Router</h1>
            <h2>Velkommen til min tutorial</h2>
          </div>
          <nav>
            <h2>
              <Link to="/About">About</Link>
            </h2>
            <h2>
              <Link to="/Contact">Contact</Link>
            </h2>
          </nav>
        </div>
        <nav className="indholdsfortegnelse">
          <h2>Indholdsfortegnelse:</h2>
          <ol>
            <li>
              <a href="#introduktion">Introduktion</a>
            </li>
            <li>
              <a href="#installation">Installation</a>
            </li>
            <li>
              <a href="#routes">Routes</a>
            </li>
            <li>
              <a href="#linking">Linking</a>
            </li>
          </ol>
        </nav>
      </header>
      <main>
        <section className="introduktion" id="introduktion">
          <h2>Introduktion</h2>
          <p>
            React Router gør det muligt at bygge Single Page Applications (SPA),
            hvor brugeren kan navigere mellem forskellige sider uden at hele
            siden genindlæses. Det giver en hurtigere og mere flydende
            oplevelse. Man bruger det, fordi det gør koden mere organiseret, gør
            navigationen nemmere at styre, og det ligner en “rigtig” hjemmeside
            med flere undersider – selvom det hele kører i én React-app.
          </p>
        </section>
        <section className="installation" id="installation">
          <h2>Installation</h2>
          <p>
            for at installere og bruge React Router, skal du have{" "}
            <a className="vite" target="_blank" href="https://vite.dev/">
              Vite
            </a>{" "}
            klar. Derefter kører du følgende command i terminalen, hvor du skal
            vælge "React", og hvis powershell ikke hvirker kan du bruge bash.
          </p>
          <pre data-line-numbers="true" data-lang="js">
            <CodeBlock code={`npm create vite@latest`} />
          </pre>
          <p>
            Når du har installeret Vite, mangler du kun denne command, hvilket
            installere React Router, som er det vi skal arbejde med.
          </p>
          <pre data-line-numbers="true" data-lang="js">
            <CodeBlock code={`npm install react-router`} />
          </pre>
          <p>
            Derefter skal du wrappe din "&lt;App /&gt;" i
            "&lt;BrowserRouter&gt;"
          </p>
          <pre data-line-numbers="true" data-lang="js">
            <CodeBlock
              code={`import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);`}
            />
          </pre>
        </section>
        <section className="routes" id="routes">
          <h2>Routes</h2>
          <p>
            Nu skal vi til at lave routes, hvilket er hoved delen af React
            Routes.
          </p>
          <p>Vi skal sørge for at importe "Routes" og "Route".</p>
          <p>
            Inde i "Route" skal vi angive path, hvilket er det navn du giver din
            nye page , og element er hvilken fil den skal tage fra.
          </p>
          <p>
            Man kan bruge "*" i path="" for at fange alle errors, 404, og så
            fører brugeren videre ved hjælp af element.
          </p>
          <pre>
            <CodeBlock
              code={`import { BrowserRouter, Routes, Route } from "react-router";
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
);`}
            />
          </pre>
        </section>
        <section className="linking" id="linking">
          <h2>Linking</h2>
          <p>
            For at man kan komme til de andre pages, kan man bruge 3 forskellige
            metoder.
          </p>
          <p>Når vi skal linke til ander pages, skal vi bruge deres path.</p>
          <p>Og det kan man gøre på følgende måder:</p>
          <pre>
            <CodeBlock
              code={`<NavLink to="/"></NavLink>
<Link to="/contact"></Link>
let navigate = useNavigate();
<button onClick={() => {navigate("/about")}}>
Send
</button>`}
            />
          </pre>
          <p>
            Link og NavLink er essentielt det samme, med den betydelige forksel,
          </p>
          <p>
            NavLink giver automatisk en .active klasse som man kan style på:
          </p>
          <pre>
            <CodeBlock
              code={`a.active {
  color: red;
}`}
            />
          </pre>
        </section>
      </main>
    </div>
  );
}
