import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../actions/counterActions'

import Counter from '../components/Counter.jsx'

@connect(state => state)
export default class CounterContainer extends Component{

  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { dispatch, counterStore, history } = this.props

    return (
      <Counter
        history={history}
        counterStore={counterStore}
        {...bindActionCreators(counterActions, dispatch)}/>
    )
  }
}
