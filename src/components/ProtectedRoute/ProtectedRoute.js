import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import TokenContext from "../../contexts/token";

const ProtectedRoute = ({ component: Component, ...routeProps }) => {
  const { token } = useContext(TokenContext);
  const isAuthenticated = Boolean(token);

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
