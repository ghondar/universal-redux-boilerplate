import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

export default class Counter extends Component{

  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { counterStore, increment, decrement } = this.props

    return (
      <div>
        <button onClick={increment}>Aumentar</button>
        <span>{counterStore.count}</span>
        <button onClick={decrement}>Disminuir</button>
        <hr />
        <button onClick={::this._handleClick}>Ir a otra pagina</button>
      </div>
    )
  }

  _handleClick() {
    this.props.history.push('/home')
  }
}
