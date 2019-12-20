import { CHANGE_DATE } from '../actions/types'
import { formatDate } from '../helpers'

export const dateInitialState = {
  date: formatDate(new Date()),
}

const dateReducer = (state = dateInitialState, action) => {
  switch (action.type) {
    case CHANGE_DATE:
      return { ...state, date: action.payload }
    default:
      return state
  }
}
export default dateReducer
