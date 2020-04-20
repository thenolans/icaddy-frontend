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

const App = () => {
  return (
    <div>
      <GithubLink />
      <TokenProvider>
        <Router>
          <Switch>
            <ProtectedRoute exact path="/" component={Dashboard} />
            <Route path="/register" component={RegistrationForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/log-shot" component={ShotForm} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </Router>
      </TokenProvider>
    </div>
  );
};

export default App;
