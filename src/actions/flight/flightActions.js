import { GET_ALL_FLIGHTS, GET_PLACES, THROW_ERROR } from '../types'
import { RAPID_API_KEY } from '../../../config/keys'

const init = {
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    'x-rapidapi-key': RAPID_API_KEY,
  },
}
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/'
const URL = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0'
const url = ({ date, from, to }) => PROXY_URL + URL + '/US/USD/en-US/' +
  from + '/' + to + '/' + date
const { get } = require('axios')

const getAllFlights = (dispatch, data) => {

  get(url(data), init).then(res => res.data).then(({ Quotes, Carriers }) => {
    return dispatch({
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
  })
  .catch(error => {
    return dispatch({
      type: THROW_ERROR,
      payload: { error },
    })
  })
}

const getAllPlaces = (dispatch, queryString) => {
  get(
    'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?query=' +
    queryString, init)
  .then(res => res.data)
  .then(({ Places }) => {
    return dispatch({
      type: GET_PLACES,
      payload: Places.map(p => ({
        id: p['PlaceId'],
        name: p['PlaceName'],
      })),
    })
  })
  .catch(error => {
    return dispatch({
      type: THROW_ERROR,
      payload: { error },
    })
  })
}

export { getAllFlights, getAllPlaces }
