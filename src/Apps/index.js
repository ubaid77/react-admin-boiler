import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Redirect, Route } from "react-router-dom";
import Dashboard from "Apps/Dashboards";
import { setUser } from "Auth/redux/actions/userActions";

const App = ({ match, setUser, loading, userRole }) => {
  useEffect(() => {
    setUser();
  }, [setUser]);

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

const mapStateToProps = (state) => ({
  loading: state.auth.user_loading,
  userRole: state.auth.user?.user_type,
});

export default connect(mapStateToProps, { setUser })(App);
