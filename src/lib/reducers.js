import { VALID_RATINGS_RESPONSES } from './constants'

export const calculateRelativeHeight = (maxPercentage) => (group) => {
  return Object.assign(
    group,
    { height: ((group.percentage / maxPercentage) * 100) }
  )
}

export const generateResponseDistribution = (responses) => {
  const responseGroups = VALID_RATINGS_RESPONSES.map((value) => {
    const count = responses.filter((n) => n === value).length
    const percentage = (count / responses.length) * 100
    return {
      value,
      count,
      percentage: percentage
    }
  })
  const largestGroup = responseGroups.reduce((acc, group) => (
    acc.percentage > group.percentage ? acc : group
  ))
  return {
    groups: responseGroups.map(
      calculateRelativeHeight(largestGroup.percentage)
    )
  }
}

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
        average: Math.round(averageResponses(cleanedResponses) * 100) / 100,
        distribution: generateResponseDistribution(cleanedResponses)
      }
    }
  )
}

export const mapSurveyThemes = (theme) => {
  return Object.assign(theme, {
    questions: theme.questions.map(mapQuestions)
  })
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
