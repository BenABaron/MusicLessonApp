import { Button, Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  child: {
    marginTop: '30pt',
    alignSelf: 'center'
  }
})

function Dashboard(props) {

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h1" className={classes.child}>Teacher Dashboard</Typography>
      <Typography variant="h4" className={classes.child}>To see any lessons that have been requested, click below.</Typography>
      <Button variant='contained' color="primary" component={Link} to={process.env.PUBLIC_URL + '/acceptLessons'} className={classes.child}>Accept Lesson Requests</Button>
      <Typography variant="h4" className={classes.child}>To see all accepted lessons, click below.</Typography>
      <Button variant='contained' color="primary" component={Link} to={process.env.PUBLIC_URL + '/allLessons'} className={classes.child}>See All Lessons</Button>
    </Container>
  )
}

export default Dashboard;