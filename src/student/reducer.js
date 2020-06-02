import {
    GET_STUDENTS_LIST_FULFILLED,
    GET_STUDENTS_DETAILS_FULFILLED,
    DELETE_STUDENTS_DETAILS_FULFILLED
  } from './actions'
  
  export default function (
    state = {
        StudentsList: [],
        StudentsDetails: {},
        deleteStudents: [],
    },
    action,
  ) {
    console.log("actions", action.type)
    switch (action.type) {
      case GET_STUDENTS_LIST_FULFILLED:
        state = {
          ...state,
          StudentsList: action.payload.data,
        }
        break
      case GET_STUDENTS_DETAILS_FULFILLED:
        state = {
          ...state,
          StudentsDetails: action.payload.data,
        }
        break
        case DELETE_STUDENTS_DETAILS_FULFILLED:
        state = {
          ...state,
          deleteStudents: false,
        }
        break
      default:
        break
    }
    return state
  }