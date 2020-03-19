import React from "react";

import "./loginRegisterLayout.scss";
import Card from "../Card";

const LoginRegisterLayout = props => {
  return (
    <div className="login-register-layout d-flex justify-content-center align-items-center p-3">
      <div className="login-register-layout__content">
        <Card className="p-4">{props.children}</Card>
      </div>
    </div>
  );
};

export default LoginRegisterLayout;
