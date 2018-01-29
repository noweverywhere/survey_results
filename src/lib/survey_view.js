import { createElement, emptyElement, replaceContents } from './view_helpers'
import { mapQuestions } from './reducers'

const renderResponsesDistribution = ({groups, largestGroup}) => {
  return `
    <div class='Survey__distMapBarGraph'>
      ${
        groups.map((group) => (`
          <div
            class='Survey__distMapBar'
            title='${group.count} responses - ${Math.round(group.percentage)}%'>
            <div
              class='Survey__distMapBarContent'
              style="height: ${group.height}%"
            ></div>
          </div>
        `)).join('')
      }
    </div>
  `
}

const renderSurveyQuestions = (question) => {
  return `
    <tr class='Survey__question'>
      <td class='Survey__questionHeading'>${question.description}</td>
      <td class='Survey__questionDetails'>${question.responses.average}</td>
      <td class='Survey__questionDist'>
        ${renderResponsesDistribution(question.responses.distribution)}
      </td>
    </tr>
  `
}

const renderSurveyTheme = (theme) => {
  const reducedQuestions = theme.questions.map(mapQuestions)
  const renderedQuestions = reducedQuestions.map(
    renderSurveyQuestions
  ).join('')

  return `
    <table class='Survey__theme'>
      <thead class='Survey__themeHeading'>
        <tr>
          <td class="Survey__themeName">${theme.name}</td>
          <td class="Survey__themeAverage">Response Average</td>
          <td class="Survey__themeResponseDist">Responses Distribution</td>
      </thead>
      <tbody class='Survey__themeQuestions'>
        ${renderedQuestions}
      </tbody>
    </table>
  `
}

export const SurveyView = (appNode) => {
  const domElement = createElement('div', 'SurveyView')
  const headerElement = createElement('div', 'SurveyView__header')
  const surveyDisplay = createElement('div', 'SurveyView__body')
  domElement.appendChild(headerElement)
  domElement.appendChild(surveyDisplay)

  appNode.appendChild(domElement)

  return {
    showLoading: () => {
      const loadingMessage = createElement('div', 'SurveyView__loading')
      loadingMessage.appendChild(document.createTextNode('LOADING SURVEY'))
      emptyElement(surveyDisplay)
      surveyDisplay.appendChild(loadingMessage)
    },
    showSelectedSurvey: ({survey}) => {
      const title = document.createElement('h2')
      title.appendChild(document.createTextNode(survey.name))
      replaceContents(headerElement, title)
    },
    showSurvey: ({survey}) => {
      const renderedSurvey = createElement('div', 'SurveyDisplay')
      const renderedThemes = survey.survey_result_detail.themes.map(
        renderSurveyTheme
      )
      replaceContents(renderedSurvey, renderedThemes)
      replaceContents(surveyDisplay, renderedSurvey)
    }
  }
}
