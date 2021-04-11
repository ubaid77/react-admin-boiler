import { Route, Redirect } from "react-router-dom";

export const AuthRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/user/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export const UnAuthRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/app",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
