import React from "react";
import { Link } from "react-router-dom";

interface Props {
  active: "login" | "signup";
}

const SideHeader: React.FC<Props> = (props) => {
  return (
    <header>
      <Link to="/" className="logo">
        well <span>Played</span>
      </Link>
      <h1>New User Registeration</h1>
      <nav>
        <ul>
          <li className={props.active === "login" ? "active" : ""}>
            <Link to="/login">LOG IN</Link>
          </li>
          <li className={props.active === "signup" ? "active" : ""}>
            <Link to="/signup">SIGN UP</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SideHeader;
