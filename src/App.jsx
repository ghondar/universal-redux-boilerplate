import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import configureStore from './store/configureStore'
import Root from './containers/Root.jsx'
import createRoutes from './routes/routes.jsx'

const store = configureStore()
const routes = createRoutes(React, browserHistory)

render(
  <Root store={store}>{routes}</Root>,
  document.getElementById('root')
)
