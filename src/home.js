import { Link } from "react-router";

function Home() {
  return (
    <div>
      <h1>
        Home
      </h1>
      <Link to="/about"> About </Link>
      <Link to="/contact"> Contact </Link>
    </div>
  );
}

export default Home;
