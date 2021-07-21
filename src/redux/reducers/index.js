import { combineReducers } from 'redux';

import lessons from './lessonReducer';
import users from './userReducers';

export default combineReducers({ lessons, users })