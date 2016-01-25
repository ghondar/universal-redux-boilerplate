import { INCREMENT, DECREMENT } from '../constants/ActionTypes'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}
