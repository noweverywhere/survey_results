import types from './types'
const defaultState = {
  listLoading: false,
  listLoaded: false,
  repository: undefined
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.LOADLIST_START:
      return {
        ...state,
        listLoading: true
      }
    default:
      return state
  }
}
