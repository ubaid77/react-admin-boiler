import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { AuthRoute, UnAuthRoute } from "Utils/Routes";

const ViewMain = React.lazy(() =>
  import(/* webpackChunkName: "views" */ "./Views")
);
const ViewApp = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./Application")
);
const ViewUser = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ "./Authentication")
);
const ViewError = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ "./Views/error")
);

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
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
          <Route
            path="/error"
            exact
            render={(props) => <ViewError {...props} />}
          />
          <Route path="/" exact render={(props) => <ViewMain {...props} />} />
          <Redirect to="/error" />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
