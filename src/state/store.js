import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import appDuck from './ducks/app'

export default function configureStore (initialState = {}) {
  const rootReducer = combineReducers({app: appDuck.reducer})
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger)
  )
}
