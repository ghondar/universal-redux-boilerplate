import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { routerReducer } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import * as reducers from '../reducers'

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}))

const finalCreateStore = compose(
  applyMiddleware(thunk)
)(createStore)

export default function configureStore(initialState) {
  return finalCreateStore(reducer, initialState)
}
