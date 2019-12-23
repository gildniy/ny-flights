import { convertCurrencyAction, throwErrorAction } from '../index'
import { RAPID_API_KEY } from '../../../config/keys'


const convertCurrency = (dispatch, { from, to }) => {
  const PROXY_URL = 'https://cors-anywhere.herokuapp.com/'
  const URL = 'https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from='
  const { get } = require('axios')
  const convertPromise = get(PROXY_URL + URL + from + '&to=' + to + '&amount=1',
    {
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'currency-converter5.p.rapidapi.com',
        'x-rapidapi-key': RAPID_API_KEY,
      },
    })

  convertPromise.
    then(({ data: { rates } }) => dispatch(convertCurrencyAction(rates, to))).
    catch(error => dispatch(throwErrorAction(error)))

  return convertPromise
}

export { convertCurrency }
