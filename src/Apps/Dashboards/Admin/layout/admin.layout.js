import React from "react";
import { Container } from "react-bootstrap";
import TopBar from "Apps/Shared/containers/nav/TopBar";

function AdminLayout({ children }) {
  return (
    <div className="app-container">
      <TopBar />
      <main>
        <Container fluid>{children}</Container>
      </main>
    </div>
  );
}

export default AdminLayout;
