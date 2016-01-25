import { combineReducers } from 'redux'
import { routerStateReducer as router } from 'redux-router'
import counterStore from './counterStore'

const rootReducer = combineReducers({
  router,
  counterStore
})

export default rootReducer
