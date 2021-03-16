import React from "react";
import { Link } from "react-router-dom";
// Images
import searchIcon from "../images/search.svg";

interface Props {
  isAuth: boolean;
  imgUrl?: string;
  name?: string;
  activePage: "Home" | "Games" | "Download" | "About";
}

const TopNav: React.FC<Props> = ({ isAuth, imgUrl, name, activePage }) => {
  return (
    <nav className="Top-nav">
      {/* Logo */}
      <Link to="/" className="logo">
        w<span>p</span>
      </Link>

      <label className="hamburger-menu" htmlFor="drop-down">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <input type="checkbox" name="drop-down" id="drop-down" />

      <div className="drop-down">
        {/* Nav links */}
        <ul>
          <li className={activePage === "Home" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={activePage === "Games" ? "active" : ""}>
            <Link to="/games/1">Games</Link>
          </li>
          <li className={activePage === "Download" ? "active" : ""}>
            <Link to="/download">Download</Link>
          </li>
          <li className={activePage === "About" ? "active" : ""}>
            <Link to="/about">About Us</Link>
          </li>
        </ul>

        {/* Search input */}
        <div className="search-input">
          <input type="text" name="search" id="search" placeholder="Search" />
          <img src={searchIcon} alt="Search icon" />
        </div>
      </div>

      {!isAuth ? (
        // Login and Signup buttons
        <div className="register-btns">
          <button className="login-btn">
            <Link to="/login"> Login </Link>
          </button>
          <button>
            <Link to="/signup"> Signup </Link>
          </button>
        </div>
      ) : (
        // Image and name of user
        <div className="user-info">
          <img src={imgUrl} alt={`${name} avatar`} />
          <p>{name}</p>
        </div>
      )}
    </nav>
  );
};

export default TopNav;
