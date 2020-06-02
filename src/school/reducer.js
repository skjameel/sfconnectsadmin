import {
    GET_SCHOOLS_LIST_FULFILLED,
    GET_SCHOOLS_DETAILS_FULFILLED,
    DELETE_SCHOOLS_DETAILS_FULFILLED
  } from './actions'
  
  export default function (
    state = {
        SchoolList: [],
        SchoolDetails: {},
        deleteSchool:{},
    },
    action,
  ) {
    console.log("actions", action.type)
    switch (action.type) {
      case GET_SCHOOLS_LIST_FULFILLED:
        state = {
          ...state,
          SchoolList: action.payload.data,
        }
        break
      case GET_SCHOOLS_DETAILS_FULFILLED:
        state = {
          ...state,
          SchoolDetails: action.payload.data,
        }
        break
        case DELETE_SCHOOLS_DETAILS_FULFILLED:
        state = {
          ...state,
          deleteSchool: false,
        }
        break
      default:
        break
    }
    return state
  }