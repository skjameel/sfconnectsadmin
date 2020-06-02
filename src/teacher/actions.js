import Http from './../shared/api'
import { getAPIUrl } from './../shared/environment/'

const http = new Http(getAPIUrl());

export const ADD_TEACHERS = 'ADD_TEACHERS';
export const ADD_TEACHERS_FULFILLED = 'ADD_TEACHERS_FULFILLED';
export const GET_TEACHERS_LIST = 'GET_TEACHERS_LIST';
export const GET_TEACHERS_LIST_FULFILLED = 'GET_TEACHERS_LIST_FULFILLED';
export const GET_TEACHERS_DETAILS = 'GET_TEACHERS_DETAILS';
export const GET_TEACHERS_DETAILS_FULFILLED = 'GET_TEACHERS_DETAILS_FULFILLED';
export const UPDATE_TEACHERS_DETAILS_FULFILLED = 'UPDATE_TEACHERS_DETAILS_FULFILLED'
export const UPDATE_TEACHERS_DETAILS = 'UPDATE_TEACHERS_DETAILS';
export const DELETE_TEACHERS_DETAILS_FULFILLED = 'DELETE_TEACHERS_DETAILS_FULFILLED'
export const DELETE_TEACHERS_DETAILS = 'DELETE_TEACHERS_DETAILS';

export const addTeacher = queryParams =>
    ({ payload: http.post('teacher/add', queryParams), type: ADD_TEACHERS });
export const TeacherList = queryParams =>
    ({ payload: http.get('teacher/', queryParams), type: GET_TEACHERS_LIST });
export const getTeacherDetails = (id, queryParams) =>
    ({ payload: http.get(`teacher/${id}`, queryParams), type: GET_TEACHERS_DETAILS });
export const updateTeacher = (Id, queryParams) => ({
    payload: http.put(`teacher/${Id}`, queryParams), type: UPDATE_TEACHERS_DETAILS
})
export const deleteTeacher = (Id, queryParams) => ({
    payload: http.get(`teacher/${Id}`, queryParams), type: DELETE_TEACHERS_DETAILS
})