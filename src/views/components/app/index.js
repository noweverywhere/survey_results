import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SurveysListContainer from '../../containers/surveys_list'
import './styles.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.props.onLoad()
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Survey Results</h1>
        </header>
        <SurveysListContainer />
      </div>
    )
  }
}

App.propTypes = {
  onLoad: PropTypes.func.isRequired
}

export default App
