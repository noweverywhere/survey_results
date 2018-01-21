import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

export default function configureStore (initialState = {}) {
  const rootReducer = combineReducers([state => ({})])
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  )
}
