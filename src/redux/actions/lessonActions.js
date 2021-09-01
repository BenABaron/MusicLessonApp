import * as ActionTypes from './actionTypes';
import * as lessonApi from '../../api/lessonApi';

export function loadLessons() {
  return function (dispatch) {
    return lessonApi.getLessons()
      .then((lessonsFromApi) => dispatch(loadLessonsSuccess(lessonsFromApi)))
      .catch((error) => console.log(error))
  }
};

export function loadLessonsSuccess(lessons) {
  return {
    type: ActionTypes.LOAD_LESSONS_SUCCESS,
    lessons
  }
};

export function loadAllUsers() {
  return function (dispatch) {
    return lessonApi.getAllUsers()
      .then((usersFromApi) => dispatch(loadAllUsersSuccess(usersFromApi)))
      .catch((error) => console.log(error))
  }
};

export function loadAllUsersSuccess(users) {
  return {
    type: ActionTypes.LOAD_ALL_USERS_SUCCESS,
    users
  }
};