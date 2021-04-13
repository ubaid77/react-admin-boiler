import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { logoutUser } from "Authentication/Redux/Actions/userActions";
import RootState from "interfaces/RootStatesTypes";
import {
  Dropdown,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import profile from "Application/Shared/Img/profile-pic.jpg";
import "./Styles/nav.scss";

interface Props {
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children: React.ReactNode;
}

const CustomToggle = React.forwardRef(({ children, onClick }: Props, ref) => (
  <div
    ref={ref as React.RefObject<HTMLDivElement>}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    style={{ cursor: "pointer" }}
  >
    {children}
  </div>
));

const TopBar = () => {
  let dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.auth.user?.username);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      className="nav-wrapper"
    >
      <Navbar.Brand href="#home" className="logo">
        <Link to="/">React CRM</Link>
      </Navbar.Brand>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Dashboard</Nav.Link>
          <Nav.Link href="#features">Content</Nav.Link>
          <Nav.Link href="#pricing">Marketing</Nav.Link>
          <Nav.Link href="#pricing">Leads</Nav.Link>
          <Nav.Link href="#pricing">Workflow</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">
            <GoSearch />
          </Button>
        </Form>
      </Navbar.Collapse>
      <div className="d-flex mobile-toggle-wrapper">
        <Dropdown className="custom-dropdown">
          <Dropdown.Toggle as={CustomToggle} id="dropdown-basic">
            <span>
              <img src={profile} alt="user" />
            </span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/">{username}</Dropdown.Item>
            <NavDropdown.Divider />
            <Dropdown.Item href="/">Another action</Dropdown.Item>
            <Dropdown.Item onClick={() => dispatch(logoutUser())}>
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-3" />
      </div>
    </Navbar>
  );
};

export default TopBar;
