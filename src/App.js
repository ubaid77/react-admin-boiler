import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const ViewMain = React.lazy(() =>
  import(/* webpackChunkName: "views" */ "./views")
);
const ViewApp = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./views/app")
);
const ViewUser = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ "./views/user")
);
const ViewError = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ "./views/error")
);

function App() {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Router>
        <Switch>
          <Route path="/app" render={(props) => <ViewApp {...props} />} />
          <Route path="/user" render={(props) => <ViewUser {...props} />} />
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
}

export default App;
