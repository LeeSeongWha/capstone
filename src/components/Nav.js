import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/common/Nav.css";

const Nav = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
