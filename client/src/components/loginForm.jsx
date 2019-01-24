import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";
import './assets/css/loginForm.css';
import { NavLink } from "react-router-dom";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-12 login-header">
              <i className="far fa-abacus"></i>
              <h1>Abacus</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-6 mx-auto login-form">
              <div className="row text-center">
                <div className="col-6">
                  <div className="ml-4 login-option">
                    <i className="fas fa-chalkboard-teacher"></i>
                    <h5>Teacher</h5>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mr-4 login-option">
                    <i className="fas fa-user-graduate"></i>
                    <h5>Student</h5>
                  </div>
                </div>
              </div>
              {/* Form Logic */}
              <form onSubmit={this.handleSubmit}>
                {this.renderInput("username", "Username")}
                {this.renderInput("password", "Password", "password")}
                <div className="form-group text-right">
                  <div className="row">
                    <div className="col-9 need-account">
                      <span>No Account? <NavLink to="/register">Sign Up...</NavLink></span>
                    </div>
                    <div className="col-3">
                      {this.renderButton("Login")}
                    </div>
                  </div>
                </div>
              </form>
              {/* Form Logic */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
