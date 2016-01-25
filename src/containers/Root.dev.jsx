import React, { Component } from 'react'
import { Provider } from 'react-redux'
import DevTools from './DevTools.jsx'
import Layout from '../components/Layout.jsx'
import configureStore from '../store/configureStore'

const store = configureStore()

export default class Root extends Component{
  render() {
    return (
      <Provider store={store}>
        <Layout>
          {this.props.children}
          <DevTools />
        </Layout>
      </Provider>
    )
  }
}
