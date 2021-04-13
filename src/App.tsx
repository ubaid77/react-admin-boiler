import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { AuthRoute, UnAuthRoute } from "utils/Routes";
import RootState from "interfaces/RootStatesTypes";

const ViewMain = React.lazy(
  () => import(/* webpackChunkName: "views" */ "./views")
);
const ViewApp = React.lazy(
  () => import(/* webpackChunkName: "views-app" */ "./Application")
);
const ViewUser = React.lazy(
  () => import(/* webpackChunkName: "views-user" */ "./Authentication")
);
const ViewError = React.lazy(
  () => import(/* webpackChunkName: "views-error" */ "./views/error")
);

const App = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return (
    <Suspense fallback={<div className="loading" />}>
      <Router>
        <Switch>
          <AuthRoute path="/app" isLoggedIn={isLoggedIn} component={ViewApp} />
          <UnAuthRoute
            path="/user"
            isLoggedIn={isLoggedIn}
            component={ViewUser}
          />
          <Route path="/error" exact render={() => <ViewError />} />
          <Route path="/" exact render={() => <ViewMain />} />
          <Redirect to="/error" />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
