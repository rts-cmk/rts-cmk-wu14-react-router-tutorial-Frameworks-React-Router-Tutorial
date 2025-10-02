import { Link, NavLink, useNavigate } from "react-router"

export default function Contact() {
    let navigateHome = useNavigate();
    
    return(
        <>
            <div className="kontakt">
                <h1>Kontakt os her:</h1>
                <input placeholder="Besked" type="text" name="" id="" />
                <input placeholder="Navn" type="text" name="" id="" />
                <input placeholder="Mail" type="text" name="" id="" />
                <button onClick={(onClick) => { 
                    onclick.preventDefault()
                    navigateHome("/Tak")
                }}>Send</button>
            </div>
            <Link to="/">Home</Link>
            <br />
            <Link to="/About">About</Link>
        </>
    )
}