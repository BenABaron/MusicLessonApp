import * as ActionTypes from '../actions/actionTypes';

export default function lessonReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.LOAD_LESSONS_SUCCESS:
      return action.lessons;
    default:
      return state;
  }
}