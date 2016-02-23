import { INCREMENT, DECREMENT } from '../constants/ActionTypes'
import { REHYDRATE } from 'redux-persist/constants'

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

    case REHYDRATE:
      var incoming = action.payload.counterStore

      if (incoming) {
        return {
          ...state,
          ...incoming
        }
      }

      return state
    default: {
      return state
    }
  }
}
