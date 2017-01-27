import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, browserHistory, hashHistory } from "react-router"
import * as  actions from 'Actions'
import routes from './routes'
import { configureStore } from 'configureStore'

//import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//Load app styles
import './assets/css/bootstrap_custom.css'
import './assets/css/app.css'
//import './styles/app.scss'

//import AppLocalBootstrapActions from 'app_local'
//const runtime = require('offline-plugin/runtime');


var store = configureStore()
store.subscribe(() => {
  var state = store.getState()  
  console.log('Current State: ', state)
})

store.dispatch(actions.startSetData())

//Register service worker with browser, supported only in chrome
if('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(function() {
        console.log('Service Worker Active');
      })
  }

// runtime.install({
//   onUpdating: () => {
//     console.log('SW Event:', 'onUpdating');
//   },
//   onUpdateReady: () => {
//     console.log('SW Event:', 'onUpdateReady');
//     // Tells to new SW to take control immediately
//     runtime.applyUpdate();
//   },
//   onUpdated: () => {
//     console.log('SW Event:', 'onUpdated');
//     // Reload the webpage to load into the new version
//     window.location.reload();
//   },

//   onUpdateFailed: () => {
//     console.log('SW Event:', 'onUpdateFailed');
//   }
// });

//require('offline-plugin/runtime').install(); // eslint-disable-line global-require

//AppLocalBootstrapActions.initApp()
// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
  , document.getElementById('app'));
