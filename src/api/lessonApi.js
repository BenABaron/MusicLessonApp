import { handleResponse, handleError, getHeaders } from "./apiUtils";

const lessonUrl = 'https://benlessonapp.herokuapp.com';

export function getLessons() {
  return fetch(lessonUrl).then(handleResponse).catch(handleError);
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