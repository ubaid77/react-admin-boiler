import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { validate } from "../../formik/validate";
import { Formik } from "formik";

function Register() {
  return (
    <Container>
      <h3>Register</h3>
      <hr />
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validate={(values) => validate(values)}
      >
        {({ values, touched, errors, handleChange }) => (
          <Form noValidate>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                name="username"
                value={values.username}
                onChange={handleChange}
                isInvalid={!!errors.username}
              />

              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>
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
              <Button size="lg">Register</Button>
            </Form.Group>
          </Form>
        )}
      </Formik>

      <Link to="/user/login">Already a member? Login</Link>
    </Container>
  );
}

export default Register;
