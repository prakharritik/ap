import React from "react";
import "./navbar.css";
import Logo from "../assets/logo.svg";
import Person from "../assets/person.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">
        <img src={Logo} />
      </div>
      {/* NAVIGATION MENU */}
      <ul className="nav-links">
        {/* USING CHECKBOX HACK */}
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          ☰
        </label>
        {/* NAVIGATION MENUS */}
        <div class="menu">
          <li className="nav-item">
            <a href="/" className="nav-pill">
              ADD ITEM
            </a>
          </li>
          <li className="nav-item">
            <a href="/">
              <img src={Person} className="nav-circle" />
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
