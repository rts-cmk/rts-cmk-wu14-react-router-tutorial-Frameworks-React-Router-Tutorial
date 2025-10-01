import { useNavigate } from "react-router";

export default function Contact(){
    let navigateHome = useNavigate();

    return (
        <>
            <h2>Kontact</h2>
            <form>
                <input type="text" />
                <input type="email" name="" id="" />
                <button onClick={() => {
                    navigateHome("/")
                }}>Send</button>
            </form>
        </>
    )
}