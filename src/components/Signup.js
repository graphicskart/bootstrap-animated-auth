import React, { Component } from "react";
import { Col, Row, FormGroup, FormControl, Button } from "react-bootstrap";

const initialUser = {
  fullname: "",
  email: "",
  password: ""
};
export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { ...initialUser }
    };
  }

  onChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();

    this.setState({
      user: { ...initialUser }
    });
  };
  render() {
    return (
      <Col xs={12} className="signup-form">
        <h1>SIGNUP</h1>
        <form onSubmit={this.onSubmit}>
          <FormGroup>
            <FormControl
              placeholder="Full Name"
              name="fullname"
              value={this.state.user.fullname}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              placeholder="Email"
              name="email"
              value={this.state.user.email}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.user.password}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Button variant="success" className="float-right" type="submit">
              Signup
            </Button>
          </FormGroup>
        </form>
      </Col>
    );
  }
}
