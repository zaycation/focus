import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container fluid={true} className="container-fluid footer__bg">
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; Focus Budgeting 2021
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
