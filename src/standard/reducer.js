 import {
  GET_STANDARDS_LIST_FULFILLED,
  GET_STANDARDS_DETAILS_FULFILLED,
  UPDATE_STANDARDS_DETAILS_FULFILLED,
  DELETE_STANDARDS_DETAILS_FULFILLED
} from './actions'

export default function (
  state = {
    StandardsList: [],
    StandardsDetails: {},
    updateStandards:{},
    deleteStandards:[]
  },
  action,
) {
  console.log("actions", action.type)
  switch (action.type) {
    case GET_STANDARDS_LIST_FULFILLED:
      state = {
        ...state,
        StandardsList: action.payload.data,
      }
      break
    case GET_STANDARDS_DETAILS_FULFILLED:
      state = {
        ...state,
        StandardsDetails: action.payload.data,
      }
      break
      case UPDATE_STANDARDS_DETAILS_FULFILLED:
      state = {
        ...state,
        updateStandards: action.payload.data,
      }
      break
      case DELETE_STANDARDS_DETAILS_FULFILLED:
      state = {
        ...state,
        deleteStandards: false,
      }
      break
    default:
      break
  }
  return state
}