import {
    GET_TEACHERS_LIST_FULFILLED,
    GET_TEACHERS_DETAILS_FULFILLED,
    DELETE_TEACHERS_DETAILS_FULFILLED
  } from './actions'
  
  export default function (
    state = {
        TeacherList: [],
        TeacherDetails: {},
        deleteTeacher:{},
    },
    action,
  ) {
    console.log("actions", action.type)
    switch (action.type) {
      case GET_TEACHERS_LIST_FULFILLED:
        state = {
          ...state,
          TeacherList: action.payload.data,
        }
        break
      case GET_TEACHERS_DETAILS_FULFILLED:
        state = {
          ...state,
          TeacherDetails: action.payload.data,
        }
        break
        case DELETE_TEACHERS_DETAILS_FULFILLED:
        state = {
          ...state,
          deleteTeacher: false,
        }
        break
      default:
        break
    }
    return state
  }