import React from 'react'
import App, { mapDispatchToProps, mapStateToProps } from './App.jsx'
import { renderWithRedux } from '../../helpers/helpers'
import '@testing-library/jest-dom/extend-expect'
import { currencyInitialState } from '../../reducers/currency/currencyReducer'
import { dateInitialState } from '../../reducers/date/dateReducer'
import { flightInitialState } from '../../reducers/flight/flightReducer'
import { placesInitialState } from '../../reducers/place/placeReducer'

describe('App Component', () => {
  describe('', () => {
    test('renders without crashing', () => {
      const { getByTestId } = renderWithRedux(<App/>, {})
      expect(getByTestId('root-app')).toBeInTheDocument()
    })
  })

  describe('mapStateToProps and mapStateToProps', () => {
    const dispatch = jest.fn()
    it('should show initialStates', () => {
      expect(mapStateToProps(currencyInitialState)).
        toEqual(currencyInitialState)
      expect(mapStateToProps(dateInitialState)).toEqual(dateInitialState)
      expect(mapStateToProps(flightInitialState)).toEqual(flightInitialState)
      expect(mapStateToProps(placesInitialState)).toEqual(placesInitialState)
    })
    it('changeCurrency', () => {
      mapDispatchToProps(dispatch).changeCurrency('USD')
      expect(dispatch.mock.calls[0][0]).
        toEqual({ type: 'CHANGE_CURRENCY', payload: 'USD' })
    })
    it('handleChange', () => {
      mapDispatchToProps(dispatch).
        handleChange({ target: { name: 'origin', value: 'xxx' } })
      expect(dispatch.mock.calls[1][0]).
        toEqual({ type: 'CHANGE_ORIGIN', payload: 'xxx' })
    })
  })
})
