import { Auth0Provider } from "@auth0/auth0-react";

import Urls from "../../constants/urls";

const AuthProvider = ({ children }) => {
  return (
    <Auth0Provider
      audience={process.env.REACT_APP_AUTH0_AUDIENCE}
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={`${window.location.origin}${Urls.routes.app}`}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
