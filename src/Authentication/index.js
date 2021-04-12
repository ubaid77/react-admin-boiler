import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import UserLayout from "Authentication/Layout/user.layout";
import "./Views/User/Styles/user.scss";

const Login = React.lazy(() =>
  import(/* webpackChunkName: "user-login" */ "./Views/User/login")
);
const Register = React.lazy(() =>
  import(/* webpackChunkName: "user-register" */ "./Views/User/register")
);

function User({ match }) {
  return (
    <UserLayout>
      <Suspense fallback={<div className="loading" />}>
        <Switch>
          <Redirect exact from={`${match.url}/`} to={`${match.url}/login`} />
          <Route
            path={`${match.url}/login`}
            render={(props) => <Login {...props} />}
          />
          <Route
            path={`${match.url}/register`}
            render={(props) => <Register {...props} />}
          />
          <Redirect to="/error" />
        </Switch>
      </Suspense>
    </UserLayout>
  );
}

export default User;
