import React from 'react'
import * as loadingStates from '../lib/loadingStates'
import SurveyListItem from '../views/components/SurveysListItem'
import './component.css'

class SurveyListComponent extends React.Component {
  constructor(props) {
    super(props)
    if (props.listStatus === loadingStates.NOTLOADED) {
      props.onLoad({})
    }
  }

  list() {
    return (
      <ul className="SurveysList__list">
        {
          this.props.listOfSurveys.map(
            survey => (
              <SurveyListItem
                key={survey.url}
                selected
                onSelect={() => this.props.selectSurvey(survey)}
                {...survey} />
            )
          )
        }
      </ul>
    )
  }

  render() {
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
          <h3>LOADING...</h3>
        )
    }
  }
}

export default SurveyListComponent
