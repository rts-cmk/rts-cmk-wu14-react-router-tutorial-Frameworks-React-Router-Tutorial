// App.jsx
import { Routes, Route } from "react-router";
//
import Header from './components/header'
import Home from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'



export default function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<h1>Siden findes ikke</h1>} />
      </Routes>
    </div>
  );
}

