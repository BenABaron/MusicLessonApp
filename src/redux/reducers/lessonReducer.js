import * as ActionTypes from '../actions/actionTypes';

export function lessons(state = [], action) {
  switch (action.type) {
    case ActionTypes.LOAD_LESSONS_SUCCESS:
      return action.lessons;
    default:
      return state;
  }
}

export function lessonRequests(state = [], action) {
  switch (action.type) {
    case ActionTypes.GET_LESSON_REQUESTS_SUCCESS:
      return action.lessonRequests;
    case ActionTypes.ACCEPT_LESSON_REQUEST_SUCCESS:
      return state.filter((l) => l.lesson_id !== action.lessonId);
    default:
      return state;
  }
};