import React, { PropTypes, Component } from 'react'

import Layout from '../components/Layout.jsx'

export default class AppContainer extends Component{

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <Layout>
        {React.cloneElement(this.props.children, { ...this.props })}
      </Layout>
    )
  }
}
