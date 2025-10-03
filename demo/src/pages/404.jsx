import { useNavigate } from "react-router"

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
    )
}