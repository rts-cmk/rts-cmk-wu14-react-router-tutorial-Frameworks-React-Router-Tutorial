import { useNavigate } from "react-router"
import NavBar from "./Navbar.jsx"
export default function Header() {
    let navigate = useNavigate()
    return (
        <>
            <header>
                <div className="header-wrapper">

                    <a href="na">
                    <h1 className="header-title">React Router</h1>
                    </a>

                    <NavBar />
                </div>
            </header>
        </>
    )
}