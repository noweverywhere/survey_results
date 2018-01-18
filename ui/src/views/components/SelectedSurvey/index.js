import React from 'react'
import * as loadingStates from '../../../lib/loadingStates'

class SurveyComponent extends React.Component {
  renderSurvey() {
    switch (this.props.selectedSurveyLoadedStatus) {
      case loadingStates.LOADED:
        return <pre>{JSON.stringify(this.props.loadedSurvey)}</pre>
      case loadingStates.FAILED:
        return (
          <h3>Something went wrong :(</h3>
        )
      case loadingStates.NOTLOADED:
      case loadingStates.LOADING:
      default:
        return (
          <h3>LOADING SURVEY ...</h3>
        )
    }
  }

  render() {
    if(!this.props.selectedSurvey) { return null }
    return(
      <div>
        <button onClick={ this.props.unselectSurvey }>Close</button>
        { this.renderSurvey() }
      </div>
    )
  }
}

export default SurveyComponent
