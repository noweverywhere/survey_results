import React, { Component } from 'react'
import './styles.css'
import SurveysList from '../../containers/SurveysList'
import SelectedSurvey from '../../containers/SelectedSurvey'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Survey Results</h1>
        </header>
        <SurveysList />
        <SelectedSurvey />
      </div>
    )
  }
}

export default App
