import {
  getAllFlightsAction,
  getPlacesAction,
  throwErrorAction,
} from '../index'
import { RAPID_API_KEY } from '../../../config/keys'

const init = {
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    'x-rapidapi-key': RAPID_API_KEY,
  },
}
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/'
const { get } = require('axios')

const getAllFlights = (dispatch, data) => {

  const URL = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0'
  const url = ({ date, from, to }) => PROXY_URL + URL + '/US/USD/en-US/' +
    from + '/' + to + '/' + date

  const allFlightsPromise = get(url(data), init)

  allFlightsPromise.
    then(({ data: { Quotes, Carriers } }) => dispatch(
      getAllFlightsAction(Quotes, Carriers))).
    catch(error => dispatch(throwErrorAction(error)))

  return allFlightsPromise
}

const getAllPlaces = (dispatch, queryString) => {
  const URL = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?query='
  const allPlacesPromise = get(PROXY_URL + URL + queryString, init)

  allPlacesPromise.
    then(({ data: { Places } }) => dispatch(getPlacesAction(Places))).
    catch(error => dispatch(throwErrorAction(error)))

  return allPlacesPromise
}

export { getAllFlights, getAllPlaces }
