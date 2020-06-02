import {
    GET_SUBJECTS_LIST_FULFILLED,
    GET_SUBJECTS_DETAILS_FULFILLED,
    // DELETE_SUBJECTS_DETAILS_FULFILLED
  } from './actions'
  
  export default function (
    state = {
        SubjectsList: [],
        SubjectsDetails: {},
        // deleteSubjects:[],
    },
    action,
  ) {
    console.log("actions", action.type)
    switch (action.type) {
      case GET_SUBJECTS_LIST_FULFILLED:
        state = {
          ...state,
          SubjectsList: action.payload.data,
        }
        break
      case GET_SUBJECTS_DETAILS_FULFILLED:
        state = {
          ...state,
          SubjectsDetails: action.payload.data,
        }
        break
        // case DELETE_SUBJECTS_DETAILS_FULFILLED:
        // state = {
        //   ...state,
        //   deleteSubjects: action.payload.data,
        // }
        // break
      default:
        break
    }
    return state
  }