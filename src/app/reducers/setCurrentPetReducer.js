import * as types from 'actionTypes'

export default function setCurrentPetReducer(state = {}, action) {
  switch (action.type) {
    case types.CURRENT_PET:
      return {...state, ...action.currentPet }
    default:
      return state
  }
}