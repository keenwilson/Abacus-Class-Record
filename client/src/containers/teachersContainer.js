import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import TeacherNav from "../components/views/teacher/TeacherNav";
import TeacherHome from "../components/views/teacher/TeacherHome";
import TeacherAssignments from "../components/views/teacher/TeacherAssignments";
import TeacherAttendance from "../components/views/teacher/TeacherAttendance";
import TeacherGrades from "../components/views/teacher/TeacherGrades";
import API from "../utils/API";

class TeacherContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classrooms: [],
      students: [],
      teacher: "",
      currentClassroom: ""
    };
    this.getClassroomsData = this.getClassroomsData.bind(this);
    this.changeClassroom = this.changeClassroom.bind(this);
    this.getTeacherInfo = this.getTeacherInfo.bind(this);
    this.getStudentsInfo = this.getStudentsInfo.bind(this);
    this.refreshClassroom = this.refreshClassroom.bind(this);
  }

  componentDidMount() {
    this.getClassroomsData();
  }

  getClassroomsData() {
    API.getClassrooms()
      .then(res => {
        this.setState({
          classrooms: res.data
        });
      })
      .catch(err => console.log(err));
  }

  async changeClassroom(classroomId) {
    await API.getClassroom(classroomId)
      .then(res => {
        this.setState({
          currentClassroom: res.data,
          teacher: res.data.teacherId
        });
        // this.getTeacherInfo();
        this.getStudentsInfo();
        this.refreshClassroom();
      })
      .catch(err => console.log(err));
  }

  refreshClassroom() {
    this.setState({ refreshClassroom: !this.state.refreshClassroom });
  }

  getTeacherInfo() {
    const currentClassroom = this.state.currentClassroom;

    this.setState({
      teacher: currentClassroom.teacherId
    });
  }

  getStudentsInfo() {
    const currentClassroom = this.state.currentClassroom;
    this.setState({
      students: currentClassroom.studentsId
    });
  }

  render() {
    return (
      <div>
        <TeacherNav
          classrooms={this.state.classrooms}
          classroom={this.state.currentClassroom}
          onChange={this.changeClassroom}
        />

        <Switch>
          <Route
            path="/teacher/assignments"
            render={props => (
              <TeacherAssignments
                {...props}
                user={this.state.user}
                classroom={this.state.currentClassroom}
                teacher={this.state.teacher}
                students={this.state.students}
              />
            )}
          />
          <Route
            path="/teacher/attendance"
            render={props => (
              <TeacherAttendance
                {...props}
                user={this.state.user}
                classroom={this.state.currentClassroom}
                teacher={this.state.teacher}
                students={this.state.students}
                refresh={this.refreshClassroom}
              />
            )}
          />
          <Route
            path="/teacher/grades"
            render={props => (
              <TeacherGrades
                {...props}
                user={this.state.user}
                classroom={this.state.currentClassroom}
                teacher={this.state.teacher}
                students={this.state.students}
              />
            )}
          />
          <Route
            exact
            path="/teacher/"
            render={props => (
              <TeacherHome
                {...props}
                user={this.state.user}
                classroom={this.state.currentClassroom}
                currentTeacher={this.state.teacher}
                students={this.state.students}
                classrooms={this.state.classrooms}
                onChange={this.changeClassroom}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
export default TeacherContainer;
