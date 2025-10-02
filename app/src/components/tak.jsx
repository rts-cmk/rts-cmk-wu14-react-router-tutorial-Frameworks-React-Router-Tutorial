import { Link } from "react-router";

export default function Tak() {
  return (
    <>
      <div className="succes">
        <h1>Nu er beskeden sendt, vi vender tilbage snarest muligt.</h1>
        <Link to="/">Home</Link>
      </div>
    </>
  );
}
