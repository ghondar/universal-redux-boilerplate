import React, { PropTypes, Component } from 'react'
import { Provider } from 'react-redux'

export default class Root extends Component{

  getChildContext() {
    const { server } = this.props

    return {
      server
    }
  }

  render() {
    const { store, children } = this.props

    return (
      <Provider store={store}>
        {children}
      </Provider>
    )
  }
}

Root.defaultProps = {
  server: {}
}

Root.childContextTypes = {
  server: PropTypes.object
}

Root.propTypes = {
  store : PropTypes.object.isRequired,
  server: PropTypes.object
}

