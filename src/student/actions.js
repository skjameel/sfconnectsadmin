import Http from './../shared/api'
import { getAPIUrl } from './../shared/environment/'

const http = new Http(getAPIUrl());

export const ADD_STUDENTS = 'ADD_STUDENTS';
export const ADD_STUDENTS_FULFILLED = 'ADD_STUDENTS_FULFILLED';
export const GET_STUDENTS_LIST = 'GET_STUDENTS_LIST';
export const GET_STUDENTS_LIST_FULFILLED = 'GET_STUDENTS_LIST_FULFILLED';
export const GET_STUDENTS_DETAILS = 'GET_STUDENTS_DETAILS';
export const GET_STUDENTS_DETAILS_FULFILLED = 'GET_STUDENTS_DETAILS_FULFILLED';
export const UPDATE_STUDENTS_DETAILS_FULFILLED = 'UPDATE_STUDENTS_DETAILS_FULFILLED'
export const UPDATE_STUDENTS_DETAILS = 'UPDATE_STUDENTS_DETAILS';
export const DELETE_STUDENTS_DETAILS_FULFILLED = 'DELETE_STUDENTS_DETAILS_FULFILLED'
export const DELETE_STUDENTS_DETAILS = 'DELETE_STUDENTS_DETAILS';


export const addStudents = queryParams =>
    ({ payload: http.post('student/add', queryParams), type: ADD_STUDENTS });
export const StudentsList = queryParams =>
    ({ payload: http.get('student/', queryParams), type: GET_STUDENTS_LIST });
export const getStudentsDetails = (id, queryParams) =>
    ({ payload: http.get(`student/${id}`, queryParams), type: GET_STUDENTS_DETAILS });
export const updateStudents = (Id, queryParams) => ({
    payload: http.put(`student/${Id}`, queryParams), type: UPDATE_STUDENTS_DETAILS
})
export const deleteStudents = (Id, queryParams) => ({
    payload: http.get(`student/${Id}`, queryParams), type: DELETE_STUDENTS_DETAILS
})