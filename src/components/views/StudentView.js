/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */

import { Link } from 'react-router-dom'
let displayCampus = (student) => {
  if (student.campus) {
    return <h3>{'College: ' + student.campus.name}</h3>
  } else {
    return <h3>Not Enrolled in college</h3>
  }
}
const StudentView = (props) => {
  const { student } = props

  // Render a single Student view
  return (
    <div>
      <h1>{student.firstname + ' ' + student.lastname}</h1>
      {displayCampus(student)}
      <h3>{'GPA: ' + student.gpa}</h3>
      <h3>{'Email: ' + student.email}</h3>
      <img
        src={student.imageURL}
        alt="student images"
        style={{ height: 185, width: 185 }}
      />
      <br />
      <Link to={'/students'}>Back</Link>
    </div>
  )
}

export default StudentView
