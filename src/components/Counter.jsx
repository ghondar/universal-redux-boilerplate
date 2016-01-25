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
        <button onClick={::this._handleIncrement}>Aumentar</button>
        {/*<span>{counterStore.count}</span>*/}
        <button onClick={::this._handleDecrement}>Disminuir</button>
        <button onClick={this._handleClick.bind(this)}>Hola mundo</button>
        <Link to='/home'>Home</Link>
      </div>
    )
  }

  _handleClick() {
    console.log('hola')
  }

  _handleIncrement() {
    const { increment } = this.props
    increment()
  }

  _handleDecrement() {
    const { decrement } = this.props
    decrement()
  }
}
