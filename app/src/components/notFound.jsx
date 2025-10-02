import { Link } from "react-router"

export default function NotFound() {
    
    return(
        <>
            <div className="notFound error"><h1>ERROR 404: siden er ikke fundet</h1></div>
            <Link to="/">Home</Link>
        </>
    )
}