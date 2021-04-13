import React from "react";
import ErrorSvg from "img/error.svg";
import { Container } from "react-bootstrap";

const Error = () => {
  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <img src={ErrorSvg} alt="error" style={{ width: "400px" }} />

      <p className="mt-2">
        It looks like the page does not exist or you are not authorized to view
        it
      </p>
    </Container>
  );
};

export default Error;
