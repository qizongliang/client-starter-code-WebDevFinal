/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */

import { Link } from 'react-router-dom'
let displayCampus = (student) => {
  if (student.campus) {
    return <h3>{student.campus.name}</h3>
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
      <br />
      <Link to={'/students'}>Back</Link>
    </div>
  )
}

export default StudentView
