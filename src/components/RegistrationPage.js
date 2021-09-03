import React, { useState } from 'react';
import { Button, Container, TextField } from '@material-ui/core';

function RegistrationPage(props) {

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
      <form onSubmit={handleFormSubmit}>
        <TextField 
        required
        onChange = {handleInputChanges}
        value={newUser.first_name}
        name="first_name"
        label="First_Name"
        type="text" />
        <TextField 
        required
        onChange = {handleInputChanges}
        value={newUser.last_name}
        name="last_name"
        label="Last_Name"
        type="text" />
        <TextField 
        required
        onChange = {handleInputChanges}
        value={newUser.email}
        name="email"
        label="Email"
        type="email" />
        <TextField 
        required
        onChange = {handleInputChanges}
        value={newUser.password}
        name="password"
        label="Password"
        type="password" />
        <TextField 
        required
        onChange = {handleInputChanges}
        value={newUser.confirm_password}
        name="confirm_password"
        label="Confirm_Password"
        type="password" />
        <Button
          type="submit"
          className="login-button"
          variant="contained"
          color="primary">Register
        </Button>
      </form>
    </Container>
  )

}

export default RegistrationPage;