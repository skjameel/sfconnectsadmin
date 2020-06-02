import Http from './../shared/api'
import { getAPIUrl } from './../shared/environment/'

const http = new Http(getAPIUrl());

export const ADD_SUPERADMINS = 'ADD_SUPERADMINS';
export const ADD_SUPERADMINS_FULFILLED = 'ADD_SUPERADMINS_FULFILLED';
export const GET_SUPERADMINS_LIST = 'GET_SUPERADMINS_LIST';
export const GET_SUPERADMINS_LIST_FULFILLED = 'GET_SUPERADMINS_LIST_FULFILLED';
export const GET_SUPERADMINS_DETAILS = 'GET_SUPERADMINS_DETAILS';
export const GET_SUPERADMINS_DETAILS_FULFILLED = 'GET_SUPERADMINS_DETAILS_FULFILLED';
export const UPDATE_SUPERADMINS_DETAILS_FULFILLED = 'UPDATE_SUPERADMINS_DETAILS_FULFILLED'
export const UPDATE_SUPERADMINS_DETAILS = 'UPDATE_SUPERADMINS_DETAILS';
export const DELETE_SUPERADMINS_DETAILS_FULFILLED = 'DELETE_SUPERADMINS_DETAILS_FULFILLED'
export const DELETE_SUPERADMINS_DETAILS = 'DELETE_SUPERADMINS_DETAILS';


export const addSuperAdmin = queryParams =>
    ({ payload: http.post('superadmin/add', queryParams), type: ADD_SUPERADMINS });
export const SuperAdminList = queryParams =>
    ({ payload: http.get('superadmin/', queryParams), type: GET_SUPERADMINS_LIST });
export const getSuperAdminDetails = (id, queryParams) =>
    ({ payload: http.get(`superadmin/${id}`, queryParams), type: GET_SUPERADMINS_DETAILS });
export const updateSuperAdmin = (Id, queryParams) => ({
    payload: http.put(`superadmin/${Id}`, queryParams), type: UPDATE_SUPERADMINS_DETAILS
})
export const deleteSuperAdmin = (Id, queryParams) => ({
    payload: http.get(`superadmin/${Id}`, queryParams), type: DELETE_SUPERADMINS_DETAILS
})