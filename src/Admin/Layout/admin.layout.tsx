import React from "react";
import { Container } from "react-bootstrap";
import TopBar from "Admin/Containers/Navbar";
import { LayoutProps } from "interfaces/GlobalPropTypes";

function AdminLayout({ children }: LayoutProps) {
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
