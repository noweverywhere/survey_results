import types from './types'

export const loadList = repository => ({
  type: types.LOADLIST_START,
  repository
})

export default {
  loadList
}
