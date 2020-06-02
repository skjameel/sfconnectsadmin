import {
  GET_USERS_LIST_FULFILLED,
  GET_USERS_DETAILS_FULFILLED,
  DELETE_USERS_DETAILS_FULFILLED,
  } from './actions'
  
  export default function (
    state = {
      UsersList: [],
      UsersDetails: {},
      deleteUsersDetails:{},
    },
    action,
  ) {
    console.log("actions", action.type)
    switch (action.type) {
      case GET_USERS_LIST_FULFILLED:
        state = {
          ...state,
          UsersList: action.payload.data,
        }
        break
      case GET_USERS_DETAILS_FULFILLED:
        state = {
          ...state,
          UsersDetails: action.payload.data,
        }
        break
        case DELETE_USERS_DETAILS_FULFILLED:
      state = {
        ...state,
        deleteUsersDetails: false,
      }
      break
      default:
        break
    }
    return state
  }