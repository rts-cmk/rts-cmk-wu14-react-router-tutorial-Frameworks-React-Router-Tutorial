import { Link, Outlet } from 'react-router'

export default function layout() {
    return (
        <>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about" >About</Link></li>
            </ul>
            <Outlet />
        </>
    )
}