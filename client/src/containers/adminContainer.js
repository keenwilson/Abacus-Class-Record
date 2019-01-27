import React, { Component } from "react";
import { Switch, Route,Redirect } from "react-router-dom";
import AdminHome from "../components/views/admin/AdminHome";
import AdminAssignments from "../components/views/admin/AdminAssignments";
import AdminClassrooms from "../components/views/admin/AdminClassrooms";
import AdminStudents from "../components/views/admin/AdminStudents";
import AdminTeachers from "../components/views/admin/AdminTeachers";
import AdminNav from "../components/views/admin/AdminNav";

class AdminContainer extends Component {
  state = {};
  render() {
    console.log('Admin');
    return (
      <div>
        <h2>Admin</h2>
        <AdminNav />
        <Switch>
        <Route exact path="/admin/" component={AdminHome} />
          <Route exact path="/admin/assignments" component={AdminAssignments} />
         <Route exact path="/admin/classrooms" component={AdminClassrooms} />
          <Route exact path="/admin/students" component={AdminStudents} />
          <Route exact path="/admin/teachers" component={AdminTeachers} />
          <Redirect to={{
            state: { error: true }
          }} />
        </Switch>
      </div>
    );
  }
}


export default AdminContainer;
