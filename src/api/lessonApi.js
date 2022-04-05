import { handleResponse, handleError, getHeaders } from "./apiUtils";

const lessonUrl = 'https://benlessonapp.herokuapp.com';

export function getLessons() {
  return fetch(`${lessonUrl}/getWeeklySchedule`, {
    headers: getHeaders()
  })
    .then(handleResponse)
    .catch(handleError)
};

export function requestLesson(lessonRequest) {
  return fetch(`${lessonUrl}/requestLesson`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(lessonRequest)
  })
    .then(handleResponse)
    .catch(handleError)
}

export function getLessonRequests() {
  return fetch(`${lessonUrl}/getLessonRequests`, {
    headers: getHeaders()
  })
    .then(handleResponse)
    .catch(handleError);
};

export function acceptLessonRequest(lessonId) {
  return fetch(`${lessonUrl}/scheduleLesson/${lessonId}`, {
    method: "PUT",
    headers: getHeaders(),
  })
    .then(handleResponse)
    .catch(handleError)
};