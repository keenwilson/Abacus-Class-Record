import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";
import auth from "../services/authService";
import { NavLink } from "react-router-dom";

class Register extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);

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
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-12 login-header">
              <i className="far fa-abacus" />
              <h1>Abacus</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-6 mx-auto login-form">
              <h1 className="text-center">New Account</h1>
              {/* Form Logic */}
              <form onSubmit={this.handleSubmit}>
                {this.renderInput("username", "Username")}
                {this.renderInput("password", "Password", "password")}
                {this.renderInput("name", "Name")}
                <div className="form-group text-right">
                  <div className="row">
                    <div className="col-9 need-account">
                      <span>
                        Have an Account?{" "}
                        <NavLink to="/login">Login here...</NavLink>
                      </span>
                    </div>
                    <div className="col-3">{this.renderButton("Register")}</div>
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

export default Register;
