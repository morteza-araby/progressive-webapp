import { combineReducers } from 'redux';
import dataReducer from './setDataReducer'
import currentPetReducer from './setCurrentPetReducer'
import currentAppointmentReducer from './setCurrentAppointmentReducer'

const rootReducer = combineReducers({
  data: dataReducer,
  currentPet: currentPetReducer,
  currentAppointment: currentAppointmentReducer
});

export default rootReducer;
