import React, { useEffect } from 'react'
import { formatDate } from '../helpers'
import {
  CHANGE_DATE,
  CHANGE_DESTINATION,
  CHANGE_ORIGIN,
} from '../actions/types'

export const Header = ({placeState, dateState, places, flightsNo, getPlaces, handleChange }) => {
  const minDate = formatDate((new Date()))
  const maxDate = formatDate(
    (new Date()).setMonth((new Date()).getMonth() + 3))

  useEffect(() => { getPlaces('New York') }, [placeState])

  return <div>
    <h2>Total fights: {flightsNo}</h2>
    <h4>ORIGIN: {placeState.from} - DESTINATION: {placeState.to} </h4>
    <div className='input-group'>
      <label htmlFor='origin'>Origin: </label>
      <select onChange={(e) => handleChange(e, CHANGE_ORIGIN)}
              name="origin"
              id="origin"
              defaultValue={''}>
        <option value=''>Select a place</option>
        {
          places && places.map(
            item => <option key={item.id} value={item.id}>{item.name}</option>)
        }
      </select>
    </div>

    <div className='input-group'>
      <label htmlFor='destination'>Destination: </label>
      <select onChange={(e) => handleChange(e, CHANGE_DESTINATION)}
              name="destination"
              id="destination"
              defaultValue={''}>
        <option value=''>Select a place</option>
        {
          places && places.map(
            item => <option key={item.id} value={item.id}>{item.name}</option>)
        }
      </select>
    </div>

    <div className='input-group'>
      <label htmlFor="partial_date">Start date:</label>
      <input type="date" id="partial_date"
             name="partial_date"
             value={formatDate(dateState.date)}
             onChange={(e) => handleChange(e, CHANGE_DATE)}
             min={minDate} max={maxDate}/>
    </div>
  </div>
}

