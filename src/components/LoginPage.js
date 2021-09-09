import { Button, Container, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  child: {
    marginBottom: '7pt',
    alignSelf: 'center',
    width: '300pt'
  },
  register: {
    marginTop: '40pt',
    width: '300pt',
    alignSelf: 'center'
  }
})

function LoginPage(props) {
  const classes = useStyles();

  const [user, setUser] = useState({email: '', password: ''});
  const [error, setError] = useState('');

  function handleInputChanges(event) {
    const { name, value } = event.target;

    setUser((previoususer) => ({
      ...previoususer,
      [name]: value
    }));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    document.cookie = 'loggedIn = true; max-age=600'
    props
      .loginUser(user)
      .then(() => props.history.push(process.env.PUBLIC_URL + '/'))
      .catch((error) => setError(error));
  }
  
  return (
    <Container maxWidth="sm" className={classes.root}>
      <div>{error}</div>
      <form onSubmit={handleFormSubmit} className={classes.root}>
        <TextField 
        required
        onChange = {handleInputChanges}
        value={user.email}
        name="email"
        label="Email"
        type="email" 
        className={classes.child}/>
        <TextField 
        required
        onChange = {handleInputChanges}
        value={user.password}
        name="password"
        label="Password"
        type="password" 
        className={classes.child}/>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.child}>Login
        </Button>
      </form>
      <Button variant='contained' color="primary" component={Link} to={process.env.PUBLIC_URL + '/register'} className={classes.register}>Register</Button>
    </Container>
  )

}

export default LoginPage;