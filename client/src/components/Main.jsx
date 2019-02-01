import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Root Components
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import Oops from "./Oops";
import Register from "./Register";

// Admin Components
import AdminHome from "./views/admin/AdminHome";
import AdminNav from "./views/admin/AdminNav";
import AdminAssignments from "./views/admin/AdminAssignments";
import AdminClassrooms from "./views/admin/AdminClassrooms";
import AdminStudents from "./views/admin/AdminStudents";
import AdminTeachers from "./views/admin/AdminTeachers";

// Teacher Components
import TeacherHome from "./views/teacher/TeacherHome";
import TeacherNav from "./views/teacher/TeacherNav";
import TeacherAssignments from "./views/teacher/TeacherAssignments";
import TeacherAttendance from "./views/teacher/TeacherAttendance";
import TeacherGrades from "./views/teacher/TeacherGrades";

// Auth Components
import auth from "../services/authService";

class Main extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <main>
        <Switch>
          {/* Root Routes */}
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/register" component={Register} />

          {/* Admin Routes */}
          <AdminNav user={user} />
          <Route exact path="/admin/" component={AdminHome} />
          <Route exact path="/admin/assignments" component={AdminAssignments} />
          <Route exact path="/admin/classrooms" component={AdminClassrooms} />
          <Route exact path="/admin/students" component={AdminStudents} />
          <Route exact path="/admin/teachers" component={AdminTeachers} />

          {/* Teacher Routes */}
          <TeacherNav />
          <Route exact path="/teacher/" component={TeacherHome} />
          <Route
            exact
            path="/teacher/assignments"
            component={TeacherAssignments}
          />
          <Route
            exact
            path="/teacher/attendance"
            component={TeacherAttendance}
          />
          <Route exact path="/teacher/grades" component={TeacherGrades} />

          {/* Error Routes */}
          <Route path="/oops" component={Oops} />
          <Redirect to="/oops" />
        </Switch>
      </main>
    );
  }
}

export default Main;
