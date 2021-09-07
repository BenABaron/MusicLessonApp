import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import RegistrationPage from './containers/RegistrationPage';
import LessonRequestPage from './containers/LessonRequestPage';
import Dashboard from './containers/Dashboard';
import AcceptLessonRequests from './containers/AcceptLessonRequests';
import LessonSchedulePage from './containers/LessonSchedulePage';

import cookie from 'cookie';
const jwt = require('jsonwebtoken');

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies['loggedIn'] ? true : false
}

const checkAuthTeacher = () => {
  const cookies = cookie.parse(document.cookie);
  if (cookies['loggedIn']) {
    const token = localStorage.getItem('token')

    const decoded = jwt.verify(token, 'superSecretLessonApp');

    let role = decoded.role;

    if (role === 'teacher') {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// Write ProtectedRoute function here
const ProtectedStudentRoute = ({component: Component, ...rest}) => {
  return (
      <Route 
      {...rest}
      render={(props) => checkAuth() 
          ? <Component {...props} /> 
          : <Redirect to={process.env.PUBLIC_URL + '/login'} />}
      />
  )
}

const ProtectedTeacherRoute = ({component: Component, ...rest}) => {
  return (
      <Route 
      {...rest}
      render={(props) => checkAuthTeacher() 
          ? <Component {...props} /> 
          : <Redirect to={process.env.PUBLIC_URL + '/'} />}
      />
  )
}

const Router = () => {
  return (
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage}/>
      <Route path={process.env.PUBLIC_URL + '/login'} component={LoginPage}/>
      <Route path={process.env.PUBLIC_URL + '/register'} component={RegistrationPage}/>
      <ProtectedStudentRoute path={process.env.PUBLIC_URL + '/request'} component={LessonRequestPage}/>
      <ProtectedTeacherRoute path={process.env.PUBLIC_URL + '/dashboard'} component={Dashboard}/>
      <ProtectedTeacherRoute path={process.env.PUBLIC_URL + '/acceptLessons'} component={AcceptLessonRequests}/>
      <ProtectedTeacherRoute path={process.env.PUBLIC_URL + '/allLessons'} component={LessonSchedulePage}/>
    </Switch>
  )
}

export default Router;