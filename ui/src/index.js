import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './state/store'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const reduxStore = configureStore({})

ReactDOM.render(
  <ReduxProvider store={reduxStore}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
)
registerServiceWorker()
