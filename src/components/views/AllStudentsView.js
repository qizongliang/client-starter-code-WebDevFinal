/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const AllStudentsView = (props) => {
  const { students, deleteStudent } = props
  // If there is no student, display a message
  if (!students.length) {
    return (
      <div>
        <p>There are no students.</p>
        <Link to={`newstudent`}>
          <button>Add New Student</button>
        </Link>
      </div>
    )
  }

  // If there is at least one student, render All Students view
  return (
    <div>
      <Typography variant="h3">All Students</Typography>
      <Grid container spacing={0} direction="column" alignItems="center">
        {students.map((student) => {
          let name = student.firstname + ' ' + student.lastname
          return (
            <>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: 350,
                  justifyContent: 'center',
                }}
              >
                <Paper elevation={3} sx={{ p: 2, mb: 2, mt: 2, width: 350 }}>
                  <div key={student.id}>
                    <Link to={`/student/${student.id}`}>
                      <h2>{name}</h2>
                    </Link>
                    <Grid container spacing={0}>
                      <Grid item xs={6}>
                        <Button
                          variant="outlined"
                          onClick={() => deleteStudent(student.id)}
                        >
                          Delete
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Link to={`/student/${student.id}/edit`}>
                          <Button variant="outlined">Edit</Button>
                        </Link>
                      </Grid>
                    </Grid>
                  </div>
                </Paper>
              </Box>
            </>
          )
        })}
      </Grid>
      <br />
      <Link to={`/newstudent`}>
        <Button variant="outlined">Add New Student</Button>
      </Link>
      <br />
      <br />
    </div>
  )
}

export default AllStudentsView
