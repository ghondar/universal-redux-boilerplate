import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import Root from './containers/Root.jsx'
import createRoutes from './routes/routes.jsx'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
const routes = createRoutes(React, history)

render(
  <Root store={store} server={window ? window.BOOTSTRAP_CLIENT_STATE : {}}>{routes}</Root>,
  document.getElementById('root')
)
