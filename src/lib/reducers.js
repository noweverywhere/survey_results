import { VALID_RATINGS_RESPONSES } from './constants'

export const tidyResponses = (acc, response) => {
  const content = parseInt(response.response_content, 10)
  if (VALID_RATINGS_RESPONSES.includes(content)) {
    acc.push(content)
  }
  return acc
}

export const averageResponses = (responses) => {
  let sum = 0
  let loopIndex = responses.length
  while (loopIndex) {
    loopIndex -= 1
    sum += responses[loopIndex]
  }
  return sum / responses.length
}

export const mapQuestions = (question) => {
  const cleanedResponses = (
    question.survey_responses.reduce(tidyResponses, [])
  )
  return Object.assign(
    question, {
      responses: {
        average: Math.round(averageResponses(cleanedResponses) * 100) / 100
      }
    }
  )
}

export const mapSurveyThemes = (theme) => {
  return Object.assign(theme, {
    questions: theme.questions.map(mapQuestions)
  })
}

export const reduceSurveyResultDetail = (data) => {
  const survey = data.survey_result_detail

  if (!survey) return data

  return Object.assign(
    data, { themes: survey.themes.map(mapSurveyThemes) }
  )
}

export const reduceSurveyIndex = (data) => {
  const indexResults = data.survey_results
  if (!indexResults) return data

  return indexResults.map((surveyIndexItem) => {
    return Object.assign(surveyIndexItem, {
      responseRate: `${Math.round(surveyIndexItem.response_rate * 100)}%`
    })
  })
}
