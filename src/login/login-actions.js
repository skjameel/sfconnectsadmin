import Http from './../shared/api'
import { getAPIUrl } from './../shared/environment/'

const http = new Http(getAPIUrl());

export const GET_LOGIN = 'GET_LOGIN';
export const GET_LOGIN_FULFILLED = 'GET_LOGIN_FULFILLED';
// export const ADD_USER = 'ADD_USER';
// export const ADD_USER_FULFILLED = 'ADD_USER_FULFILLED';


export const getLogin  = queryParams =>
({ payload: http.get('users/', queryParams), type: GET_LOGIN });
// export const addUser  = queryParams =>
// ({ payload: http.post('users/add', queryParams), type: ADD_USER });