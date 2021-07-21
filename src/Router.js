import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';

const Router = () => {
  return (
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage}/>
      <Route path={process.env.PUBLIC_URL + '/login'} component={LoginPage}/>
    </Switch>
  )
}

export default Router;