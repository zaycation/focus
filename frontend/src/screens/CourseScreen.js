import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import Welcome from "../components/course/Welcome";
import WhatIsIt from "../components/course/WhatIsIt";

import "../css/CourseScreen.css";

const CourseScreen = () => {
  const [section, setSection] = useState("about");

  return (
    <>
      <Container fluid={true} className="container-fluid">
        <Row>
          <Col sm={12} md={3} className="left__col">
            <div className="row__order">
              <Button
                variant="link"
                onClick={() => {
                  setSection("welcome");
                }}
              >
                Welcome to the course!
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  setSection("whatisit");
                }}
              >
                What even is "financial literacy"?
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  setSection("welcome");
                }}
              >
                Budgeting 101
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  setSection("welcome");
                }}
              >
                Credit 101
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  setSection("welcome");
                }}
              >
                Debt
              </Button>

              <Button
                variant="link"
                onClick={() => {
                  setSection("welcome");
                }}
              >
                Saving
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  setSection("welcome");
                }}
              >
                Emergencies
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  setSection("welcome");
                }}
              >
                Investing 101
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  setSection("welcome");
                }}
              >
                Stocks and Cryptos
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  setSection("welcome");
                }}
              >
                Useful Tips!
              </Button>
            </div>
          </Col>
          <Col sm={12} md={9}>
            {section === "welcome" && <Welcome />}
            {section === "whatisit" && <WhatIsIt />}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CourseScreen;
