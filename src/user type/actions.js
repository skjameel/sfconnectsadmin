import Http from './../shared/api'
import { getAPIUrl } from './../shared/environment/'

const http = new Http(getAPIUrl());

export const ADD_USERTYPE = 'ADD_USERTYPE';
export const ADD_USERTYPE_FULFILLED = 'ADD_USERTYPE_FULFILLED';
export const GET_USERTYPE_LIST = 'GET_USERTYPE_LIST';
export const GET_USERTYPE_LIST_FULFILLED = 'GET_USERTYPE_LIST_FULFILLED';
export const GET_USERTYPE_DETAILS = 'GET_USERTYPE_DETAILS';
export const GET_USERTYPE_DETAILS_FULFILLED = 'GET_USERTYPE_DETAILS_FULFILLED';
export const UPDATE_USERTYPE_DETAILS_FULFILLED = 'UPDATE_USERTYPE_DETAILS_FULFILLED'
export const UPDATE_USERTYPE_DETAILS = 'UPDATE_USERTYPE_DETAILS';
export const DELETE_USERTYPE_DETAILS_FULFILLED = 'DELETE_USERTYPE_DETAILS_FULFILLED'
export const DELETE_USERTYPE_DETAILS = 'DELETE_USERTYPE_DETAILS';


export const addUsertype = queryParams =>
    ({ payload: http.post('usertype/add', queryParams), type: ADD_USERTYPE });
export const UsertypeList = queryParams =>
    ({ payload: http.get('usertype/', queryParams), type: GET_USERTYPE_LIST });
export const getUsertypeDetails = (id, queryParams) =>
    ({ payload: http.get(`usertype/${id}`, queryParams), type: GET_USERTYPE_DETAILS });
export const updateUsertype = (Id, queryParams) => ({
    payload: http.put(`usertype/${Id}`, queryParams), type: UPDATE_USERTYPE_DETAILS
})
export const deleteUsertype = (Id, queryParams) => ({
    payload: http.get(`usertype/${Id}`, queryParams), type: DELETE_USERTYPE_DETAILS
})