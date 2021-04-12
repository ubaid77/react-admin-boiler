import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "Auth/redux/actions/userActions";
import { Container, Dropdown } from "react-bootstrap";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import profile from "Apps/Shared/img/profile-pic.jpg";
import "./styles/nav.css";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    style={{ cursor: "pointer" }}
  >
    {children}
  </div>
));

const TopBar = ({ sidebar_open, setSidebarOpen }) => {
  let dispatch = useDispatch();
  const email = useSelector((state) => state.auth.user?.email);
  return (
    <Container fluid className="nav-wrapper">
      <Container fluid className="nav">
        <div
          className="sidebar-toggle"
          onClick={() => setSidebarOpen(!sidebar_open)}
        >
          <HiOutlineMenuAlt1 />
        </div>
        <div className="logo">
          <Link to="/">
            <h2>Admin Dash</h2>
          </Link>
        </div>
        <div className="custom-dropdown">
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-basic">
              <span className="user-name">
                <p>{email}</p>
              </span>
              <span>
                <img src={profile} alt="user" />
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/">Account</Dropdown.Item>
              <Dropdown.Item href="/">Another action</Dropdown.Item>
              <Dropdown.Item onClick={() => dispatch(logoutUser())}>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Container>
  );
};

export default TopBar;