import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
import ReduxPromise from "redux-promise"
import thunk from 'redux-thunk'
import reducers from 'Reducers'


export var configureStore = (initialState = {}) => {
  var store = createStore(reducers, initialState, compose(
    applyMiddleware(thunk, ReduxPromise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
}



