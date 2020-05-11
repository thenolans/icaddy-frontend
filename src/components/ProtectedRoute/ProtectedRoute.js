import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import TokenContext from "../../contexts/token";
import Urls from "../../constants/urls";

const ProtectedRoute = ({ component: Component, ...routeProps }) => {
  const { token } = useContext(TokenContext);
  const isAuthenticated = Boolean(token);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={Urls.routes.login} />
        )
      }
    />
  );
};

export default ProtectedRoute;
