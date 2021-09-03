import * as ActionTypes from '../actions/actionTypes';

export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_SUCCESS:
      return { ...state, ...action.user}
    default:
      return state;
  }
}