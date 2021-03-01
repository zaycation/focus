import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container fluid={true} className="container-fluid">
        <Row>
          <Col className="text-center py-3 footer__bg">
            Copyright &copy; Focus Budgeting 2021
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
