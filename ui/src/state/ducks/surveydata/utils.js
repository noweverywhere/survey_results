export const tidyQuestions = (questions) => {
  return questions.map(tidyQuestion)
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
    responseDistribution: responses.reduce((rv, x) => {
      (rv[x['response_content']] = rv[x['response_content']] || []).push(x)
      return rv
    }, {})
  }
}
