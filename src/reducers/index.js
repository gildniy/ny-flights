import { combineReducers } from 'redux'
import currencyReducer from './currencyReducer'
import dateReducer from './dateReducer'
import placeReducer from './placeReducer'
import flightReducer from './flightReducer'

export default combineReducers({
  currencyState: currencyReducer,
  flightState: flightReducer,
  placeState: placeReducer,
  dateState: dateReducer,
})
