import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import * as reducers from '../reducers/index'

let createStoreWithMiddleware

// Configure the dev tools when in DEV mode
if (process.env.DEV) {
  let { persistState } = require('redux-devtools')
  let DevTools = require('../containers/DevTools.jsx')
  createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware),
    DevTools.instrument()
  )(createStore)
} else {
  createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
}

const rootReducer = combineReducers(reducers)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    )
  }

  return store
}
