import React from "react";
import { Container } from "react-bootstrap";
import TopBar from "Agent/Containers/Navbar";

function AgentLayout({ children }) {
  return (
    <div className="app-container">
      <TopBar />

      <main>
        <Container fluid>{children}</Container>
      </main>
    </div>
  );
}

export default AgentLayout;
