
import { Container, Typography, Button, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
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

function HomePage(props) {

  const classes = useStyles();

  const [quote, setQuote] = useState('')

  useEffect(() => {

    if (quote === '') {
      fetch('https://quotes.rest/qod/students')
      .then(res => res.json())
      .then(response => setQuote(response));
    }
  })

  return (
    <Container className={classes.root} maxWidth='xl'>
      <Typography variant="h1" className={classes.child}>Welcome to the Gabe's Lessons!</Typography>
      <Typography variant='body1' className={classes.child}>{quote.contents?.quotes[0].quote} - {quote.contents?.quotes[0].author}</Typography>
      <Typography variant="h4" className={classes.child}>If you would like to request lessons, click below!</Typography>
      <Button variant='contained' color="primary" component={Link} to={process.env.PUBLIC_URL + '/request'} className={classes.child}>Request lessons</Button>
      <Typography variant="h4" className={classes.child}>Teachers can get their schedules and accept lessons by clicking below!</Typography>
      <Button variant='contained' color="primary" component={Link} to={process.env.PUBLIC_URL + '/dashboard'} className={classes.child}>Teacher Link</Button>
    </Container>
  )
}

export default HomePage;