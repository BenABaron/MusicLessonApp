import { TheatersRounded } from '@material-ui/icons';
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