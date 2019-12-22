import { CONVERT_CURRENCY, THROW_ERROR } from '../types'
import { RAPID_API_KEY } from '../../../config/keys'

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/'
const URL = 'https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from='

const convertCurrency = (dispatch, { from, to }) => {
  const { get } = require('axios')
  get(PROXY_URL + URL + from + '&to=' + to + '&amount=1',
    {
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'currency-converter5.p.rapidapi.com',
        'x-rapidapi-key': RAPID_API_KEY,
      },
    })
  .then(res => res.data)
  .then(({ rates }) => {
    return dispatch({
      type: CONVERT_CURRENCY,
      payload: {
        rate: rates[to]['rate'],
        name: rates[to]['currency_name'],
      },
    })
  })
  .catch(error => {
    return dispatch({
      type: THROW_ERROR,
      payload: { error },
    })
  })
}

export { convertCurrency }
