import React from "react";
import { Link } from "react-router-dom";
import facebookIcon from "../images/facebook.svg";
import twitterIcon from "../images/twitter.svg";
import instagramIcon from "../images/instagram.svg";

const Footer = () => {
  return (
    <footer className="Footer">
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">What We Do</Link>
          </li>
          <li>
            <Link to="/">Our Work</Link>
          </li>
          <li>
            <Link to="/">Company</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
        <ul className="social-icons">
          <li>
            <Link to="/">
              <img src={facebookIcon} alt="Facebook icon" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={twitterIcon} alt="Twitter icon" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={instagramIcon} alt="Instagram icon" />
            </Link>
          </li>
        </ul>
      </nav>
      <p>Copyright &copy; 2020. All rights reserved </p>
    </footer>
  );
};

export default Footer;
