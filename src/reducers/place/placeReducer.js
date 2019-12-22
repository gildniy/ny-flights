import { CHANGE_DESTINATION, CHANGE_ORIGIN } from '../../actions/types'

const placesInitialState = {
  from: 'NYCA-sky',
  to: 'JFK-sky',
}

const placeReducer = (state = placesInitialState, action) => {
  switch (action.type) {
    case CHANGE_ORIGIN:
      return { ...state, from: action.payload }
    case CHANGE_DESTINATION:
      return { ...state, to: action.payload }
    default:
      return state
  }
}

export { placeReducer, placesInitialState }
