import Duck from 'extensible-duck'
import { surveys } from '../../../lib/api'
import {
  LOADED,
  LOADING,
  FAILED,
  NOT_LOADED
} from '../../../lib/loadStatusConstants'

export default new Duck({
  namespace: 'survey-results',
  store: 'surveys',
  types: [
    'INDEX_FAILED',
    'INDEX_LOADED',
    'INDEX_LOADING',
    'SURVEY_LOAD_STARTED',
    'SURVEY_SELECTED',
    'SURVEY_UNSELECTED'
  ],
  initialState: {
    indexLoadingStatus: NOT_LOADED,
    list: [],
    selectedSurveyUrl: null,
    selectedSurveyLoadStatus: null
  },
  reducer: (state, action, duck) => {
    switch(action.type) {
      case duck.types.INDEX_LOADING:
        return {
          ...state,
          indexLoadingStatus: LOADING
        }
      case duck.types.INDEX_LOADED:
        return {
          ...state,
          indexLoadingStatus: LOADED,
          list: [...action.data.survey_results]
        }
      case duck.types.INDEX_FAILED:
        return {
          ...state,
          indexLoadingStatus: FAILED,
        }
      case duck.types.SURVEY_UNSELECTED:
        return {
          ...state,
          selectedSurveyUrl: null,
          selectedSurveyLoadStatus: null
        }
      case duck.types.SURVEY_SELECTED:
        return {
          ...state,
          selectedSurveyUrl: action.selectedSurveyUrl
        }
      case duck.types.SURVEY_LOAD_STARTED:
        return {
          ...state,
          selectedSurveyLoadStatus: LOADING
        }
      default: return state
    }
  },
  creators: (duck) => ({
    indexLoad: (dispatch) => {
      dispatch({ type: duck.types.INDEX_LOADING })
      surveys.index({}).then((response) => {
        dispatch({type: duck.types.INDEX_LOADED, data: response.data})
      }).catch((error) => {
        dispatch({type: duck.types.INDEX_FAILED, data: error.data})
      })
    },
    selectSurvey: (surveyUrl) => (dispatch) => {
      dispatch({
        type: duck.types.SURVEY_SELECTED,
        selectedSurveyUrl: surveyUrl
      })
      duck.creators.loadSelectedSurvey(dispatch, surveyUrl)
    },
    unselectSurvey: () => ({
      type: duck.types.SURVEY_UNSELECTED
    }),
    loadSelectedSurvey: (dispatch, surveyUrl) => {
      dispatch({
        type: duck.types.SURVEY_LOAD_STARTED
      })
    }
  }),
  selectors: {
    selectedSurvey: ({surveys}) => (
      surveys.list.filter((s) => s.url === surveys.selectedSurveyUrl).shift()
    )
  }
})
