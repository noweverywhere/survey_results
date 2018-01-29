import { createElement, emptyElement, replaceContents } from './view_helpers'

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
          <td class="Survey__themeName">${theme.name}</td>
          <td class="Survey__themeAverage">Response Average</td>
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

export const SurveyView = (appNode) => {
  const domElement = createElement('div', 'SurveyView')
  const headerElement = createElement('div', 'SurveyView__header')
  const surveyDisplay = createElement('div', 'SurveyView__body')
  domElement.appendChild(headerElement)
  domElement.appendChild(surveyDisplay)

  appNode.appendChild(domElement)

  return {
    showLoading: () => {
      emptyElement(surveyDisplay)
      surveyDisplay.innerHTML = '<div>LOADING SURVEY</div>'
    },
    showSelectedSurvey: ({survey}) => {
      const title = document.createElement('h2')
      title.innerText = survey.name
      replaceContents(headerElement, title)
    },
    showSurvey: ({survey}) => {
      const renderedSurvey = createElement('div', 'SurveyDisplay')
      const renderedThemes = survey.themes.map(renderSurveyTheme)
      replaceContents(renderedSurvey, renderedThemes)
      replaceContents(surveyDisplay, renderedSurvey)
    }
  }
}
