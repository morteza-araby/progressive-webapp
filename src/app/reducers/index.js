import { combineReducers } from 'redux';
import setDataReducer from './setDataReducer'
import setCurrentPetReducer from './setCurrentPetReducer'

const rootReducer = combineReducers({
  data: setDataReducer,
  currentPet: setCurrentPetReducer
});

export default rootReducer;
