export const tidyQuestions = (questions) => {
  return questions.map(tidyQuestion)
}

const generateResponseDistribution = (responses) => {
  const groupResponses = (groupsArray, {response_content: responseContent}) => {
    const matchingGroup = groupsArray.filter(
      (group) => (group.responseContent === responseContent)
    )[0] || {responsesInGroup: 0}
    const nonMatchingGroups = groupsArray.filter(
      (group) => (group.responseContent !== responseContent)
    )
    const {responsesInGroup} = matchingGroup

    return [{
      responseContent: responseContent,
      responsesInGroup: (responsesInGroup + 1)
    }, ...nonMatchingGroups]
  }

  return responses.reduce(groupResponses, [])
}

export const tidyQuestion = (question) => {
  const responseContentToInt = (response) => ({
    ...response,
    response_content: parseInt(response.response_content, 10)
  })

  const responses = question.survey_responses.filter(
    (res) => !(res.response_content === '')
  ).map(responseContentToInt)
  const responsesSum = responses.reduce(
    (a, res) => (a + res.response_content),
    0
  )
  const responseCount = responses.length
  const responseAverage = responseCount > 0 ? (responsesSum/responseCount) : undefined

  return {
    description: question.description,
    responses,
    responseAverage: responseAverage.toFixed(1),
    responseDistribution: generateResponseDistribution(responses)
  }
}
