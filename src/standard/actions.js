import Http from './../shared/api'
import { getAPIUrl } from './../shared/environment/'

const http = new Http(getAPIUrl());

export const ADD_STANDARDS = 'ADD_STANDARDS';
export const ADD_STANDARDS_FULFILLED = 'ADD_STANDARDS_FULFILLED';
export const GET_STANDARDS_LIST = 'GET_STANDARDS_LIST';
export const GET_STANDARDS_LIST_FULFILLED = 'GET_STANDARDS_LIST_FULFILLED';
export const GET_STANDARDS_DETAILS = 'GET_STANDARDS_DETAILS';
export const GET_STANDARDS_DETAILS_FULFILLED = 'GET_STANDARDS_DETAILS_FULFILLED';
export const UPDATE_STANDARDS_DETAILS_FULFILLED = 'UPDATE_STANDARDS_DETAILS_FULFILLED'
export const UPDATE_STANDARDS_DETAILS = 'UPDATE_STANDARDS_DETAILS';
export const DELETE_STANDARDS_DETAILS_FULFILLED = 'DELETE_STANDARDS_DETAILS_FULFILLED'
export const DELETE_STANDARDS_DETAILS = 'DELETE_STANDARDS_DETAILS';

export const addStandards = queryParams =>
    ({ payload: http.post('standard/add', queryParams), type: ADD_STANDARDS });
export const StandardsList = queryParams =>
    ({ payload: http.get('standard/', queryParams), type: GET_STANDARDS_LIST });
export const getStandardsDetails = (id, queryParams) =>
    ({ payload: http.get(`standard/${id}`, queryParams), type: GET_STANDARDS_DETAILS });
export const updateStandards = (id, queryParams) => ({
    payload: http.put(`standard/${id}`, queryParams), type: UPDATE_STANDARDS_DETAILS
});
export const deleteStandards = (id, queryParams) => ({
    payload: http.get(`standard/${id}`, queryParams), type: DELETE_STANDARDS_DETAILS
})