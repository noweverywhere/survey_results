import { createElement, replaceContents, emptyElement } from './view_helpers'

export const ListView = (appNode) => {
  const domElement = createElement('div', 'SurveyList')
  appNode.appendChild(domElement)

  return {
    showLoading: () => {
      replaceContents(domElement, '<div>LOADING SURVEYS</div>')
    },
    showSurveys: ({surveys, selectSurvey}) => {
      const heading = createElement('h3', 'SurveyList__heading')
      const surveyListDiv = createElement('div', 'SurveyList__list')

      heading.innerText = 'Select a survey below'
      surveyListDiv.appendChild(heading)
      surveys.map((survey) => {
        const buttonDiv = createElement('div', 'SurveyList__item')
        const button = createElement('button', 'SurveyList__itemButton')
        button.innerHTML = `
          <div class='SurveyList__itemName'>${survey.name}</div>
          <div class='SurveyList__itemResponseRate'>
            Response rate: ${survey.responseRate}
          </div>
        `
        button.onclick = () => selectSurvey(survey)
        buttonDiv.appendChild(button)
        surveyListDiv.appendChild(buttonDiv)
      })

      emptyElement(domElement)
      domElement.appendChild(surveyListDiv)
    }
  }
}
