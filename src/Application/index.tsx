import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Redirect, Route } from "react-router-dom";
import Dashboard from "Application/Dashboard";
import { setUser } from "Authentication/Redux/Actions/userActions";
import { RouteComponentProps } from "interfaces/GlobalPropTypes";
import RootState from "interfaces/RootStatesTypes";

const App = (props: RouteComponentProps) => {
  let dispatch = useDispatch();

  const loading = useSelector((state: RootState) => state.auth.user_loading);
  const userRole = useSelector(
    (state: RootState) => state.auth.user?.user_type
  );

  useEffect(() => {
    dispatch(setUser());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="loading" />
      ) : (
        <Switch>
          <Redirect
            exact
            from={`${props.match.url}/`}
            to={`${props.match.url}/dashboard`}
          />
          <Route
            path={`${props.match.url}/dashboard`}
            render={(props) => <Dashboard {...props} userRole={userRole!} />}
          />

          <Redirect to="/error" />
        </Switch>
      )}
    </>
  );
};

export default App;
