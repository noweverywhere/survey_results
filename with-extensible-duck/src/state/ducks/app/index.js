import Duck from 'extensible-duck'
import surveysDuck from '../surveys'

export default new Duck({
  namespace: 'survey-results',
  store: 'app',
  types: ['LOADED'],
  initialState: {
    loaded: false
  },
  reducer: (state, action, duck) => {
    switch(action.type) {
      case duck.types.LOADED:
        return {
          ...state,
          loaded: true
        }
      default: return state
    }
  },
  creators: (duck) => ({
    appLoaded: () => (dispatch) => {
      dispatch({ type: duck.types.LOADED })
      surveysDuck.creators.indexLoad(dispatch)
    }
  })
})
