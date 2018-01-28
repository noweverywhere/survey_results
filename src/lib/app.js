import api from './api'
import views from './view'

const SurveyResultsController = () => ({
  selectSurvey: (survey) => {
    console.log('not yet implimented showing surveys', survey)
  }
})

const ListController = ({apiInstance, view}) => ({
  loadSurveys: ({selectSurveyfn}) => {
    const indexLoadPromise = apiInstance.index()

    view.showLoading()

    indexLoadPromise.then((outcome) => {
      if (outcome.success === true) {
        view.showSurveys({
          surveys: outcome.data,
          selectSurvey: selectSurveyfn
        })
      } else {
        view.showFailure(outcome)
      }
    }).catch(view.showFailure)
  }
})

const init = (queryString) => () => {
  const appNode = document.querySelector(queryString)
  const listView = views.ListView(appNode)
  const apiInstance = api.init(process.env.API_BASE_URL)
  const surveysController = SurveyResultsController()
  const listController = ListController({
    apiInstance, view: listView
  })

  listController.loadSurveys({
    selectSurveyfn: surveysController.selectSurvey
  })
}

export default { init }
