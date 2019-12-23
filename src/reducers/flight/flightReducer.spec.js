import { flightInitialState, flightReducer } from './flightReducer'
import { GET_ALL_FLIGHTS, GET_PLACES } from '../../actions'

describe('Flight Reducer', () => {
  test('returns the initial state', () => {
    expect(flightReducer(undefined, {})).toEqual(flightInitialState)
  })

  test(GET_ALL_FLIGHTS, () => {
    const flightsData = [
      {
        id: '1',
        minPrice: '0',
        carrier: 'xxx',
        departureDate: '2019-12-24',
        departureTime: '00:00',
      }]
    expect(flightReducer(flightInitialState, {
      type: GET_ALL_FLIGHTS,
      payload: flightsData,
    })).toEqual({ flights: flightsData, places: [] })
  })

  test(GET_PLACES, () => {
    expect(flightReducer(flightInitialState, {
      type: GET_PLACES,
      payload: [{ id: '1', name: 'xxx' }],
    })).toEqual({ flights: [], places: [{ id: '1', name: 'xxx' }] })
  })
})
