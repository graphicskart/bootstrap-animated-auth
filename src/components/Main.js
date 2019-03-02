import React, { Component } from "react";
import { Col, Button } from "react-bootstrap";
import { Login, Signup } from "../components";

export default class Main extends Component {
  animateSignup = () => {
    window.$(".main").animate({ left: "22.5%" }, 300);
    window.$(".main").animate({ left: "30%" }, 400);
    window.$(".login-form").animate({ left: "25%" }, 300);
    window.$(".login-form").css("visibility", "hidden");

    window.$(".signup-form").animate({ left: "17%" }, 300);
    window.$(".signup-form").animate({ left: "30%" }, 400);
    window.$(".signup-form").css("visibility", "visible");
  };

  animateLogin = () => {
    window.$(".main").animate({ left: "77.5%" }, 300);
    window.$(".main").animate({ left: "70%" }, 400);
    window.$(".login-form").animate({ left: "83.5%" }, 300);
    window.$(".login-form").animate({ left: "70%" }, 400);
    window.$(".login-form").css("visibility", "visible");

    window.$(".signup-form").animate({ left: "75%" }, 300);
    window.$(".signup-form").css("visibility", "hidden");
  };

  render() {
    return (
      <Col xs={12} className="box">
        <Col xs={12} className="main" />
        <Login />
        <Signup />
        <Col xs={12} className="login-msg">
          Have an account?
        </Col>
        <Col xs={12} className="signup-msg">
          Don't have an account?
        </Col>
        <Button
          variant="success"
          className="login_btn"
          onClick={this.animateLogin}
        >
          LOGIN
        </Button>
        <Button
          variant="success"
          className="signup_btn"
          onClick={this.animateSignup}
        >
          SIGNUP
        </Button>
      </Col>
    );
  }
}
