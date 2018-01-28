import { emptyElement, replaceContents } from './view_helpers'

const renderSurveyQuestions = (question) => (
  `
    <tr class='Survey__question'>
      <td class='Survey__questionHeading'>${question.description}</td>
      <td class='Survey__questionDetails'>${question.responses.average}</td>
    </tr>
  `
)

const renderSurveyTheme = (theme) => (
  `
    <table class='Survey__theme'>
      <thead class='Survey__themeHeading'>
        <tr>
          <td>${theme.name}</td>
          <td>Response Average</td>
      </thead>
      <tbody class='Survey__themeQuestions'>
        ${
          theme.questions.map(renderSurveyQuestions).reduce(
            (a, t) => (a + t),
            ''
          )
        }
      </tbody>
    </table>
  `
)

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
    },
    showSurvey: ({survey}) => {
      const renderedSurvey = document.createElement('div')
      const renderedThemes = survey.themes.map(renderSurveyTheme)
      renderedSurvey.className = 'SurveyDisplay'
      replaceContents(renderedSurvey, renderedThemes)
      replaceContents(surveyDisplay, renderedSurvey)
    }
  }
}

export default { ListView, SurveyView }
