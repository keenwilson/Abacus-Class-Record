import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import auth from "./services/authService";
import logo from "./logo.svg";
import "./App.css";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import Welcome from "./components/welcome";
import Navbar from "./components/navBar";
import NotFound from "./components/notFound";

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to Project 3</h2>
            </div>
            <p className="App-intro">
              To get started, run <code>yarn start</code>.
            </p>
          </div>
          <main className="container">
            <Switch>
              <Route path="/welcome" component={Welcome} />
              <Route path="/register" component={RegisterForm} />
              <Route path="/login" component={LoginForm} />
              <Route path="/logout" component={Logout} />
              <Route path="/not-found" component={NotFound} />
              <Redirect from="/" exact to="/welcome" />
              <Redirect to="/not-found" />
            </Switch>
          </main>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
