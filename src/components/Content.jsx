import React, { useEffect } from 'react'
import { currencyInitialState } from '../reducers/currencyReducer'

export const Content = ({ dateState, placeState, converted, currencyConvert, places, currency, flights, getFlights }) => {

  useEffect(() => {
    const { date } = dateState
    const { from, to } = placeState
    const data = { date, from, to }

    getFlights(data)
    currencyConvert({
      from: currencyInitialState.currency,
      to: currency,
    })
  }, [currency, placeState, dateState])

  const { rate, name } = converted

  return (
    <ul>
      {flights.length && rate ? flights.map((flight, idx) => {

        const convertedPrice = parseFloat(flight.minPrice) * rate
        flight.Price = (convertedPrice).toFixed(2) + ' ' + name
        const { minPrice, ...dataFlight } = flight

        return <li key={idx}>{JSON.stringify(dataFlight)}</li>
      }) : <li>No flight found</li>}
    </ul>
  )
}

