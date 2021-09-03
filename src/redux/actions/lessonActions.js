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