import React, { Component } from "react";
import { Col, Row, FormGroup, FormControl, Button } from "react-bootstrap";

const initialUser = {
  email: "",
  password: ""
};

export default class Login extends Component {
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
      <Col xs={12} className="login-form">
        <h1>LOGIN</h1>
        <form onSubmit={this.onSubmit}>
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
              Login
            </Button>
          </FormGroup>
        </form>
      </Col>
    );
  }
}
