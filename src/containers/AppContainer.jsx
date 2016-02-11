import React, { PropTypes, Component } from 'react'

export default class AppContainer extends Component{

  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { children } = this.props
    const { server } = this.context

    return (
      <div>
        {React.cloneElement(children, server)}
      </div>
    )
  }
}

AppContainer.contextTypes = {
  server: PropTypes.object
}
