import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../img/logo_size.jpg";
function UserLayout({ children }) {
  return (
    <Container fluid className="user-container">
      <Row>
        <Col lg={8} className="user-bg" />

        <Col lg={4} className="user-form-container">
          <Link to="/">
            <img src={Logo} alt="admin-dash" className="logo-img" />
          </Link>
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default UserLayout;
