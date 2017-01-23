import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, browserHistory, hashHistory } from "react-router"
import * as  actions from 'Actions'
import routes from './routes'
import { configureStore } from 'configureStore'

import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//Load app styles
import './assets/css/bootstrap_custom.css'
import './assets/css/app.css'
//import './styles/app.scss'

//import AppLocalBootstrapActions from 'app_local'

var store = configureStore()
store.subscribe(() => {
  var state = store.getState()  
  console.log('Current State: ', state)
})

store.dispatch(actions.startSetData())

//AppLocalBootstrapActions.initApp()
// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
  , document.getElementById('app'));
