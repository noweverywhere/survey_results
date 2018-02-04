import React from 'react'
import * as loadingStates from '../../../lib/loadingStates'
import SurveyListItem from '../SurveysListItem'
import './styles.css'

class SurveyListComponent extends React.Component {
  constructor(props) {
    super(props)
    if (props.listStatus === loadingStates.NOTLOADED) {
      props.onLoad({})
    }
  }

  list() {
    return (
      <div className="SurveysList__list">
        <div>Select a servey below to view it's details:</div>
        {
          this.props.listOfSurveys.map(
            survey => (
              <SurveyListItem
                key={survey.url}
                selected
                onSelect={() => this.props.selectSurvey(survey)}
                selectedSurvey={survey} />
            )
          )
        }
      </div>
    )
  }

  render() {
    if (this.props.selectedSurvey) { return null }
    switch (this.props.listStatus) {
      case loadingStates.LOADED:
        return <div>{ this.list() }</div>
      case loadingStates.FAILED:
        return (
          <h3>Something went wrong :(</h3>
        )
      case loadingStates.NOTLOADED:
      case loadingStates.LOADING:
      default:
        return (
          <h3>LOADING SURVEYS LIST...</h3>
        )
    }
  }
}

export default SurveyListComponent
