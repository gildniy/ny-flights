import { combineReducers } from 'redux'
import currencyReducer from './currency/currencyReducer'
import dateReducer from './date/dateReducer'
import placeReducer from './place/placeReducer'
import flightReducer from './flight/flightReducer'

export default combineReducers({
  currencyState: currencyReducer,
  flightState: flightReducer,
  placeState: placeReducer,
  dateState: dateReducer,
})
