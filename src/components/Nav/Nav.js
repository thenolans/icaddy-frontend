import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.scss";
import Urls from "../../constants/urls";

const Nav = () => {
  return (
    <nav className="nav d-flex">
      <NavLink
        activeClassName="nav__link--active"
        className="nav__link mr-2"
        to={Urls.routes.dashboard}
      >
        Dashboard
      </NavLink>
      <NavLink
        activeClassName="nav__link--active"
        className="nav__link"
        to={Urls.routes.logout}
      >
        Logout
      </NavLink>
    </nav>
  );
};
export default Nav;
