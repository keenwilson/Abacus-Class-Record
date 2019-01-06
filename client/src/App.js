import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Project 3</h2>
          </div>
          <p className="App-intro">
            To get started, run <code>yarn start</code>.
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
