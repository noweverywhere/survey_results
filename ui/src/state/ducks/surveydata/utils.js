export const tidyQuestions = (questions) => {
  return questions.map(tidyQuestion)
}

const flatten = (acc, el) => {
  const items = Array.isArray(el) ? el.reduce(flatten, []) : [el]
  return acc.concat(items)
}

const createMissingGroupsFunctor = (currentGroup, groupsThatExist) => (
  (_, index) => {
    const rating = index + 1
    const existingGroup = groupsThatExist
      .filter((v) => {
        return v.responseContent === rating
      }).shift()
    if (existingGroup) {
      return currentGroup === existingGroup ? currentGroup : null
    } else {
      return {
        responseContent: index + 1,
        responsesInGroup: 0
      }
    }
  }
)

const createGroupsForUnselectedResponses = (currentGroup, i, groupsThatExist) => {
  const numberOfGroups = groupsThatExist.reduce(flatten, []).length
  const highestResponse = (
    groupsThatExist.reduce((highest, current) => (
      current.responseContent > highest ? current.responseContent : highest
    ), 0)
  )

  if (
    highestResponse < numberOfGroups ||
    highestResponse !== currentGroup.responseContent
  ) {
    return currentGroup
  }
  return new Array(highestResponse).fill()
    .map(createMissingGroupsFunctor(currentGroup, groupsThatExist))
    .filter((v) => (v))
}

export const generateResponsesDistribution = (responses) => {
  const createResponseGroups = (groupsArray, {response_content: responseContent}) => {
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
  const arrangeFromSmallToBig = (a, b) => a.responseContent - b.responseContent

  return (
    responses
      .reduce(createResponseGroups, [])
      .map(createGroupsForUnselectedResponses, [])
      .reduce(flatten, [])
      .sort(arrangeFromSmallToBig)
  )
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
    responsesDistribution: generateResponsesDistribution(responses)
  }
}
