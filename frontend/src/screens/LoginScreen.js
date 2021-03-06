import React from "react";
import { useInput } from "../hooks/input-hook";
import { Row, Col, Form, Button } from "react-bootstrap";

const LoginScreen = (props) => {
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const {
    //value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Logging in ${email}`);
    resetEmail();
    resetPassword();
    //console.log(`Logging in ${email} ${password}`);
  };

  return (
    <>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit} className="px-3">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...bindEmail}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...bindPassword}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default LoginScreen;
