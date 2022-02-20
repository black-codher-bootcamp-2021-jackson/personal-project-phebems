import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/log-in">Log in</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign up</Link>
        </li>
        <li>
          <Link to="/filtered-search">Search</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
