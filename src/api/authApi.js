import { handleResponse, handleError, storeTokenOnLocalStorage } from './apiUtils';

const authUrl = 'https://benlessonapp.herokuapp.com';

export function login(user) {
  return fetch(`${authUrl}/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .then(storeTokenOnLocalStorage)
    .catch(handleError);
}

export function createUser(newUser) {
  return fetch (`${authUrl}/createUser`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newUser)
  })
    .then(handleResponse)
    .then(storeTokenOnLocalStorage)
    .catch(handleError);
}