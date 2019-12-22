import React, { Fragment, useEffect } from 'react'
import { currencyInitialState } from '../../reducers/currency/currencyReducer'
import { format24To12Time, formatDateToReadable } from '../../helpers'

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
    <Fragment>
      {flights.length && rate ? flights.map((flight, idx) => {

        const convertedPrice = parseFloat(flight.minPrice) * rate
        flight.Price = (convertedPrice).toFixed(2)

        return <div className='row mb-2' key={idx}>
          <div className="col-md-2 pr-0">
            <div className='flight-no'>{flight.id}</div>
          </div>
          <div className="col-md-4 px-0">
            <div className='depart-dt'>
              <div className='depart-dt--title'>Departure Date / Time</div>
              <div className='depart-dt--date'>{formatDateToReadable(
                flight.departureDate)}</div>
              <div className='depart-dt--time'>{format24To12Time(
                flight.departureTime)}</div>
            </div>
          </div>
          <div className="col-md-4 px-0">
            <div className='carrier'>
              <div className='carrier--title'>Carrier</div>
              <div className='carrier--data'>{flight.carrier}</div>
            </div>
          </div>
          <div className="col-md-2 pl-0">
            <div className='price'>
              <div className='price--title'>Minimum Price</div>
              <div className='price--data'>{flight.Price}</div>
              <div className='price--currency'>{name}</div>
            </div>
          </div>
        </div>
      }) : <div className='no-flight'>
            <p>&#129488;</p>
            <h1>No flight found</h1>
          </div>
      }
    </Fragment>
  )
}

