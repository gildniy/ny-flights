import React, { useEffect } from 'react'
import { formatDate } from '../../helpers'
import {
  CHANGE_DATE,
  CHANGE_DESTINATION,
  CHANGE_ORIGIN,
} from '../../actions/types'

export const Inputs = ({ placeState, dateState, places, getPlaces, handleChange }) => {
  const minDate = formatDate((new Date()))
  const maxDate = formatDate(
    (new Date()).setMonth((new Date()).getMonth() + 3))

  useEffect(() => {
    getPlaces('New York')
  }, [placeState])

  return (
    <div className="form-row">
      <div className="col-md-4 mb-3">
        <label htmlFor='origin'
               className="control-label form-label">ORIGIN</label>
        <select className="form-control"
                onChange={(e) => handleChange(e, CHANGE_ORIGIN)}
                name="origin"
                id="origin"
                defaultValue={''}>
          <option value=''>Select a place</option>
          {
            places && places.map(
              item => <option key={item.id}
                              value={item.id}>{item.name}</option>)
          }
        </select>
      </div>
      <div className="col-md-4 mb-3">
        <label htmlFor='destination'
               className="control-label form-label">DESTINATION</label>
        <select className="form-control"
                onChange={(e) => handleChange(e, CHANGE_DESTINATION)}
                name="destination"
                id="destination"
                defaultValue={''}>
          <option value=''>Select a place</option>
          {
            places && places.map(
              item => <option key={item.id}
                              value={item.id}>{item.name}</option>)
          }
        </select>
      </div>
      <div className="col-md-4 mb-3">
        <label htmlFor='partial_date' className="control-label form-label">OUTBOUND
          PARTIAL DATE</label>
        <input className="form-control"
               type="date"
               id="partial_date"
               name="partial_date"
               value={formatDate(dateState.date)}
               onChange={(e) => handleChange(e, CHANGE_DATE)}
               min={minDate} max={maxDate}/>
      </div>
    </div>
  )
}

