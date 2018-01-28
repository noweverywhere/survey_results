import { emptyElement, replaceContents } from './view_helpers'

export const ListView = (appNode) => {
  const domElement = document.createElement('div')
  appNode.appendChild(domElement)

  return {
    showLoading: () => {
      domElement.innerHTML = '<div>LOADING SURVEYS</div>'
    },
    showSurveys: ({surveys, selectSurvey}) => {
      const buttons = surveys.map((survey) => {
        const button = document.createElement('button')
        button.innerText = survey.name
        button.onclick = () => selectSurvey(survey)
        return button
      })
      replaceContents(domElement, buttons)
    }
  }
}

export const SurveyView = (appNode) => {
  const domElement = document.createElement('div')
  const headerElement = document.createElement('div')
  const surveyDisplay = document.createElement('div')
  domElement.appendChild(headerElement)
  domElement.appendChild(surveyDisplay)

  appNode.appendChild(domElement)

  return {
    showLoading: () => {
      emptyElement(surveyDisplay)
      surveyDisplay.innerHTML = '<div>LOADING SURVEY</div>'
    },
    showSelectedSurvey: ({survey}) => {
      const title = document.createElement('h1')
      title.innerText = survey.name
      replaceContents(headerElement, title)
    }
  }
}

export default { ListView, SurveyView }
