import { useNavigate } from "react-router";

export default function Contact() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Contact</h1>
      <button onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}
