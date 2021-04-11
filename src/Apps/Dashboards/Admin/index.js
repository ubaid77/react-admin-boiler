import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AdminLayout from "./layout/admin.layout";
import Home from "./views/Home";

const Admin = ({ match }) => {
  return (
    <AdminLayout>
      <div className="dashboard-wrapper">
        <Switch>
          <Redirect exact from={`${match.url}/`} to={`${match.url}/home`} />
          <Route path={`${match.url}/home`} component={Home} />

          <Redirect to="/error" />
        </Switch>
      </div>
    </AdminLayout>
  );
};

export default Admin;
