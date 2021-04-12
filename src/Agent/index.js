import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AgentLayout from "./Layout/agent.layout";
import Home from "./Views/home";

const Agent = ({ match }) => {
  return (
    <AgentLayout>
      <div className="dashboard-wrapper">
        <Switch>
          <Redirect exact from={`${match.url}/`} to={`${match.url}/home`} />
          <Route path={`${match.url}/home`} component={Home} />

          <Redirect to="/error" />
        </Switch>
      </div>
    </AgentLayout>
  );
};

export default Agent;
