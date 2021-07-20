import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';

const Router = () => {
  return (
    <Switch>
      <Route path='/home' component={HomePage}/>
      <Route path='/login' component={LoginPage}/>
    </Switch>
  )
}

export default Router;