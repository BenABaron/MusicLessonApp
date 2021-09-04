
import { Container, Typography, Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage(props) {

  return (
    <Container>
      <Typography variant="h1">Welcome to the Home Page!</Typography>
      <Typography variant="h3">If you would like to request lessons, click below!</Typography>
      <Button component={Link} to={process.env.PUBLIC_URL + '/request'}>Request lessons</Button>
      <Typography variant="h3">Teachers can get their schedules and accept lessons by clicking below!</Typography>
      <Button>Teacher Link (not working)</Button>
    </Container>
  )
}

export default HomePage;