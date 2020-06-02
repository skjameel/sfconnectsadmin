import {
  GET_ADMINS_LIST_FULFILLED,
  GET_ADMINS_DETAILS_FULFILLED,
  DELETE_ADMINS_DETAILS_FULFILLED
  } from './actions'
  
  export default function (
    state = {
      AdminList: [],
      AdminDetails: {},
      deleteAdmin:{},
    },
    action,
  ) {
    console.log("actions", action.type)
    switch (action.type) {
      case GET_ADMINS_LIST_FULFILLED:
        state = {
          ...state,
          AdminList: action.payload.data,
        }
        break
      case GET_ADMINS_DETAILS_FULFILLED:
        state = {
          ...state,
          AdminDetails: action.payload.data,
        }
        break
        case DELETE_ADMINS_DETAILS_FULFILLED:
          state = {
            ...state,
            deleteAdmin: false,
          }
          break
      default:
        break
    }
    return state
  }