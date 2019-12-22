import { CHANGE_PARTIAL_DATE } from '../../actions/types'
import { formatDate } from '../../helpers/helpers'

const dateInitialState = {
  date: typeof formatDate === 'undefined' ?
    '0000-00-00' : // For testing
    formatDate(new Date()),
}

const dateReducer = (state = dateInitialState, action) => {
  switch (action.type) {
    case CHANGE_PARTIAL_DATE:
      return { ...state, date: action.payload }
    default:
      return state
  }
}
export { dateReducer, dateInitialState }
