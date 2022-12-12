/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'

let displayCampus = (student) => {
  if (student.campus) {
    return (
      <>
        <Typography gutterBottom variant="h6" component="div">
          {'College: ' + student.campus.name}
        </Typography>
      </>
    )
  } else {
    return (
      <Typography gutterBottom variant="h6" component="div">
        Not Enrolled in College
      </Typography>
    )
  }
}
const StudentView = (props) => {
  const { student } = props

  // Render a single Student view
  return (
    <>
      <Typography variant="h3">Student View</Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="180"
            image={student.imageURL}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {student.firstname + ' ' + student.lastname}
            </Typography>
            {displayCampus(student)}
            <Typography variant="body2" color="text.secondary">
              {'GPA: ' + student.gpa}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {'Email: ' + student.email}
            </Typography>
          </CardContent>
          <Link to={'/students'}>Back</Link>
        </Card>
      </Box>
    </>
  )
}

export default StudentView
