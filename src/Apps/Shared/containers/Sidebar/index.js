import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdDashboard, MdSettings } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { VscSymbolMisc } from "react-icons/vsc";
import "./styles/Sidebar.css";

const Sidebar = ({ sidebar_open }) => {
  return (
    <div className={sidebar_open ? "sidebar open" : "sidebar"}>
      <Container fluid>
        <ul>
          <li className="active">
            <Link>
              <MdDashboard />
              <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link>
              <HiOutlineDocumentReport /> <p>Reports</p>
            </Link>
          </li>
          <li>
            <Link>
              <MdSettings />
              <p>Settings</p>
            </Link>
          </li>
          <li>
            <Link>
              <VscSymbolMisc />
              <p>Others</p>
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Sidebar;
