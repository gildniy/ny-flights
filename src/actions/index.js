// TYPES:
export const CHANGE_CURRENCY = 'CHANGE_CURRENCY'
export const CONVERT_CURRENCY = 'CONVERT_CURRENCY'
export const GET_ALL_FLIGHTS = 'GET_ALL_FLIGHTS'
export const GET_PLACES = 'GET_PLACES'
export const CHANGE_ORIGIN = 'CHANGE_ORIGIN'
export const CHANGE_DESTINATION = 'CHANGE_DESTINATION'
export const CHANGE_PARTIAL_DATE = 'CHANGE_PARTIAL_DATE'
export const THROW_ERROR = 'THROW_ERROR'

// ACTIONS:
export const changeCurrencyAction = currency => ({
  type: CHANGE_CURRENCY,
  payload: currency,
})

export const convertCurrencyAction = (rates, to) => ({
  type: CONVERT_CURRENCY,
  payload: {
    rate: rates[to]['rate'],
    name: rates[to]['currency_name'],
  },
})

export const getAllFlightsAction = (Quotes, Carriers) => ({
  type: GET_ALL_FLIGHTS,
  payload: Quotes ? Quotes.map(q => ({
    id: q['QuoteId'],
    minPrice: q['MinPrice'],
    carrier: Carriers.find(
      c => c['CarrierId'] === q['OutboundLeg']['CarrierIds'][0])['Name'],
    departureDate: q['OutboundLeg']['DepartureDate'].split('T')[0],
    departureTime: q['OutboundLeg']['DepartureDate'].split('T')[1],
  })) : [],
})

export const getPlacesAction = Places => ({
  type: GET_PLACES,
  payload: Places.map(p => ({
    id: p['PlaceId'],
    name: p['PlaceName'],
  })),
})

export const changeAction = event => ({
  type: 'CHANGE_' + event.target.name.toUpperCase(),
  payload: event.target.value,
})

export const throwErrorAction = error => ({
  type: THROW_ERROR,
  payload: { error },
})
