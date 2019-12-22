import { placeReducer, placesInitialState } from './placeReducer'
import { CHANGE_DESTINATION, CHANGE_ORIGIN } from '../../actions/types'

describe('Place Reducer', () => {
  test('returns the initial state', () => {
    expect(placeReducer(undefined, {})).toEqual(placesInitialState)
  })
  test(CHANGE_ORIGIN, () => {
    expect(placeReducer(placesInitialState, {
      type: CHANGE_ORIGIN,
      payload: 'xxx',
    })).toEqual({ from: 'xxx', to: 'JFK-sky' })
  })

  test(CHANGE_DESTINATION, () => {
    expect(placeReducer(placesInitialState, {
      type: CHANGE_DESTINATION,
      payload: 'xxx',
    })).toEqual({ from: 'NYCA-sky', to: 'xxx' })
  })
});
