import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { validateLogin } from "Auth/utils/formik/validate";
import { Formik } from "formik";
import { loginUser } from "Auth/redux/actions/userActions";

const Login = () => {
  let dispatch = useDispatch();
  let history = useHistory();

  const loading = useSelector((state) => state.auth.auth_loading);
  const error = useSelector((state) => state.error.error);

  return (
    <Container>
      <h3>Login</h3>
      <hr />
      {error && <Alert variant="danger">{error}</Alert>}
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => validateLogin(values)}
        onSubmit={async (values) => {
          await dispatch(loginUser(values.email, values.password, history));
        }}
      >
        {({ values, touched, errors, handleChange, handleSubmit }) => (
          <Form noValidate onSubmit={handleSubmit}>
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
              <Button size="lg" onClick={handleSubmit} disabled={loading}>
                {" "}
                {loading ? (
                  <span className="spinner d-inline-block">
                    <span className="bounce1" />
                    <span className="bounce2" />
                    <span className="bounce3" />
                  </span>
                ) : (
                  <span className="label">Login</span>
                )}
              </Button>
            </Form.Group>
          </Form>
        )}
      </Formik>
      <Link to="/user/register">Not a member? Register</Link>
    </Container>
  );
};

export default Login;
