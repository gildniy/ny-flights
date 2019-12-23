import {
  GET_ALL_FLIGHTS,
  GET_PLACES,
  getAllFlightsAction,
  getPlacesAction,
} from './index'

describe('actions types', () => {
  test('getAllFlightsAction', () => {
    const Carriers = [
      {
        CarrierId: '111',
        Name: 'xxx',
      }]
    const Quotes = [
      {
        QuoteId: '1',
        MinPrice: '0',
        OutboundLeg: {
          CarrierIds: ['111'],
          DepartureDate: '2019-12-24T00:00',
        },
      }]
    expect(getAllFlightsAction(Quotes, Carriers)).toEqual({
      type: GET_ALL_FLIGHTS,
      payload: [
        {
          id: '1',
          minPrice: '0',
          carrier: 'xxx',
          departureDate: '2019-12-24',
          departureTime: '00:00',
        },
      ],
      },
    )
    expect(getAllFlightsAction(null, Carriers)).
      toEqual({ type: GET_ALL_FLIGHTS, payload: [] })
  })

  test('getPlacesAction', () => {
    const Places = [{ PlaceId: '1', PlaceName: 'xxx' }]
    expect(getPlacesAction(Places)).toEqual({
      type: GET_PLACES,
      payload: [{ id: '1', name: 'xxx' }],
    })
  })
})
