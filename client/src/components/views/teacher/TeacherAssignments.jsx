import React, { Component } from "react";
import AssignmentCard from "../../assignmentCard";
import API from "../../../utils/API";
import SelectTypes from "../../selectTypes";
import _ from "lodash";

class TeacherAssignments extends Component {
  constructor(props) {
    const css = require("./assets/css/home.css").toString();

    super(props);
    console.log("assignments", props);
    this.state = {
      classroom: props.classroom,
      assignmentTypes: [
        "Paper",
        "Homework",
        "Quiz",
        "Classwork",
        "Project",
        "Journal"
      ],
      selectedType: null,
      assignments: []
    };
    this.getAssignmentData = this.getAssignmentData.bind(this);
  }

  componentDidMount() {
    try {
      this.getAssignmentData();
    } catch (error) {
      console.log(error);
    }
  }
  async getAssignmentData() {
    const classroomId = this.state.classroom._id;

    await API.getAssignments(classroomId)
      .then(res => {
        console.log(res.data);
        this.setState(
          {
            assignments: res.data
          },
          () => {
            console.log(
              "Get assignments data and update state:",
              this.state.assignments
            );
          }
        );
      })
      .catch(err => console.log(err));
  }

  handleClick(assignmentId) {
    console.log("Assignment with this id is clicked:", assignmentId);
  }

  handleTypeSelect = assignmentType => {
    if (assignmentType === "all") {
      this.setState({ selectedType: null });
    } else {
      this.setState({ selectedType: assignmentType });
    }
  };

  getDisplayData = () => {
    const { selectedType, assignments: allAssignments } = this.state;

    let filtered = allAssignments;
    if (selectedType)
      filtered = allAssignments.filter(a => a.assignmentType === selectedType);

    const sorted = _.orderBy(filtered, "assignmentName", "asc");

    return { totalCount: filtered.length, assignments: sorted };
  };
  render() {
    const { length: count } = this.state.assignments;
    if (count === 0) return <p>There are no assignments in the database.</p>;
    const { totalCount, assignments } = this.getDisplayData();
    return (
      <React.Fragment>
        <style>${this.css}</style>
        <div className="filter-container">
          <div className="filter-flex-card">
            <SelectTypes
              items={this.state.assignmentTypes}
              selectedItem={this.state.selectedType}
              onItemSelect={this.handleTypeSelect}
            />
            <p className="class-title">
              Showing {totalCount} assignments in the database.
            </p>
          </div>
        </div>
        <div className="abacus-container">
          {this.state.assignments &&
            assignments.map((item, i) => (
              <AssignmentCard
                key={item._id}
                assignmentId={item._id}
                assignmentName={item.assignmentName}
                assignmentType={item.assignmentType}
                assignmentDesc={item.assignmentDesc}
                maxScore={item.maxScore}
                dueDate={item.dueDate}
                value={item._id}
                onClick={this.handleClick}
              />
            ))}
        </div>
      </React.Fragment>
    );
  }
}

export default TeacherAssignments;
