import { INCREMENT, DECREMENT } from '../constants/ActionTypes'

const initialState = {
  count: 0
}

export default function counterStore(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    default: {
      return state
    }
  }
}
