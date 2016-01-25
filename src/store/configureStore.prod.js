import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { syncHistory, routeReducer } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import * as reducers from '../reducers'

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}))

const reduxRouterMiddleware = syncHistory(browserHistory)

const finalCreateStore = compose(
  applyMiddleware(thunk),
  applyMiddleware(reduxRouterMiddleware),
)(createStore)

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState)
  reduxRouterMiddleware.listenForReplays(store)

  return store
}
