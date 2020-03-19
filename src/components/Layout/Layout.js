import React from "react";

import "./layout.scss";

const Layout = props => {
  return (
    <div className="layout">
      <div className="layout__top-banner">
        <div className="layout__nav">Nav bar</div>
      </div>
      <div className="layout__content p-3 mb-3">{props.children}</div>
    </div>
  );
};

export default Layout;
