import { cleanQuestionResponses, tidyQuestions, tidyQuestion } from './utils'

const questions = [
  {
    "description": "I like the kind of work I do.",
    "question_type": "ratingquestion",
    "survey_responses": [
      {
        "id": 1,
        "question_id": 1,
        "respondent_id": 1,
        "response_content": "5"
      },
      {
        "id": 1,
        "question_id": 1,
        "respondent_id": 2,
        "response_content": ""
      },
      {
        "id": 1,
        "question_id": 1,
        "respondent_id": 3,
        "response_content": "1"
      },
      {
        "id": 1,
        "question_id": 1,
        "respondent_id": 3,
        "response_content": "5"
      }
    ]
  }
]

describe('surveydata/utils', () => {
  describe('tidyQuestion ', () => {
    it('returns object that includes description', () => {
      const tidiedQuestion = tidyQuestion(questions[0])
      expect(tidiedQuestion.description).toEqual(
        'I like the kind of work I do.'
      )
    })

    it('returns average of ratings', () => {
      const tidiedQuestion = tidyQuestion(questions[0])
      expect(tidiedQuestion.responseAverage).toEqual("3.7")
    })
  })
})

