import * as ActionTypes from '../actions/actionTypes';

export default function userReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.LOAD_ALL_USERS_SUCCESS:
      return action.users;
    default:
      return state;
  }
}