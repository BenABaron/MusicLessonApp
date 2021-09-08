import { Button, Container, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function LoginPage(props) {

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
    <Container maxWidth="sm">
      <div>{error}</div>
      <form onSubmit={handleFormSubmit}>
        <TextField 
        required
        onChange = {handleInputChanges}
        value={user.email}
        name="email"
        label="Email"
        type="email" />
        <TextField 
        required
        onChange = {handleInputChanges}
        value={user.password}
        name="password"
        label="Password"
        type="password" />
        <Button
          type="submit"
          className="login-button"
          variant="contained"
          color="primary">Login
        </Button>
      </form>
    </Container>
  )

}

export default LoginPage;