import Http from './../shared/api'
import { getAPIUrl } from './../shared/environment/'

const http = new Http(getAPIUrl());

export const ADD_SUBJECTS = 'ADD_SUBJECTS';
export const ADD_SUBJECTS_FULFILLED = 'ADD_SUBJECTS_FULFILLED';
export const GET_SUBJECTS_LIST = 'GET_SUBJECTS_LIST';
export const GET_SUBJECTS_LIST_FULFILLED = 'GET_SUBJECTS_LIST_FULFILLED';
export const GET_SUBJECTS_DETAILS = 'GET_SUBJECTS_DETAILS';
export const GET_SUBJECTS_DETAILS_FULFILLED = 'GET_SUBJECTS_DETAILS_FULFILLED';
export const UPDATE_SUBJECTS_DETAILS_FULFILLED = 'UPDATE_SUBJECTS_DETAILS_FULFILLED'
export const UPDATE_SUBJECTS_DETAILS = 'UPDATE_SUBJECTS_DETAILS';
export const DELETE_SUBJECTS_DETAILS_FULFILLED = 'DELETE_SUBJECTS_DETAILS_FULFILLED'
export const DELETE_SUBJECTS_DETAILS = 'DELETE_SUBJECTS_DETAILS';


export const addSubjects = queryParams =>
    ({ payload: http.post('subject/add', queryParams), type: ADD_SUBJECTS });
export const SubjectsList = queryParams =>
    ({ payload: http.get('subject/', queryParams), type: GET_SUBJECTS_LIST });
export const getSubjectsDetails = (id, queryParams) =>
    ({ payload: http.get(`subject/${id}`, queryParams), type: GET_SUBJECTS_DETAILS });
export const updateSubjects = (Id, queryParams) => ({
    payload: http.put(`subject/${Id}`, queryParams), type: UPDATE_SUBJECTS_DETAILS
})
export const deleteSubjects = (Id, queryParams) => ({
    payload: http.get(`subject/${Id}`, queryParams), type: DELETE_SUBJECTS_DETAILS
})