import { NavLink } from "react-router"
import { useNavigate } from "react-router"
import NavBar from "./Navbar.jsx"
export default function Header() {
    let navigate = useNavigate()
    return (
        <>
            <header>
                <div className="header-wrapper">
                     <a href="/"><h1 className="header-title">React <span className="router-span">Router</span></h1></a>
                    <NavBar />
                </div>
            </header>
        </>
    )
}