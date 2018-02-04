import {
  tidyResponses,
  averageResponses,
  mapQuestions
} from './reducers'

describe('lib/reducers', () => {
  const questions = [
    {
      'description': 'I like the kind of work I do.',
      'question_type': 'ratingquestion',
      'survey_responses': [
        {'id': 1, 'question_id': 1, 'respondent_id': 1, 'response_content': '5'},
        {'id': 6, 'question_id': 1, 'respondent_id': 2, 'response_content': '4'},
        {'id': 11, 'question_id': 1, 'respondent_id': 3, 'response_content': '5'},
        {'id': 16, 'question_id': 1, 'respondent_id': 4, 'response_content': '5'},
        {'id': 21, 'question_id': 1, 'respondent_id': 5, 'response_content': '4'},
        {'id': 26, 'question_id': 1, 'respondent_id': 6, 'response_content': ''}
      ]
    },
    {
      'description': 'In general..',
      'question_type': 'ratingquestion',
      'survey_responses': [
        {'id': 2, 'question_id': 2, 'respondent_id': 1, 'response_content': '5'},
        {'id': 7, 'question_id': 2, 'respondent_id': 2, 'response_content': '5'},
        {'id': 12, 'question_id': 2, 'respondent_id': 3, 'response_content': '5'},
        {'id': 17, 'question_id': 2, 'respondent_id': 4, 'response_content': '5'},
        {'id': 22, 'question_id': 2, 'respondent_id': 5, 'response_content': '5'},
        {'id': 27, 'question_id': 2, 'respondent_id': 6, 'response_content': ''}
      ]
    }
  ]

  describe('tidyResponses', () => {
    const untidyResponses = [
      {'response_content': '5'},
      {'response_content': '4'},
      {'response_content': '5'},
      {'response_content': '5'},
      {'response_content': '4'},
      {'response_content': ''},
      {'response_content': '0'}
    ]

    it('ignores empty string responses', () => {
      expect(untidyResponses.reduce(tidyResponses, []).length).toEqual(5)
    })

    it('returns an array of response_content strings cast to numbers', () => {
      expect(
        untidyResponses.reduce(tidyResponses, [])
      ).toEqual([5, 4, 5, 5, 4])
    })
  })

  describe('averageResponses', () => {
    it('returns the average of the array of numbers rounded to one decimal', () => {
      expect(averageResponses([5, 4, 5, 5, 4])).toEqual(4.6)
    })
  })

  describe('mapQuestions', () => {
    it('returns list of questions with average as property', () => {
      const mappedQuestions = questions.map(mapQuestions)

      expect(mappedQuestions[0].responses.average).toEqual(4.6)
      expect(mappedQuestions[1].responses.average).toEqual(5)
    })

    it('returns list of questions with responses grouped in distribution map', () => {
      const responses = questions.map(mapQuestions)[0].responses

      expect(responses.distribution.groups.length).toEqual(5)
      expect(responses.distribution.groups.pop()).toEqual({
        count: 3, height: 100, percentage: 60, value: 5
      })
    })
  })
})
