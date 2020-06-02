import Http from './../shared/api'
import { getAPIUrl } from './../shared/environment/'

const http = new Http(getAPIUrl());

export const ADD_ADMINS = 'ADD_ADMINS';
export const ADD_ADMINS_FULFILLED = 'ADD_ADMINS_FULFILLED';
export const GET_ADMINS_LIST = 'GET_ADMINS_LIST';
export const GET_ADMINS_LIST_FULFILLED = 'GET_ADMINS_LIST_FULFILLED';
export const GET_ADMINS_DETAILS = 'GET_ADMINS_DETAILS';
export const GET_ADMINS_DETAILS_FULFILLED = 'GET_ADMINS_DETAILS_FULFILLED';
export const UPDATE_ADMINS_DETAILS_FULFILLED = 'UPDATE_ADMINS_DETAILS_FULFILLED'
export const UPDATE_ADMINS_DETAILS = 'UPDATE_ADMINS_DETAILS';
export const DELETE_ADMINS_DETAILS_FULFILLED = 'DELETE_ADMINS_DETAILS_FULFILLED'
export const DELETE_ADMINS_DETAILS = 'DELETE_ADMINS_DETAILS';



export const addAdmin = queryParams =>
    ({ payload: http.post('admin/add', queryParams), type: ADD_ADMINS });
export const AdminList = queryParams =>
    ({ payload: http.get('admin/', queryParams), type: GET_ADMINS_LIST });
export const getAdminDetails = (id, queryParams) =>
    ({ payload: http.get(`admin/${id}`, queryParams), type: GET_ADMINS_DETAILS });
export const updateAdmin = (Id, queryParams) => ({
    payload: http.put(`admin/${Id}`, queryParams), type: UPDATE_ADMINS_DETAILS
})
export const deleteAdmin = (Id, queryParams) => ({
    payload: http.get(`admin/${Id}`, queryParams), type: DELETE_ADMINS_DETAILS
})