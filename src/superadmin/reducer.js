import {
  GET_SUPERADMINS_LIST_FULFILLED,
  GET_SUPERADMINS_DETAILS_FULFILLED,
  DELETE_SUPERADMINS_DETAILS_FULFILLED
  } from './actions'
  
  export default function (
    state = {
      SuperAdminList: [],
      SuperAdminDetails: {},
      deleteSuperAdmin:{},
    },
    action,
  ) {
    console.log("actions", action.type)
    switch (action.type) {
      case GET_SUPERADMINS_LIST_FULFILLED:
        state = {
          ...state,
          SuperAdminList: action.payload.data,
        }
        break
      case GET_SUPERADMINS_DETAILS_FULFILLED:
        state = {
          ...state,
          SuperAdminDetails: action.payload.data,
        }
        break
        case DELETE_SUPERADMINS_DETAILS_FULFILLED:
        state = {
          ...state,
          deleteSuperAdmin: false,
        }
        break
      default:
        break
    }
    return state
  }