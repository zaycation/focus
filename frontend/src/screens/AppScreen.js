import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import TextTransition, { presets } from "react-text-transition";

import "../css/AppScreen.css";

const TEXTS = [
  "You're doing great so far this week - keep it up!",
  "You've saved an extra $200 so far this month",
  "You have 15 more days until your next payday",
];

const AppScreen = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000 // every 5 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <>
      <br />
      <Container>
        <Row>
          <Col sm={12} md={12}>
            <Card
              border="success"
              className="my-1 rounded top__card text-center"
            >
              <Card.Body>
                <Card.Text as="h5">
                  <div className="text-center">$100.00</div>
                </Card.Text>
                <Card.Title as="h6" className="text-center">
                  <strong>Today's Spending Ability</strong>
                </Card.Title>
                <Card.Text>
                  <p className="transitions my-0">
                    <TextTransition
                      text={TEXTS[index % TEXTS.length]}
                      springConfig={presets.wobbly}
                    />
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card border="success" className="my-1 rounded top__card">
              <Card.Body>
                <Card.Text as="h5">
                  <div className="text-center">+ $3000.00</div>
                </Card.Text>
                <Card.Title as="h6" className="text-center">
                  <strong>Expected Income This Month</strong>
                </Card.Title>
                <Card.Text as="p">
                  <div className="text-center">Income: Paycheck, Dividends</div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="danger" className="my-1 rounded top__card">
              <Card.Body>
                <Card.Text as="h5">
                  <div className="text-center">- $2400.00</div>
                </Card.Text>
                <Card.Title as="h6" className="text-center">
                  <strong>Reoccurring Monthly Expenses</strong>
                </Card.Title>
                <Card.Text as="p">
                  <div className="text-center">
                    Upcoming Expenses: Rent, Gas, Phone Bill
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={4}>
            <Card border="info" className="my-1 rounded top__card">
              <Card.Body>
                <Card.Title as="h6" className="text-center">
                  Stop buying so much food!
                </Card.Title>
                <Card.Text as="p">
                  <div className="text-center">
                    Instead of eating out so much,{" "}
                    <a
                      href="https://www.eatwell101.com/cooking-tips-for-beginner-cooks-start-cooking"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      try cooking yourself!
                    </a>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card border="info" className="my-1 rounded top__card">
              <Card.Body>
                <Card.Title as="h6" className="text-center">
                  Give Investing a Try
                </Card.Title>
                <Card.Text as="p">
                  <div className="text-center">
                    You're pretty good at saving $100 from every paycheck.{" "}
                    <Link to="/posts/3">Start investing it today!</Link>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card
              border="info"
              className="my-1 rounded top__card"
              onClick={() => {
                window.open(
                  "https://www.eatwell101.com/cooking-tips-for-beginner-cooks-start-cooking",
                  "_blank"
                );
              }}
            >
              <Card.Body>
                <Card.Title as="h6" className="text-center">
                  Stop buying so much food!
                </Card.Title>
                <Card.Text as="p">
                  <div className="text-center">
                    Instead of eating out so much,{" "}
                    <a
                      href="https://www.eatwell101.com/cooking-tips-for-beginner-cooks-start-cooking"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      try cooking yourself!
                    </a>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card border="dark" className="my-1 rounded top__card">
              <Card.Body>
                <Card.Text as="h5">
                  <div className="text-center">
                    Try Our 1000% Free Financial Literacy Course
                  </div>
                </Card.Text>
                <Card.Title as="h6" className="text-center">
                  <strong>
                    With this course, learn how to take full control of your
                    spending and begin saving more than you could have ever
                    imagined!
                  </strong>
                </Card.Title>
                <Card.Text as="p">
                  <div className="text-center">
                    <a href="https:">Join our discord!</a>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AppScreen;
