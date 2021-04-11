import React from "react";
import Admin from "./Admin";
import Agent from "./Agent";

function Dashboard({ userRole, ...rest }) {
  switch (userRole) {
    case "ADMIN":
      return <Admin {...rest} />;
    case "AGENT":
      return <Agent {...rest} />;
    default:
      return null;
  }
}

export default Dashboard;
