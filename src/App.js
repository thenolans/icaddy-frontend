import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Dashboard from "./components/Dashboard";
import Account from "./components/Account";
import AuthLoader from "./components/AuthLoader";
import ProtectedRoute from "./components/ProtectedRoute";
import ShotForm from "./components/ShotForm";
import GithubLink from "./components/GithubLink";
import LandingPage from "./components/LandingPage";
import Urls from "./constants/urls";

const queryClient = new QueryClient();

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <AuthLoader />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <GithubLink />
      <Router>
        <Switch>
          <Route exact path={Urls.routes.root} component={LandingPage} />
          <ProtectedRoute
            exact
            path={Urls.routes.account}
            component={Account}
          />
          <ProtectedRoute
            exact
            path={Urls.routes.logShot}
            component={ShotForm}
          />
          <ProtectedRoute
            exact
            path={Urls.routes.dashboard}
            component={Dashboard}
          />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
