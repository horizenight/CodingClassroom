import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const NavNavigator = useNavigate();
  return (
    <div className="navbar">
      <div className="logo" onClick={() => NavNavigator("/")}>
        <img src="/images/symbol.png" alt="brand-logo"></img>
        Coding Classroom
      </div>
      <ul className="list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/classroom">Classroom</Link>
        </li>
        <li>
          <Link to="/video">Video</Link>
        </li>
        <li>
          <Link to="/coding">Editor</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
