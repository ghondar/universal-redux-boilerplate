import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { syncHistory, routeReducer } from 'react-router-redux'
import { browserHistory } from 'react-router'
import DevTools from '../containers/DevTools.jsx'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import * as reducers from '../reducers'

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}))

// const reduxRouterMiddleware = syncHistory(browserHistory)

const finalCreateStore = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
)(createStore)

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState)
  // reduxRouterMiddleware.listenForReplays(store)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
