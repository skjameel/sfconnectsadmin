import Http from './../shared/api'
import { getAPIUrl } from './../shared/environment/'

const http = new Http(getAPIUrl());

export const ADD_SECTIONS = 'ADD_SECTIONS';
export const ADD_SECTIONS_FULFILLED = 'ADD_SECTIONS_FULFILLED';
export const GET_SECTIONS_LIST = 'GET_SECTIONS_LIST';
export const GET_SECTIONS_LIST_FULFILLED = 'GET_SECTIONS_LIST_FULFILLED';
export const GET_SECTIONS_DETAILS = 'GET_SECTIONS_DETAILS';
export const GET_SECTIONS_DETAILS_FULFILLED = 'GET_SECTIONS_DETAILS_FULFILLED';
export const UPDATE_SECTIONS_DETAILS_FULFILLED = 'UPDATE_SECTIONS_DETAILS_FULFILLED'
export const UPDATE_SECTIONS_DETAILS = 'UPDATE_SECTIONS_DETAILS';
export const DELETE_SECTIONS_DETAILS_FULFILLED = 'DELETE_SECTIONS_DETAILS_FULFILLED'
export const DELETE_SECTIONS_DETAILS = 'DELETE_SECTIONS_DETAILS';


export const addSections = queryParams =>
    ({ payload: http.post('section/add', queryParams), type: ADD_SECTIONS });
export const SectionsList = queryParams =>
    ({ payload: http.get('section/', queryParams), type: GET_SECTIONS_LIST });
export const getSectionsDetails = (id, queryParams) =>
    ({ payload: http.get(`section/${id}`, queryParams), type: GET_SECTIONS_DETAILS });
export const updateSections = (Id, queryParams) => ({
    payload: http.put(`section/${Id}`, queryParams), type: UPDATE_SECTIONS_DETAILS
})
export const deleteSections = (Id, queryParams) => ({
    payload: http.get(`section/${Id}`, queryParams), type: DELETE_SECTIONS_DETAILS
})