import Duck from 'extensible-duck'
import { surveys } from '../../../lib/api'

export default new Duck({
  namespace: 'survey-results',
  store: 'surveys',
  types: [
    'INDEX_LOADING',
    'INDEX_LOADED'
  ],
  initialState: {
    indexLoadingStatus: null,
    list: []
  },
  reducer: (state, action, duck) => {
    switch(action.type) {
      case duck.types.INDEX_LOADING:
        return {
          ...state,
          indexLoadingStatus: 'LOADING'
        }
      case duck.types.INDEX_LOADED:
        return {
          ...state,
          indexLoadingStatus: 'LOADED',
          list: [...action.data.survey_results]
        }
      default: return state
    }
  },
  creators: (duck) => ({
    indexLoad: (dispatch) => {
      dispatch({ type: duck.types.INDEX_LOADING })
      surveys.index({}).then((response) => {
        dispatch({type: duck.types.INDEX_LOADED, data: response.data})
      })
    }
  })
})
