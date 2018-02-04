import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SurveysListContainer from '../../containers/surveys_list'
import AppHeader from '../app_header'
import loadingConstants from '../../../lib/loadStatusConstants'
import './styles.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.props.onLoad()
  }

  render () {
    const { surveysListLoadStatus, selectedSurvey, unselectSurvey } = this.props
    return (
      <div className='App'>
        <AppHeader
          selectedSurvey={selectedSurvey}
          unselectSurvey={unselectSurvey} />
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
