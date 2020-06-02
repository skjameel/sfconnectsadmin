import {
    GET_CITIES_LIST_FULFILLED,
    GET_CITIES_DETAILS_FULFILLED,
    DELETE_CITIES_DETAILS_FULFILLED
  } from './actions'
  
  export default function (
    state = {
        CityList: [],
        CityDetails: {},
        deleteCity:{},
    },
    action,
  ) {
    console.log("actions", action.type)
    switch (action.type) {
      case GET_CITIES_LIST_FULFILLED:
        state = {
          ...state,
          CityList: action.payload.data,
        }
        break
      case GET_CITIES_DETAILS_FULFILLED:
        state = {
          ...state,
          CityDetails: action.payload.data,
        }
        break
        case DELETE_CITIES_DETAILS_FULFILLED:
        state = {
          ...state,
          deleteSections: false,
        }
        break
      default:
        break
    }
    return state
  }