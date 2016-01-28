import React, { PropTypes, Component } from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import createRoutes from '../routes/routes.jsx'

const routes = createRoutes(React, browserHistory)

export default class Root extends Component{
  render() {
    const { store } = this.props

    return (
      <Provider store={store}>
        {routes}
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
