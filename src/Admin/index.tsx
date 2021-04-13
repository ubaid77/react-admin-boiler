import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AdminLayout from "./Layout/admin.layout";
import Home from "./Views/home";
import { RouteComponentProps } from "interfaces/GlobalPropTypes";

const Admin = (props: RouteComponentProps) => {
  return (
    <AdminLayout>
      <div className="dashboard-wrapper">
        <Switch>
          <Redirect
            exact
            from={`${props.match.url}/`}
            to={`${props.match.url}/home`}
          />
          <Route path={`${props.match.url}/home`} component={Home} />

          <Redirect to="/error" />
        </Switch>
      </div>
    </AdminLayout>
  );
};

export default Admin;
