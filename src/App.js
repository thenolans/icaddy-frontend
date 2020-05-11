import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";
import ProtectedRoute from "./components/ProtectedRoute";
import RegistrationForm from "./components/RegistrationForm";
import ShotForm from "./components/ShotForm";
import { TokenProvider } from "./contexts/token";
import GithubLink from "./components/GithubLink";
import Urls from "./constants/urls";

const App = () => {
  return (
    <div>
      <GithubLink />
      <TokenProvider>
        <Router>
          <Switch>
            <ProtectedRoute
              exact
              path={Urls.routes.dashboard}
              component={Dashboard}
            />
            <Route path={Urls.routes.register} component={RegistrationForm} />
            <Route path={Urls.routes.login} component={LoginForm} />
            <Route path={Urls.routes.logShot} component={ShotForm} />
            <Route path={Urls.routes.logout} component={Logout} />
          </Switch>
        </Router>
      </TokenProvider>
    </div>
  );
};

export default App;
