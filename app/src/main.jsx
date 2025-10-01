import React from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import About from "./components/about.jsx";
import "./main.css";
import Contact from "./components/contact.jsx";
import NotFound from "./components/notFound.jsx";
import Tak from "./components/tak.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="Tak" element={<Tak />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
