import React from "react";

function CountStudents(props) {
  const attendanceList = props.attendanceList;
  let studentsPresent = 0;

  for (let i = 0; i < attendanceList.length; i++) {
    if (attendanceList[i].isPresent === true) {
      studentsPresent++;
    }
  }

  return <span>{studentsPresent}</span>;
}

export default CountStudents;
