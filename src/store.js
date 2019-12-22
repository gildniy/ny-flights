import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import rootReducers from './reducers'

const initialState = {}
const logger = createLogger({ collapsed: true, diff: true })
const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk, logger)),
)

export default store
