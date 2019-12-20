import { CHANGE_CURRENCY, CONVERT_CURRENCY } from '../actions/types'

export const currencyInitialState = {
  currency: 'USD',
  converted: {
    rate: 1,
    name: '',
  },
}

const currencyReducer = (state = currencyInitialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY:
      return { ...state, currency: action.payload }
    case CONVERT_CURRENCY:
      return { ...state, converted: action.payload }
    default:
      return state
  }
}
export default currencyReducer
