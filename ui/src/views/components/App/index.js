import React, { Component } from 'react'
import './styles.css'
import SurveysList from '../../containers/SurveysList'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Survey Results</h1>
        </header>
        <SurveysList />
      </div>
    )
  }
}

export default App
