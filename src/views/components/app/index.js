import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SurveysListContainer from '../../containers/surveys_list'
import loadingConstants from '../../../lib/loadStatusConstants'
import './styles.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.props.onLoad()
  }

  render () {
    const { surveysListLoadStatus } = this.props
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Survey Results</h1>
        </header>
        {
          (() => {
            switch(surveysListLoadStatus) {
              case loadingConstants.LOADED:
                return <SurveysListContainer />
              case loadingConstants.FAILED:
                return <div>Something went wrong :(</div>
              default:
                return <div>Loading list of available surveys</div>
            }
          })()
        }
      </div>
    )
  }
}

App.propTypes = {
  onLoad: PropTypes.func.isRequired,
  surveysListLoadStatus: PropTypes.string.isRequired
}

export default App
