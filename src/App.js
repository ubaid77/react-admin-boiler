import React, { Suspense } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { AuthRoute, UnAuthRoute } from "utils/Routes";

const ViewMain = React.lazy(() =>
  import(/* webpackChunkName: "views" */ "./views")
);
const ViewApp = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./Apps")
);
const ViewUser = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ "./Auth")
);
const ViewError = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ "./views/error")
);

const App = ({ isLoggedIn }) => {
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

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(App);
