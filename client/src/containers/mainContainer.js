import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Register from "../components/Register";
import authService from "../services/authService";
import Oops from "../components/Oops";
import AdminContainer from "./adminContainer";
import TeacherContainer from "./teachersContainer";
import "../components/assets/font-awesome/css/all.css";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  componentDidMount() {
    const user = authService.getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home {...props} user={this.state.user} />}
          />

          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={Register} />

          <Route
            path="/admin"
            render={props => (
              <AdminContainer {...props} user={this.state.user} />
            )}
          />

          <Route
            path="/teacher"
            render={props => (
              <TeacherContainer {...props} user={this.state.user} />
            )}
          />

          <Route path="/oops" component={Oops} />
          <Redirect to="/oops" />
        </Switch>
      </div>
    );
  }
}

export default MainContainer;
