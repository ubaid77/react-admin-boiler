import React from "react";
import Error from "views/error";
import Admin from "Admin";
import Agent from "Agent";
import { RouteComponentProps } from "interfaces/GlobalPropTypes";

interface DashboardProps extends RouteComponentProps {
  userRole: string;
}

function Dashboard({ userRole, ...rest }: DashboardProps) {
  switch (userRole) {
    case "ADMIN":
      return <Admin {...rest} />;
    case "AGENT":
      return <Agent {...rest} />;
    default:
      return <Error />;
  }
}

export default Dashboard;
