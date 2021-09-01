import { Button, Container, TextField } from '@material-ui/core';
import React from 'react';
import { Component } from 'react';

class LoginPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  handleTextChange = (e) => {
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  render() {
    return (
      <Container maxWidth="sm">
      <form onSubmit={() => this.props.LoginUser()}>
        <TextField 
        required
        onChange = {this.handleTextChange}
        value={this.state.username}
        name="username"
        label="Username"
        type="text" />
        <TextField 
        required
        onChange = {this.handleTextChange}
        value={this.state.password}
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
}

export default LoginPage;