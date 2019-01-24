import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import Welcome from "./components/welcome";
import Classrooms from "./components/classrooms";
import Teachers from "./components/teachers";
import Assignments from "./components/assignments";
import Students from "./components/students";
import Navbar from "./components/navBar";
import NotFound from "./components/notFound";
import auth from "./services/authService";
import "./App.css";
import API from "./utils/API";

class App extends Component {
  state = {
    classroom: {},
    attendances: [],
    classroomId: "",
    classDate: ""
  };

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  handleClassroomIdChange = id => {
    this.setState({ classroomId: id });
  };

  handleViewClassroom = classroomId => {
    API.viewClassroom(classroomId)
      .then(res => {
        this.setState({
          classroom: res.data
        });
      })
      .catch(err => console.log(err));
  };

  loadAttendances = (classroomId, classDate) => {
    API.getAttendances(classroomId, classDate)
      .then(res =>
        this.setState({
          attendances: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleAllCheckIn = (classroomId, classDate) => {
    API.updateAttendancesCheckIn(classroomId, classDate)
      .then(res => {
        this.loadAttendances(classroomId, classDate);
      })
      .catch(err => console.log(err));
  };

  handleAllCheckOut = (classroomId, classDate) => {
    API.updateAttendancesCheckOut(classroomId, classDate)
      .then(res => {
        this.setState({
          attendances: res.data
        });
      })
      .catch(err => console.log(err));
  };

  handleToggleStudent = attendanceId => {
    API.updateAttendanceToggle(attendanceId)
      .then(res => {
        this.setState({
          attendances: res.data
        });
      })
      .catch(err => console.log(err));
  };
  render() {
    const { classroomId, user } = this.state;

    return (
      <Router>
        <React.Fragment>
          <Navbar user={user} />
          <main className="container">
            <Switch>
              <Route path="/welcome" component={Welcome} />
              <Route path="/register" component={RegisterForm} />
              <Route path="/login" component={LoginForm} />
              <Route path="/logout" component={Logout} />
              <Route path="/teachers" component={Teachers} />
              <Route path="/students" component={Students} />
              <Route path="/assignments" component={Assignments} />

              <Route
                path="/classrooms"
                render={props => (
                  <Classrooms
                    {...props}
                    classroomId={this.state.classroomId}
                    user={this.state.user}
                  />
                )}
              />

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
