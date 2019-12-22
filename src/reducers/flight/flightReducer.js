import { GET_ALL_FLIGHTS, GET_PLACES } from '../../actions/types'

const flightInitialState = {
  flights: [],
  places: [],
}

const flightReducer = (state = flightInitialState, action) => {
  switch (action.type) {
    case GET_ALL_FLIGHTS:
      return { ...state, flights: [...action.payload] }
    case GET_PLACES:
      return { ...state, places: [...action.payload] }
    default:
      return state
  }
}
export { flightReducer, flightInitialState }
