import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

//import AppScreen from "../../screens/AppScreen";

import "../../css/Dashboard.css";

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();

    document.getElementById("navlink").innerHTML = `Login Again`;
  };
  render() {
    //const { user } = this.props.auth;
    const { user } = this.props.auth;

    return (
      <>
        <Row>
          <Col sm={12} md={12}>
            <div className="px-5">
              <h4>
                <b>Welcome back,</b> {user.name.split(" ")[0]}
                <p className="flow-text grey-text text-darken-1">
                  You have logged into the FOCUS app successfully 👏
                </p>
              </h4>
              <Button variant="secondary" onClick={this.onLogoutClick}>
                Logout
              </Button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={12}>
            <div className="my-4 px-5">
              <Card
                border="info"
                className="my-1 rounded top__card text-center"
              >
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
              <Card
                border="dark"
                className="my-1 rounded top__card text-center"
              >
                <Card.Body className="card__container">
                  <Link to="/income" className="edit__title">
                    <Card.Title as="h6" className="text-center">
                      <strong>Edit Income</strong>
                    </Card.Title>
                  </Link>
                  <Card.Text as="h5">
                    <div className="text-center">$100.00</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="my-4 px-5">
              <Card
                border="dark"
                className="my-1 rounded top__card text-center"
              >
                <Card.Body className="card__container">
                  <Card.Text as="h5">
                    <div className="text-center">$100.00</div>
                  </Card.Text>
                  <Link to="/expenses" className="edit__title">
                    <Card.Title as="h6" className="text-center">
                      <strong>Edit Expenses</strong>
                    </Card.Title>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
