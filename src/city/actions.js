import Http from './../shared/api'
import { getAPIUrl } from './../shared/environment/'

const http = new Http(getAPIUrl());

export const ADD_CITIES = 'ADD_CITIES';
export const ADD_CITIES_FULFILLED = 'ADD_CITIES_FULFILLED';
export const GET_CITIES_LIST = 'GET_CITIES_LIST';
export const GET_CITIES_LIST_FULFILLED = 'GET_CITIES_LIST_FULFILLED';
export const GET_CITIES_DETAILS = 'GET_CITIES_DETAILS';
export const GET_CITIES_DETAILS_FULFILLED = 'GET_CITIES_DETAILS_FULFILLED';
export const UPDATE_CITIES_DETAILS_FULFILLED = 'UPDATE_CITIES_DETAILS_FULFILLED'
export const UPDATE_CITIES_DETAILS = 'UPDATE_CITIES_DETAILS';
export const DELETE_CITIES_DETAILS_FULFILLED = 'DELETE_CITIES_DETAILS_FULFILLED'
export const DELETE_CITIES_DETAILS = 'DELETE_CITIES_DETAILS';


export const addCity = queryParams =>
    ({ payload: http.post('city/add', queryParams), type: ADD_CITIES });
export const CityList = queryParams =>
    ({ payload: http.get('city/', queryParams), type: GET_CITIES_LIST });
export const getCityDetails = (id, queryParams) =>
    ({ payload: http.get(`city/${id}`, queryParams), type: GET_CITIES_DETAILS });
export const updateCity = (Id, queryParams) => ({
    payload: http.put(`city/${Id}`, queryParams), type: UPDATE_CITIES_DETAILS
})
export const deleteCity = (Id, queryParams) => ({
    payload: http.get(`city/${Id}`, queryParams), type: DELETE_CITIES_DETAILS
})