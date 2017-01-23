import * as types from 'actionTypes'

export default function setDataReducer(state = {}, action) {
  switch (action.type) {
    case types.SET_DATA:
      return {...state, ...action.data }
    default:
      return state
  }
}