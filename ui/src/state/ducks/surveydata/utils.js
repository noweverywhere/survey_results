export const tidyQuestions = (questions) => {
  return questions.map(tidyQuestion)
}

export const tidyQuestion = (question) => {
  const responses = question.survey_responses.filter(
    (res) => !(res.response_content === '')
  )
  const responsesSum = responses.reduce(
    (a, res) => (a + parseInt(res.response_content, 10)),
    0
  )
  const responseCount = responses.length
  const responseAverage = responseCount > 0 ? (responsesSum/responseCount) : undefined

  return {
    description: question.description,
    responseAverage: responseAverage.toFixed(1)
  }
}
