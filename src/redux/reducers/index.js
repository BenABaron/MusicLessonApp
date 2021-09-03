import { combineReducers } from 'redux';

import lessons from './lessonReducer';
import user from './userReducers';

export default combineReducers({ lessons, user })