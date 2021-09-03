import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import RegistrationPage from './containers/RegistrationPage';

const Router = () => {
  return (
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage}/>
      <Route path={process.env.PUBLIC_URL + '/login'} component={LoginPage}/>
      <Route path={process.env.PUBLIC_URL + '/register'} component={RegistrationPage}/>
    </Switch>
  )
}

export default Router;