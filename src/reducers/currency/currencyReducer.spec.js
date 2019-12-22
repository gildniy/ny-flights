import { currencyInitialState, currencyReducer } from './currencyReducer'
import { CHANGE_CURRENCY, CONVERT_CURRENCY } from '../../actions/types'

describe('Currency Reducer', () => {
  test('CHANGE_CURRENCY', () => {
    expect(currencyReducer(
      currencyInitialState,
      {
        type: CHANGE_CURRENCY,
        payload: {
          currency: 'EUR',
        },
      })).toEqual({
      currency: { currency: 'EUR' },
      converted: {
        rate: 1,
        name: '',
      },
    })
  })
  test('CONVERT_CURRENCY', () => {
    expect(JSON.stringify(currencyReducer(
      currencyInitialState,
      {
        type: CONVERT_CURRENCY,
        payload: {
          converted: {
            rate: 2,
            name: 'xxx',
          },
        },
      }))).toEqual(JSON.stringify({
      currency: 'USD',
      converted: {
        converted: {
          rate: 2,
          name: 'xxx',
        },
      },
    }))
  })
  test('default', () => {
    expect(JSON.stringify(currencyReducer(currencyInitialState, {}))).
      toEqual(JSON.stringify(currencyInitialState))
  })
})
