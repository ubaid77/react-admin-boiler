import React from "react";
import Error from "views/error";
import Admin from "Admin";
import Agent from "Agent";

function Dashboard({ userRole, ...rest }) {
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
