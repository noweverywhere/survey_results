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
    'INDEX_LOADING'
  ],
  initialState: {
    indexLoadingStatus: NOT_LOADED,
    list: [],
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
    }
  })
})
