import api from './api'

const ListController = ({apiInstance}) => ({
  loadSurveys: () => {
    const indexLoadPromise = apiInstance.index()

    indexLoadPromise.then((outcome) => {
      if (outcome.success === true) {
       console.log('not implimented show result of index', outcome)
      } else {
       console.log('not implimented show errors of index', outcome)
      }
    }).catch((e) => { console.log('not implimented network error handling', e) })
  }
})

const init = (queryString) => () => {
  const appNode = document.querySelector(queryString)
  const apiInstance = api.init(process.env.API_BASE_URL)
  const listController = ListController({
    apiInstance
  })

  listController.loadSurveys()
}

export default { init }
