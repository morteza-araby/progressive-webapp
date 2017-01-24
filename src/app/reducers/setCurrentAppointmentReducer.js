import * as types from 'actionTypes'

export default function setCurrentAppointmentReducer(state = {}, action) {
  switch (action.type) {
    case types.CURRENT_APPOINTMENT:
      return {...state, ...action.currentAppointment }
    default:
      return state
  }
}