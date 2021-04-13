import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AgentLayout from "./Layout/agent.layout";
import Home from "./Views/home";
import { RouteComponentProps } from "interfaces/GlobalPropTypes";

const Agent = (props: RouteComponentProps) => {
  return (
    <AgentLayout>
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
    </AgentLayout>
  );
};

export default Agent;
