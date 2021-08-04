import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.scss";
import Urls from "../../constants/urls";

const Nav = () => {
  return (
    <nav className="nav d-inline-flex">
      <NavLink
        activeClassName="nav__link--active"
        className="nav__link mr-2"
        to={Urls.routes.app}
      >
        Dashboard
      </NavLink>
      <NavLink
        activeClassName="nav__link--active"
        className="nav__link"
        to={Urls.routes.account}
      >
        My account
      </NavLink>
    </nav>
  );
};
export default Nav;
