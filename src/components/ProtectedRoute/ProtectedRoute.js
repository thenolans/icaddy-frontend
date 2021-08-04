import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Redirect } from "react-router-dom";

import Urls from "../../constants/urls";

const ProtectedRoute = ({ component: Component, ...routeProps }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={Urls.routes.root} />
        )
      }
    />
  );
};

export default ProtectedRoute;
