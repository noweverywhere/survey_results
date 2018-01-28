import api from './api'
import views from './view'

const SurveyResultsController = ({apiInstance, view}) => ({
  selectSurvey: (survey) => {
    view.showLoading()
    view.showSelectedSurvey({survey})
    apiInstance.show({surveyUrl: survey.url}).then((outcome) => {
      if (outcome.success === true) {
        view.showSurvey({survey: outcome.data})
      } else {
        console.log('Not yet implimented showing error of show', outcome)
      }
    }).catch((e) => {
      console.log('Not yet implimented showing serious errors of show', e)
    })
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
  const surveysView = views.SurveyView(appNode)
  const apiInstance = api.init(process.env.API_BASE_URL)
  const surveysController = SurveyResultsController({
    apiInstance, view: surveysView
  })
  const listController = ListController({
    apiInstance, view: listView
  })

  listController.loadSurveys({
    selectSurveyfn: surveysController.selectSurvey
  })
}

export default { init }
