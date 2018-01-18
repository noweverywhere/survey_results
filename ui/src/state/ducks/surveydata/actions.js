import types from './types'

export const loadList = repository => ({
  type: types.LOADLIST_START,
  repository
})

export const retrieveSurveyListSuccess = (data) => ({
  type: types.LOADLIST_SUCCEED,
  data
})

export const retrieveSurveyListFailed = (errorCode) => ({
  type: types.LOADLIST_FAILED,
  errorCode
})

export const selectSurvey = (survey) => ({
  type: types.SELECT_SURVEY,
  survey
})

export const showSurveySuccess = (survey) => ({
  type: types.LOAD_SURVEY_SUCCESS,
  survey
})

export const unselectSurvey = () => ({
  type: types.UNSELECT_SURVEY,
})

export default {
  loadList, unselectSurvey
}
