import {
    GET_PARENTS_LIST_FULFILLED,
    GET_PARENTS_DETAILS_FULFILLED,
    DELETE_PARENTS_DETAILS_FULFILLED
  } from './actions'
  
  export default function (
    state = {
        ParentList: [],
        ParentDetails: {},
        deleteParent: {},
        
    },
    action,
  ) {
    console.log("actions", action.type)
    switch (action.type) {
      case GET_PARENTS_LIST_FULFILLED:
        state = {
          ...state,
          ParentList: action.payload.data,
        }
        break
      case GET_PARENTS_DETAILS_FULFILLED:
        state = {
          ...state,
          ParentDetails: action.payload.data,
        }
        break
        case DELETE_PARENTS_DETAILS_FULFILLED:
        state = {
          ...state,
          deleteParent: false,
        }
        break
      default:
        break
    }
    return state
  }