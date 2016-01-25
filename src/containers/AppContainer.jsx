import React, { PropTypes, Component } from 'react'

export default class AppContainer extends Component{

  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { children } = this.props

    return (
      <div>
        {children}
      </div>
    )
  }
}
