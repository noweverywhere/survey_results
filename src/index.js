import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './state/store'
import './index.css'
import App from './views/components/app'
import registerServiceWorker from './registerServiceWorker'

const reduxStore = configureStore({})

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
