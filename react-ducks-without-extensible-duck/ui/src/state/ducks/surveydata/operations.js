import * as actions from './actions'
import { indexSurveys, showSurvey } from '../../../lib/api'

const loadList = (params) => {
  return(dispatch) => {
    dispatch(actions.loadList(params))
    indexSurveys(params).then(
      data => {
        dispatch(actions.retrieveSurveyListSuccess(data))
      }
    )
  }
}

const selectSurvey = (survey) => {
  return(dispatch) => {
    dispatch(actions.selectSurvey(survey))
    showSurvey(survey).then(
      data => {
        dispatch(actions.showSurveySuccess(data))
      }
    )
  }
}

export default {
  loadList, selectSurvey, unselectSurvey: actions.unselectSurvey
}
