import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.scss";

const Nav = () => {
  return (
    <nav className="nav d-flex">
      <NavLink
        activeClassName="nav__link--active"
        className="nav__link mr-2"
        to="/"
      >
        Dashboard
      </NavLink>
      <NavLink
        activeClassName="nav__link--active"
        className="nav__link"
        to="/logout"
      >
        Logout
      </NavLink>
    </nav>
  );
};
export default Nav;
