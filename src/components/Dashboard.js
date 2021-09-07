import { Button, Container, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard(props) {
  return (
    <Container>
      <Typography variant="h1">Welcome to the Teacher Dashboard!</Typography>
      <Typography variant="h3">To see any lessons that have been requested, click below.</Typography>
      <Button component={Link} to={process.env.PUBLIC_URL + '/acceptLessons'}>Accept Lesson Requests</Button>
      <Typography variant="h3">To see all accepted lessons, click below.</Typography>
      <Button component={Link} to={process.env.PUBLIC_URL + '/allLessons'}>See All Lessons</Button>
    </Container>
  )
}

export default Dashboard;