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
    default:
      return state
  }
}
