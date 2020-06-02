import Http from './../shared/api'
import { getAPIUrl } from './../shared/environment/'

const http = new Http(getAPIUrl());

export const ADD_SCHOOLS = 'ADD_SCHOOLS';
export const ADD_SCHOOLS_FULFILLED = 'ADD_SCHOOLS_FULFILLED';
export const GET_SCHOOLS_LIST = 'GET_SCHOOLS_LIST';
export const GET_SCHOOLS_LIST_FULFILLED = 'GET_SCHOOLS_LIST_FULFILLED';
export const GET_SCHOOLS_DETAILS = 'GET_SCHOOLS_DETAILS';
export const GET_SCHOOLS_DETAILS_FULFILLED = 'GET_SCHOOLS_DETAILS_FULFILLED';
export const UPDATE_SCHOOLS_DETAILS_FULFILLED = 'UPDATE_SCHOOLS_DETAILS_FULFILLED'
export const UPDATE_SCHOOLS_DETAILS = 'UPDATE_SCHOOLS_DETAILS';
export const DELETE_SCHOOLS_DETAILS_FULFILLED = 'DELETE_SCHOOLS_DETAILS_FULFILLED'
export const DELETE_SCHOOLS_DETAILS = 'DELETE_SCHOOLS_DETAILS';


export const addSchool = queryParams =>
    ({ payload: http.post('school/add', queryParams), type: ADD_SCHOOLS });
export const SchoolList = queryParams =>
    ({ payload: http.get('school/', queryParams), type: GET_SCHOOLS_LIST });
export const getSchoolDetails = (id, queryParams) =>
    ({ payload: http.get(`school/${id}`, queryParams), type: GET_SCHOOLS_DETAILS });
export const updateSchool = (Id, queryParams) => ({
    payload: http.put(`school/${Id}`, queryParams), type: UPDATE_SCHOOLS_DETAILS
})
export const deleteSchool = (Id, queryParams) => ({
    payload: http.get(`school/${Id}`, queryParams), type: DELETE_SCHOOLS_DETAILS
})