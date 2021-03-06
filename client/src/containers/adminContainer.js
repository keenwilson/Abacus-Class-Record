import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AdminHome from "../components/views/admin/AdminHome";
import AdminAssignments from "../components/views/admin/AdminAssignments";
import AdminClassrooms from "../components/views/admin/AdminClassrooms";
import AdminStudents from "../components/views/admin/AdminStudents";
import AdminTeachers from "../components/views/admin/AdminTeachers";
import AdminNav from "../components/views/admin/AdminNav";

class AdminContainer extends Component {
  state = {};
  render() {
    return (
      <div className="app-background">
        <h1>This is admin container</h1>
        <AdminNav />
        <Switch>
          <Route exact path="/admin/" component={AdminHome} />
          <Route exact path="/admin/assignments" component={AdminAssignments} />
          <Route exact path="/admin/classrooms" component={AdminClassrooms} />
          <Route exact path="/admin/students" component={AdminStudents} />
          <Route exact path="/admin/teachers" component={AdminTeachers} />
        </Switch>
      </div>
    );
  }
}

export default AdminContainer;
