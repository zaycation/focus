import React from "react";
import { useInput } from "../hooks/input-hook";
import { Row, Col, Form, Button } from "react-bootstrap";

const SignupScreen = (props) => {
  const { value: name, bind: bindName, reset: resetName } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");
  const {
    value: password2,
    bind: bindPassword2,
    reset: resetPassword2,
  } = useInput("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting ${name} ${email} ${password} ${password2}`);
    resetName();
    resetEmail();
    resetPassword();
    resetPassword2();
    //console.log(`Submitting ${name} ${email} ${password} ${password2}`);
  };

  return (
    <>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit} className="px-3">
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="name"
                placeholder="Enter name"
                {...bindName}
              />
              <Form.Text className="text-muted">
                Please enter your full name (first and last)
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...bindEmail}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...bindPassword}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password from above"
                {...bindPassword2}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Check me to opt out of emails"
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

export default SignupScreen;
