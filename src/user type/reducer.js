import {
  GET_USERTYPE_LIST_FULFILLED,
  GET_USERTYPE_DETAILS_FULFILLED,
  DELETE_USERTYPE_DETAILS_FULFILLED
  } from './actions'
  
  export default function (
    state = {
      UsertypeList: [],
      UsertypeDetails: {},
      deleteUsertype:{},
    },
    action,
  ) {
    console.log("actions", action.type)
    switch (action.type) {
      case GET_USERTYPE_LIST_FULFILLED:
        state = {
          ...state,
          UsertypeList: action.payload.data,
        }
        break
      case GET_USERTYPE_DETAILS_FULFILLED:
        state = {
          ...state,
          UsertypeDetails: action.payload.data,
        }
        break
        case DELETE_USERTYPE_DETAILS_FULFILLED:
        state = {
          ...state,
          deleteUsertype: false,
        }
        break
      default:
        break
    }
    return state
  }