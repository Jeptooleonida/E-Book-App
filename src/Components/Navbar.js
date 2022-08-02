import React from "react";
import "../App";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h1>React Books App</h1>
      </div>
   
      <div className="navbar-element">
        <Link to="/favorites">
         <div> <h3>Your Favorites</h3></div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;