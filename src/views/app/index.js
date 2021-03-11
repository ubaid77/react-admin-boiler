import React, { Suspense } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import AppLayout from "../../layout/app.layout";

const Dashboards = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ "./dashboards")
);

const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/dashboards`}
            />
            <Route
              path={`${match.url}/dashboards`}
              render={(props) => <Dashboards {...props} />}
            />

            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

export default App;
