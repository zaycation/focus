import React from "react";
import { Row, Card, Col } from "react-bootstrap";
//const { user,   } = this.props.auth;

const Income = () => {
  return (
    <>
      <Row>
        <Col sm={12} md={12}>
          <div className="my-4 px-5">
            <Card border="info" className="my-1 rounded top__card text-center">
              <Card.Body className="text-center">
                <Card.Text as="h5">
                  <div className="text-center">$0.00</div>
                </Card.Text>
                <Card.Title as="h6" className="text-center">
                  <strong>Daily Spending Ability</strong>
                </Card.Title>
                <Card.Text>
                  <p className="transitions my-0"></p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="my-4 px-5">
            <Card border="dark" className="my-1 rounded top__card text-center">
              <Card.Body className="card__container">
                <Card.Title as="h6" className="text-center">
                  <strong>Edit Income</strong>
                </Card.Title>
                <Card.Text as="h5">
                  <div className="text-center">$100.00</div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="my-4 px-5">
            <Card border="dark" className="my-1 rounded top__card text-center">
              <Card.Body className="card__container">
                <Card.Text as="h5">
                  <div className="text-center">$100.00</div>
                </Card.Text>
                <Card.Title as="h6" className="text-center">
                  <strong>Edit Expenses</strong>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Income;
