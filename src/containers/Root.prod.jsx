import React, { PropTypes, Component } from 'react'
import { Provider } from 'react-redux'

export default class Root extends Component{
  render() {
    const { store, children } = this.props

    return (
      <Provider store={store}>
        {children}
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
