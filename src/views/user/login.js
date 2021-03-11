import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { validate } from "../../formik/validate";
import { Formik } from "formik";

function Login() {
  return (
    <Container>
      <h3>Login</h3>
      <hr />
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => validate(values)}
      >
        {({ values, touched, errors, handleChange }) => (
          <Form noValidate>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
                value={values.email}
                isInvalid={errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={values.password}
                name="password"
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              controlId="formGroupButton"
              className="user-btn-wrapper"
            >
              <Button size="lg">Login</Button>
            </Form.Group>
          </Form>
        )}
      </Formik>
      <Link to="/user/register">Not a member? Register</Link>
    </Container>
  );
}

export default Login;
