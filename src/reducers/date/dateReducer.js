import { CHANGE_DATE } from '../../actions/types'
import { formatDate } from '../../helpers'

export const dateInitialState = {
  date: typeof formatDate === 'undefined' ?
    '0000-00-00' : // For testing
    formatDate(new Date()),
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
