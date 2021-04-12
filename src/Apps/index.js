import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Redirect, Route } from "react-router-dom";
import Dashboard from "Apps/Dashboards";
import { setUser } from "Auth/redux/actions/userActions";

const App = ({ match }) => {
  let dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.user_loading);
  const userRole = useSelector((state) => state.auth.user?.user_type);

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
            from={`${match.url}/`}
            to={`${match.url}/dashboard`}
          />
          <Route
            path={`${match.url}/dashboard`}
            render={(props) => <Dashboard {...props} userRole={userRole} />}
          />

          <Redirect to="/error" />
        </Switch>
      )}
    </>
  );
};

export default App;
