import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Sidebar from "../containers/nav/Sidebar";
import TopBar from "../containers/nav/TopBar";
import useWindowDimensions from "../helpers/useWindowDimensions";

function AppLayout({ children }) {
  const { width } = useWindowDimensions();
  const [sidebar_open, setSidebarOpen] = useState(width > 768 ? true : false);

  return (
    <div className="app-container">
      <TopBar sidebar_open={sidebar_open} setSidebarOpen={setSidebarOpen} />
      <Sidebar sidebar_open={sidebar_open} />
      <main
        style={{
          marginLeft: sidebar_open ? "150px" : 0,
          transition: "all .5s ease",
        }}
      >
        <Container fluid>{children}</Container>
      </main>
    </div>
  );
}

export default AppLayout;
