import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import UserLayout from "Authentication/Layout/user.layout";
import { RouteComponentProps } from "interfaces/GlobalPropTypes";
import "./Views/User/Styles/user.scss";

const Login = React.lazy(
  () => import(/* webpackChunkName: "user-login" */ "./Views/User/login")
);
const Register = React.lazy(
  () => import(/* webpackChunkName: "user-register" */ "./Views/User/register")
);

function User(props: RouteComponentProps) {
  return (
    <UserLayout>
      <Suspense fallback={<div className="loading" />}>
        <Switch>
          <Redirect
            exact
            from={`${props.match.url}/`}
            to={`${props.match.url}/login`}
          />
          <Route path={`${props.match.url}/login`} render={() => <Login />} />
          <Route
            path={`${props.match.url}/register`}
            render={() => <Register />}
          />
          <Redirect to="/error" />
        </Switch>
      </Suspense>
    </UserLayout>
  );
}

export default User;
