import { combineReducers } from 'redux';
import setDataReducer from './setDataReducer'

const rootReducer = combineReducers({
  data: setDataReducer
});

export default rootReducer;
