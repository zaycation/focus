import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import Welcome from "../components/course/Welcome";
import WhatIsIt from "../components/course/WhatIsIt";
import Budgeting from "../components/course/Budgeting";
import Credit from "../components/course/Credit";
import Debt from "../components/course/Debt";
import Saving from "../components/course/Saving";
import Emergencies from "../components/course/Emergencies";
import Investing from "../components/course/Investing";
import Stocks from "../components/course/Stocks";
import Tips from "../components/course/Tips";

import "../css/CourseScreen.css";

const CourseScreen = () => {
  const [section, setSection] = useState("about");

  return (
    <>
      <Container fluid={true} className="container-fluid">
        <Row>
          <Col sm={12} md={3} className="left__col">
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
                What is "financial literacy"?
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  setSection("budgeting");
                }}
              >
                Budgeting 101
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  setSection("credit");
                }}
              >
                Credit 101
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  setSection("debt");
                }}
              >
                Debt
              </Button>

              <Button
                variant="link"
                onClick={() => {
                  setSection("saving");
                }}
              >
                Saving
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  setSection("emergencies");
                }}
              >
                Emergencies
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  setSection("investing");
                }}
              >
                Investing 101
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  setSection("stocks");
                }}
              >
                Stocks and Cryptos
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  setSection("tips");
                }}
              >
                Useful Tips!
              </Button>

          </Col>
          <Col sm={12} md={9}>
            Login to track your course progress!
            {section === "welcome" && <Welcome />}
            {section === "whatisit" && <WhatIsIt />}
            {section === "budgeting" && <Budgeting />}
            {section === "credit" && <Credit />}
            {section === "debt" && <Debt />}
            {section === "saving" && <Saving />}
            {section === "emergencies" && <Emergencies />}
            {section === "investing" && <Investing />}
            {section === "stocks" && <Stocks />}
            {section === "tips" && <Tips />}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CourseScreen;
