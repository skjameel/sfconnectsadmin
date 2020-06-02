import Http from '../shared/api'
import { getAPIUrl } from '../shared/environment'

const http = new Http(getAPIUrl());

export const ADD_USERS = 'ADD_USERS';
export const ADD_USERS_FULFILLED = 'ADD_USERS_FULFILLED';
export const GET_USERS_LIST = 'GET_USERS_LIST';
export const GET_USERS_LIST_FULFILLED = 'GET_USERS_LIST_FULFILLED';
export const GET_USERS_DETAILS = 'GET_USERS_DETAILS';
export const GET_USERS_DETAILS_FULFILLED = 'GET_USERS_DETAILS_FULFILLED';
export const UPDATE_USERS_DETAILS_FULFILLED = 'UPDATE_USERS_DETAILS_FULFILLED'
export const UPDATE_USERS_DETAILS = 'UPDATE_USERS_DETAILS';
export const DELETE_USERS_DETAILS_FULFILLED = 'DELETE_USERS_DETAILS_FULFILLED'
export const DELETE_USERS_DETAILS = 'DELETE_SUBJECTS_DETAILS';


export const addUsers = queryParams =>
    ({ payload: http.post('users/add', queryParams), type: ADD_USERS });
export const UsersList = queryParams =>
    ({ payload: http.get('users/', queryParams), type: GET_USERS_LIST });
export const getUsersDetails = (id, queryParams) =>
    ({ payload: http.get(`users/${id}`, queryParams), type: GET_USERS_DETAILS });
export const updateUsersDetails = (Id, queryParams) => ({
    payload: http.put(`users/${Id}`, queryParams), type: UPDATE_USERS_DETAILS
})
export const deleteUsersDetails = (Id, queryParams) => ({
    payload: http.get(`users/${Id}`, queryParams), type: DELETE_USERS_DETAILS
})