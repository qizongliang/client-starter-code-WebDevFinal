/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import CardMedia from '@mui/material/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@mui/material/Typography'

// Take in props data to construct the component
const CampusView = (props) => {
  const { campus } = props

  // Render a single Campus view with list of its students
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper elevation={3} sx={{ pl: 10, pr: 10, mb: 2, mt: 2 }}>
          <Typography variant="h2" align="center">
            {campus.name}
          </Typography>
          <CardMedia
            component="img"
            height="180"
            image={campus.imageURL}
            alt="green iguana"
          />
          <Typography variant="body2">{campus.address}</Typography>
          <Typography variant="body2">{campus.description}</Typography>
          <Link to={'/campuses'}>Back</Link>
        </Paper>
      </Box>

      <Typography variant="h4" align="center">
        Students
      </Typography>

      <Grid container spacing={0} direction="column" alignItems="center">
        {campus.students.map((student) => {
          let name = student.firstname + ' ' + student.lastname
          return (
            <>
              <Link
                sx={{ width: 380 }}
                item
                to={`/student/${student.id}`}
                style={{ textDecoration: 'none' }}
              >
                <Card sx={{ width: 380, mt: 2 }}>
                  <CardActionArea>
                    <CardContent>
                      <div key={student.id}>
                        <h2>{name}</h2>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </>
          )
        })}
      </Grid>
    </div>
  )
}

export default CampusView
