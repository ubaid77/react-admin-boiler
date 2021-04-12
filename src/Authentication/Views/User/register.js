import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { validate } from "Authentication/Utils/Formik/validate";
import { Formik } from "formik";
import { registerUser } from "Authentication/Redux/Actions/userActions";

const Register = () => {
  let history = useHistory();
  let dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.auth_loading);
  const error = useSelector((state) => state.error.error);

  return (
    <Container>
      <h3>Register</h3>
      <hr />
      {error && <Alert variant="danger">{error}</Alert>}

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validate={(values) => validate(values)}
        onSubmit={async (values) => {
          await dispatch(
            registerUser(
              values.email,
              values.username,
              values.password,
              history
            )
          );
          // history.push("/user");
        }}
      >
        {({ values, touched, errors, handleChange, handleSubmit }) => (
          <Form noValidate onSubmit={handleSubmit}>
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
              className="user-btn-wrapper btn-multiple-state"
            >
              <Button size="lg" onClick={handleSubmit} disabled={loading}>
                {loading ? (
                  <span className="spinner d-inline-block">
                    <span className="bounce1" />
                    <span className="bounce2" />
                    <span className="bounce3" />
                  </span>
                ) : (
                  <span className="label">Register</span>
                )}
              </Button>
            </Form.Group>
          </Form>
        )}
      </Formik>

      <Link to="/user/login">Already a member? Login</Link>
    </Container>
  );
};

export default Register;
