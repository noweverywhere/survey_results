import types from './types'
import * as loadingStates from '../../../lib/loadingStates'
const defaultState = {
  listStatus: loadingStates.NOTLOADED,
  listOfSurveys: undefined
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.LOADLIST_START:
      return {
        ...state,
        listStatus: loadingStates.LOADING,
      }
    case types.LOADLIST_SUCCEED:
      return {
        ...state,
        listStatus: loadingStates.LOADED,
        listOfSurveys: action.data.survey_results
      }
    case types.LOADLIST_FAILED:
      return {
        ...state,
        listStatus: loadingStates.FAILED,
        listOfSurveys: action.data.survey_results
      }
    case types.SELECT_SURVEY:
      return {
        ...state,
        selectedSurvey: action.survey,
        selectedSurveyLoadedStatus: loadingStates.NOTLOADED
      }
    case types.UNSELECT_SURVEY:
      return {
        ...state,
        selectedSurvey: undefined,
        selectedSurveyLoadedStatus: loadingStates.NOTLOADED
      }
    case types.LOAD_SURVEY_SUCCESS:
      return {
        ...state,
        loadedSurvey: action.survey.survey_result_detail,
        selectedSurveyLoadedStatus: loadingStates.LOADED
      }
    default:
      return state
  }
}
