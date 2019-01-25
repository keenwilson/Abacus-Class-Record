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

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  componentDidMount() {
    const user = authService.getCurrentUser();
    console.log("Auth service is getting a current user");
    this.setState({ user });
  }

  render() {
    return (
      <div>
        <h1>Main Container</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/register" component={Register} />

          <Route
            exact
            path="/admin"
            render={props => (
              <AdminContainer {...props} user={this.state.user} />
            )}
          />

          <Route
            exact
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
