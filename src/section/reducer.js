import {
  GET_SECTIONS_LIST_FULFILLED,
  GET_SECTIONS_DETAILS_FULFILLED,
  // UPDATE_SECTIONS_DETAILS_FULFILLED,
 // DELETE_SECTIONS_DETAILS_FULFILLED
} from './actions'

export default function (
  state = {
    SectionsList: [],
    SectionsDetails: {},
    // updateSections:[],
    //deleteSections:{},
  },
  action,
) {
  console.log("actions", action.type)
  switch (action.type) {
    case GET_SECTIONS_LIST_FULFILLED:
      state = {
        ...state,
        SectionsList: action.payload.data,
      }
      break
    case GET_SECTIONS_DETAILS_FULFILLED:
      state = {
        ...state,
        SectionsDetails: action.payload.data,
      }
      break
      // case UPDATE_SECTIONS_DETAILS_FULFILLED:
      // state = {
      //   ...state,
      //   updateSections: action.payload.data,
      // }
      // break
      // case DELETE_SECTIONS_DETAILS_FULFILLED:
      // state = {
      //   ...state,
      //   deleteSections: false,
      // }
      // break
    default:
      break
  }
  return state
}