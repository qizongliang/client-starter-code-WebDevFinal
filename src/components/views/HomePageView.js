/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import * as React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@material-ui/core/CardActionArea'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    margin: '30px',
  },
})

const HomePageView = () => {
  // Render Home page view
  const classes = useStyles()
  return (
    <>
      <Grid
        container
        justify="center"
        style={{ minHeight: '100vh', maxWidth: '100%' }}
      >
        {/* Two card of the homepage */}
        <Grid item xs={6} align="center" spacing={30}>
          <Link to={'/students'} style={{ textDecoration: 'none' }}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="cunyStudents"
                  height="800"
                  image="https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/global/diversity.jpg"
                  title="cunyStudents"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    All Students
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Click to see all students
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={6} align="center">
          <Link to={'/campuses'} style={{ textDecoration: 'none' }}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="cunyStudents"
                  height="800"
                  image="https://macaulay.cuny.edu/wp-content/uploads/2016/07/qc10_bg_000056-1920x1080.jpg"
                  title="cunyStudents"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    All Campuses
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Click to see all Campuses
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </>
  )
}

export default HomePageView
