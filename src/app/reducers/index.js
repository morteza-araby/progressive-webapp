import { combineReducers } from 'redux';
import searchTextReducer from './searchTextReducer'

const rootReducer = combineReducers({
  serarchText: searchTextReducer
});

export default rootReducer;
