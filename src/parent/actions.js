import Http from './../shared/api'
import { getAPIUrl } from './../shared/environment/'

const http = new Http(getAPIUrl());

export const ADD_PARENTS = 'ADD_PARENTS';
export const ADD_PARENTS_FULFILLED = 'ADD_PARENTS_FULFILLED';
export const GET_PARENTS_LIST = 'GET_PARENTS_LIST';
export const GET_PARENTS_LIST_FULFILLED = 'GET_PARENTS_LIST_FULFILLED';
export const GET_PARENTS_DETAILS = 'GET_PARENTS_DETAILS';
export const GET_PARENTS_DETAILS_FULFILLED = 'GET_PARENTS_DETAILS_FULFILLED';
export const UPDATE_PARENTS_DETAILS_FULFILLED = 'UPDATE_PARENTS_DETAILS_FULFILLED'
export const UPDATE_PARENTS_DETAILS = 'UPDATE_PARENTS_DETAILS';
export const DELETE_PARENTS_DETAILS_FULFILLED = 'DELETE_PARENTS_DETAILS_FULFILLED'
export const DELETE_PARENTS_DETAILS = 'DELETE_PARENTS_DETAILS';


export const addParent = queryParams =>
    ({ payload: http.post('parent/add', queryParams), type: ADD_PARENTS });
export const ParentList = queryParams =>
    ({ payload: http.get('parent/', queryParams), type: GET_PARENTS_LIST });
export const getParentDetails = (id, queryParams) =>
    ({ payload: http.get(`parent/${id}`, queryParams), type: GET_PARENTS_DETAILS });
export const updateParent = (Id, queryParams) => ({
    payload: http.put(`parent/${Id}`, queryParams), type: UPDATE_PARENTS_DETAILS
})
export const deleteParent = (Id, queryParams) => ({
    payload: http.get(`parent/${Id}`, queryParams), type: DELETE_PARENTS_DETAILS
})