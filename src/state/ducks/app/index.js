import Duck from 'extensible-duck'

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
  createors: (duck) => ({
    appLoaded: () => ({ type: duck.types.LOADED })
  })
})
