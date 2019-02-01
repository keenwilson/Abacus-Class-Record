import React from "react";

function ListMissingStudents(props) {
  const attendanceList = props.attendanceList;
  let studentsMissing = [];

  for (let i = 0; i < attendanceList.length; i++) {
    if (attendanceList[i].isPresent === false) {
      let studentName =
        attendanceList[i].studentId.firstName +
        " " +
        attendanceList[i].studentId.lastName;
      studentsMissing.push(studentName);
      console.log(studentsMissing);
    }
  }

  const studentList = studentsMissing.map((person, i) => (
    <li key={"person_" + i}>{person}</li>
  ));

  return <ul>{studentList}</ul>;
}

export default ListMissingStudents;
