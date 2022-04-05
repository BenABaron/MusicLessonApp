import * as ActionTypes from './actionTypes';
import * as lessonApi from '../../api/lessonApi';

export function loadLessons() {
  return function (dispatch) {
    return lessonApi
      .getLessons()
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

export function requestLesson(lessonRequest) {
  return function (dispatch) {
    return lessonApi
      .requestLesson(lessonRequest)
      .then((responseFromApi) => dispatch(requestLessonSuccess(responseFromApi)))
      .catch((error) => console.log(error))
  }
}

export function requestLessonSuccess(lessons) {
  return {
    type: ActionTypes.REQUEST_LESSON_SUCCESS,
    lessons
  }
};

export function getLessonRequests() {
  return function (dispatch) {
    return lessonApi
      .getLessonRequests()
      .then((lessonsFromApi) => dispatch(getLessonRequestsSuccess(lessonsFromApi)))
      .catch((error) => console.log(error));
  };
};

export function getLessonRequestsSuccess(lessonRequests) {
  return {
    type: ActionTypes.GET_LESSON_REQUESTS_SUCCESS,
    lessonRequests
  }
};

export function acceptLessonRequest(lessonId) {
  return function (dispatch) {
    return lessonApi
      .acceptLessonRequest(lessonId)
      .then(() => dispatch(acceptLessonRequestSuccess(lessonId)))
      .catch((error) => console.log(error));
  }
};

export function acceptLessonRequestSuccess(lessonId) {
  return {
    type: ActionTypes.ACCEPT_LESSON_REQUEST_SUCCESS,
    lessonId
  }
};