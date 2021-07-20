import { handleResponse, handleError } from "./apiUtils";

const lessonUrl = 'https://benlessonapp.herokuapp.com';

export function getLessons() {
  return fetch(lessonUrl).then(handleResponse).catch(handleError);
};

export function gettAllUsers() {
  return fetch(`${lessonUrl}/getAllUsers`).then(handleResponse).catch(handleError);
}