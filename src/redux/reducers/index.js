import { combineReducers } from 'redux';

import { lessons, lessonRequests } from './lessonReducer';
import user from './userReducers';

export default combineReducers({ lessons, lessonRequests, user })