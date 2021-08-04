import React from "react";

import "./layout.scss";
import Card from "../Card";
import Container from "../Container";
import Nav from "../Nav";
import Logo from "../Logo";
import Footer from "../Footer";

const Layout = (props) => {
  return (
    <div className="layout">
      <div className="layout__top-banner">
        <Container className="layout__nav pt-5">
          <div className="mb-4">
            <Logo />
          </div>
          <Nav />
        </Container>
      </div>
      <Container className="layout__content p-3 mb-3">
        <Card className="layout__card p-4">{props.children}</Card>
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
