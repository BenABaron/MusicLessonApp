import * as authApi from '../../api/authApi';
import * as actionTypes from './actionTypes';

export function loginUser(user) {
  return function (dispatch) {
    return authApi
      .login(user)
      .then((userAccount) => dispatch(loginUserSuccess(userAccount)))
      .catch((error) => console.log(error));
  };
};

export function loginUserSuccess(user) {
  return {
    type: actionTypes.LOGIN_USER_SUCCESS,
    user
  }
}

export function createUser(user) {
  return function (dispatch) {
    return authApi
      .createUser(user)
      .then((userAccount) => dispatch(createUserSuccess(userAccount)))
      .catch((error) => console.log(error))
  };
}

export function createUserSuccess(user) {
  return {
    type: actionTypes.CREATE_USER_SUCCESS,
    user
  };
}