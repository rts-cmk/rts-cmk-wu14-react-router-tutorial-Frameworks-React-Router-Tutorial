// pages/Home.jsx
import CodeBlock from "../components/CodeBlock";

export default function Home() {
  return (
    <section className="homepage">
      <h2>React Router - Tutorial</h2>
      <p className="homepage-des">
        Hej og velkommen til denne React Router-tutorial, hvor vi lærer det
        grundlæggende om React Routere.
      </p>
      <article className="router-tutorial">
        <div className="introduction">
          <h3>Introduktion</h3>
          <p>
            Dette er en lille demo-side bygget med React Router. Her kan du se,
            hvordan man kan lave navigation i en React-app uden at reloade hele
            siden. Du kan klikke rundt mellem forskellige sider, teste dynamiske
            ruter og opleve, hvordan vi kan bygge et helt websted kun ved hjælp
            af komponenter og URL’er.
          </p>
        </div>
        <div className="steps 1">
          <h3>Trin 1 - Installer React Router</h3>
          <p>
            Vær sikkert på at har installeret{" "}
            <a href="https://vite.dev/" target="_blank" className="vite">
              Vite
            </a>{" "}
            og oprettet et projekt
          </p>
          <pre>
            <CodeBlock code={"npx create-vite@latest"} />
          </pre>
          <p>
            Efter det, installer React Router{" "}
            <span className="code-span">react-router</span>
          </p>

          <pre>
            <CodeBlock code={"npm install react-router"} />
          </pre>
        </div>
        <div className="steps 2">
          <h3>Trin 2 - Wrap app i &lt;BrowserRouter&gt;</h3>
          <p>
            <span className="code-span">BrowserRouter</span> sørger for at lytte
            til URL-ændringer og render de korrekte routes. Dette er den mest
            almindelige, simple opsætning. <br />I dine{" "}
            <span className="code-span">src/main.jsx</span> :
          </p>
          <pre>
            <CodeBlock
              code={`import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);`}
            />
          </pre>
        </div>
        <div className="steps 3">
          <h3>Trin 3 - Definér ruter med &lt;Routes&gt; og &lt;Route&gt;</h3>
          <ul className="step-3-ul">
            <li>
              <span className="code-span">Routes</span> indeholder{" "}
              <span className="code-span">Route</span> elementer
            </li>
            <li>
              <span className="code-span">path="/"</span> er root-ruten
            </li>
            <li>
              <span className="code-span">element</span> er siden du skal hen
            </li>
            <li>
              <span className="code-span">path="*"</span> bruges som catch-all{" "}
              {"(404)"}
            </li>
          </ul>
          <p>
            I dine <span className="code-span">src/App.jsx</span> :
          </p>
          <pre>
            <CodeBlock
              code={`import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>{" "}
          <NavLink to="/about">About</NavLink>{" "}
          <NavLink to="/dashboard">Dashboard</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
`}
            />
          </pre>
        </div>
        <div className="steps 4">
          <h3>Trin 4 - Links: &lt;Link&gt; vs &lt;NavLink&gt;</h3>
          <p>
            Begge links ændrer URL uden reload.{" "}
            <span className="code-span">NavLink</span> kan give aktiv styling:{" "}
            <span className="code-span">isActive</span> hjælper med at sætte en CSS-klasse når linket svarer til
            den aktuelle rute — super til navigation menus
          </p>
          <p>
            Eksempel (bruges i <span className="code-span">App.jsx</span>{" "}
            ovenfor):
          </p>
          <pre>
            <CodeBlock
              code={`<NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
  Home
</NavLink>`}
            />
          </pre>
        </div>
      </article>
    </section>
  );
}
