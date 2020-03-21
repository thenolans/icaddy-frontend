import React from "react";

import "./layout.scss";
import Container from "../Container";
import Nav from "../Nav";

const Layout = props => {
  return (
    <div className="layout">
      <div className="layout__top-banner">
        <Container className="layout__nav pt-5">
          <Nav />
        </Container>
      </div>
      <Container className="layout__content p-3 mb-3">
        {props.children}
      </Container>
    </div>
  );
};

export default Layout;
