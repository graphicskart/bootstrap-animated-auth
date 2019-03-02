import React, { Component } from "react";
import "./App.css";
import { Col } from "react-bootstrap";
import { Main } from "./components";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Main />
      </div>
    );
  }
}

export default App;
