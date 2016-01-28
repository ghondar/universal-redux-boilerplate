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

let finalCreateStore = null

if(process.env.SERVER) {
  if(process.env.PROD) {
    finalCreateStore = compose(
      applyMiddleware(thunk)
    )(createStore)
  }else {
    finalCreateStore = compose(
      applyMiddleware(thunk),
      DevTools.instrument()
    )(createStore)
  }
}else {
  const reduxRouterMiddleware = syncHistory(browserHistory)
  finalCreateStore = compose(
    applyMiddleware(thunk),
    applyMiddleware(reduxRouterMiddleware),
    applyMiddleware(createLogger()),
    DevTools.instrument()
  )(createStore)
}

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
