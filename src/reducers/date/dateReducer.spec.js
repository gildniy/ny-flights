import { dateInitialState, dateReducer } from './dateReducer'
import { CHANGE_PARTIAL_DATE } from '../../actions/types'

describe('Date Reducer', () => {
  test('returns the initial state', () => {
    expect(dateReducer(undefined, {})).toEqual(dateInitialState)
  })
  test('CHANGE_PARTIAL_DATE', () => {
    expect(dateReducer(dateInitialState, {
      type: CHANGE_PARTIAL_DATE,
      payload: {
        date: '2019-12-24',
      },
    })).toEqual({
      date: {
        date: '2019-12-24',
      },
    })
  })
});
