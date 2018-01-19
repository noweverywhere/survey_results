import React from 'react'
import * as loadingStates from '../../../lib/loadingStates'
import SurveyDescription from '../SurveyDescription'
import Survey from '../Survey'

class SelectedSurveyComponent extends React.Component {
  renderSurveyArea() {
    switch (this.props.selectedSurveyLoadedStatus) {
      case loadingStates.LOADED:
        return <Survey survey={this.props.loadedSurvey} />
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
        <SurveyDescription survey={this.props.selectedSurvey} />
        <button onClick={ this.props.unselectSurvey }>Unselect</button>
        { this.renderSurveyArea() }
      </div>
    )
  }
}

export default SelectedSurveyComponent
