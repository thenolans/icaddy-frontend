import React from "react";

import "./layout.scss";
import Container from "../Container";

const Layout = props => {
  return (
    <div className="layout">
      <div className="layout__top-banner">
        <div className="layout__nav">Nav bar</div>
      </div>
      <Container className="layout__content p-3 mb-3">
        {props.children}
      </Container>
    </div>
  );
};

export default Layout;
