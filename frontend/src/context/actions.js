import {
  AUTH_ERROR,
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOADING_ACTION,
  STOP_ACTION,
} from './types';

import { https, AuthHeader } from '../services/ApiConfig';

import { toast } from 'react-toastify';

export const registerUser = (dispatch, data, isEnterprise = false, isGoogle = false) => {
  const path = isEnterprise
    ? isGoogle
      ? 'api/enterprise/google'
      : 'api/enterprise/'
    : isGoogle
    ? 'api/electronika/google'
    : 'api/electronika/';
  dispatch({ type: LOADING_ACTION });
  https
    .post(path, data)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch({ type: STOP_ACTION });
      toast.success('Bienvenido');
    })
    .catch((err) => {
      dispatch({
        type: AUTH_ERROR,
      });
      dispatch({ type: STOP_ACTION });
      if (err.response.data.token) toast.error(err.response.data.token.join());
      if (err.response.data.non_field_errors)
        toast.error(err.response.data.non_field_errors.join());
    });
};

export const login = (dispatch, data, isGoogle = false) => {
  dispatch({ type: USER_LOADING });
  const path = isGoogle ? 'api/auth/login/google' : 'api/auth/login';
  dispatch({ type: LOADING_ACTION });
  https
    .post(path, {}, { headers: { Authorization: 'Basic ' + data } })
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch({ type: STOP_ACTION });
      toast.success('Bienvenido');
    })
    .catch((err) => {
      dispatch({
        type: AUTH_ERROR,
      });
      dispatch({ type: STOP_ACTION });
      if (err.response.data.token) toast.error(err.response.data.token.join());
      if (err.response.data.non_field_errors)
        toast.error(err.response.data.non_field_errors.join());
    });
};

export function getUser(dispatch) {
  dispatch({ type: USER_LOADING });
  https
    .get('api/auth/user', AuthHeader())
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: AUTH_ERROR,
      });
    });
}

export function logout(dispatch) {
  dispatch({ type: USER_LOADING });
  https
    .post('api/auth/logout', null, AuthHeader())
    .then((res) => {
      dispatch({ type: LOGOUT_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
    });
}
