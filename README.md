# React Tutorial

React Router is a library for React that enables navigation between different components or pages
within a single-page application without reloading the page. Modern apps use it to create fast,
seamless user experiences by managing URLs, supporting browser history, and enabling smooth transitions between views.

First open a terminal and check if `node` and `npm` is installed:
```bash
node -v
npm -v
```

Use `npx create-react-app react-demo --use-npm` to create your first react application.

Now the `react-demo` directory is present. Change your directory, install `react-router-dom`, and start the server:
```bash
cd react-demo
npm install react-router-dom
npm start
```

On another terminal, open your editor-of-choice (e.g. Visual Studio Code),
and remove every file except `index.css` and `index.js` for brevity, and shorten `index.js` to the following:
```js
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const root_node = document.getElementById('root');
const root = ReactDOM.createRoot(root_node);

root.render(
  <React.StrictMode>
    <div>Hello React!</div>
  </React.StrictMode>
);
```

You should be able to see `Hello React!` in your browser.

Create three new `.js` files named `home.js`, `about.js`, `contact.js`.

```js
function Home() {
  return (
    <h1>
      Home
    </h1>
  );
}

export default Home;
```

And similar structure for `About`, and `Contact`.

Change `index.js` to the following:
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';

import Home from './home.js';
import About from './about.js';
import Contact from './contact.js';

const root_node = document.getElementById('root');
const root = ReactDOM.createRoot(root_node);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
```

Change the `home.js` file to the following:
```js
import { Link } from "react-router";

function Home() {
  return (
    <div>
      <h1>
        Home
      </h1>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Home;
```

And the `about` and `contact` page like the following:
```js
import { useNavigate } from "react-router";

export default function Contact() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>About</h1>
      <button onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}
```

Now the different pages have some interactivity, and the `404 Not Found` page is shown when given a unknown route name.
