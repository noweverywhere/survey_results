import fetch from 'isomorphic-fetch'
import { reduceSurveyIndex } from './reducers'
import {
  RESPONSE_NOT_OK,
  BAD_FORMAT,
  CONNECTIVITY_PROBLEMS
} from './constants'

const resolveWithErrors = (response, errorMessage, error = null) => (
  Promise.resolve({
    data: null,
    statusCode: response.status || null,
    errorMessage: errorMessage,
    success: false,
    error: (error && error.toString()) || null
  })
)

export const get = (url) => {
  return (
    fetch(url)
    .then((response) => {
      if (!response.ok) {
        return resolveWithErrors(response, RESPONSE_NOT_OK)
      }
      return response.json().then((data) => {
        return Promise.resolve({
          statusCode: response.status,
          errorMessage: null,
          data,
          success: true
        })
      })
      .catch((error) => {
        return resolveWithErrors(response, BAD_FORMAT, error)
      })
    })
    .catch((error) => {
      return resolveWithErrors({}, CONNECTIVITY_PROBLEMS, error)
    })
  )
}

export const api = (baseUrl) => ({
  index: () => {
    return get(`${baseUrl}/index.json`).then((outcome) => {
      return Object.assign(
        outcome, {data: (outcome.data && reduceSurveyIndex(outcome.data))}
      )
    })
  },
  show: ({surveyUrl}) => {
    return get(baseUrl + surveyUrl)
  }
})

export default { init: api }
