import { NavLink } from "react-router";

export default function NavBar() {
  return (
      <nav className="nav-bar">
        <NavLink to="About">About</NavLink>
        <NavLink to="Contact">Contact</NavLink>
      </nav>
  );
}
