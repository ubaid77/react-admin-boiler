import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Redirect, Route } from "react-router-dom";
import AppLayout from "layout/app.layout";
import Dashboard from "views/app/dashboards";
import { setUser } from "redux/actions/userActions";

const App = ({ match, setUser, loading }) => {
  useEffect(() => {
    setUser();
  }, [setUser]);

  return (
    <>
      {loading ? (
        <div className="loading" />
      ) : (
        <AppLayout>
          <div className="dashboard-wrapper">
            <Switch>
              <Redirect
                exact
                from={`${match.url}/`}
                to={`${match.url}/dashboards`}
              />
              <Route path={`${match.url}/dashboards`} component={Dashboard} />

              <Redirect to="/error" />
            </Switch>
          </div>
        </AppLayout>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.user.user_loading,
});

export default connect(mapStateToProps, { setUser })(App);
