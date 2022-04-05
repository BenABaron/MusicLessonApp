import React, { useState } from 'react';
import { Button, Container, makeStyles, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  child: {
    marginBottom: '7pt',
    alignSelf: 'center',
    width: '300pt'
  }
})

function RegistrationPage(props) {

  const classes = useStyles();

  const [newUser, setNewUser] = useState({email: '', password: '', confirm_password: '', first_name: '', last_name: ''});
  const [error, setError] = useState('');

  function handleInputChanges(event) {
    const { name, value } = event.target;

    setNewUser((previousNewUser) => ({
      ...previousNewUser,
      [name]: value
    }));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    props
      .createUser(newUser)
      .then(() => props.history.push(process.env.PUBLIC_URL + '/login'))
      .catch((error) => setError(error));
  }

  return (
    <Container maxWidth="sm">
      <div>{error}</div>
      <Typography variant='h2' className={classes.child} style={{textAlign: 'center', margin: 'auto'}}>Register</Typography>
      <form onSubmit={handleFormSubmit} className={classes.root}>
        <TextField 
        required
        onChange = {handleInputChanges}
        value={newUser.first_name}
        name="first_name"
        label="First_Name"
        type="text" 
        className={classes.child}/>
        <TextField 
        required
        onChange = {handleInputChanges}
        value={newUser.last_name}
        name="last_name"
        label="Last_Name"
        type="text" 
        className={classes.child}/>
        <TextField 
        required
        onChange = {handleInputChanges}
        value={newUser.email}
        name="email"
        label="Email"
        type="email"
        className={classes.child} />
        <TextField 
        required
        onChange = {handleInputChanges}
        value={newUser.password}
        name="password"
        label="Password"
        type="password"
        className={classes.child} />
        <TextField 
        required
        onChange = {handleInputChanges}
        value={newUser.confirm_password}
        name="confirm_password"
        label="Confirm_Password"
        type="password"
        className={classes.child} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.child}>Register
        </Button>
      </form>
    </Container>
  )

}

export default RegistrationPage;