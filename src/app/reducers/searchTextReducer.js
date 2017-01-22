import * as types from 'actionTypes'

export default function searchTextReducer(state = '', action) {
  switch (action.type) {
    case types.SET_SEARCH_TEXT:
      return action.searchText
    default:
      return state
  }
}