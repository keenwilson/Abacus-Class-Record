import React, { Component } from "react";
import AssignmentCard from "../../assignmentCard";
import API from '../../../utils/API'
class TeacherAssignments extends Component {
  constructor(props) {
    const css = require('./assets/css/navbar.css').toString();

    super(props);
    this.state = {
      classrooms: props.classrooms,
      classroom: props.classroom,
      currentTeacher: props.currentTeacher,
      students: props.students,
      assignments:[]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    API.getAssignment(function(err,res){
      if(err) {console.log(err)}else{
      res.map(this.state)
      console.log(res)
      }
    })
  }

  handleChange(classroomId) {
    this.props.onChange(classroomId);
  }

  render() {
    return (
      <React.Fragment>
        <style>${this.css}</style>
        <div className="assignment-container">
          <div className="row">
            {this.props.students.map((classroom,students, i) => (
              <AssignmentCard
                key={classroom._id}
                name={students._id}
                value={classroom._id}
                classroom={classroom}
                students={classroom.assignments}
                onChange={this.handleChange}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TeacherAssignments;
