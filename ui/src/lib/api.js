import fetch from 'isomorphic-fetch'
const baseURL = process.env.API_BASE_URL || process.env.PUBLIC_URL

export const indexSurveys = (resolve, reject) => {
  return fetch(`${baseURL}/api/v1`)
    .then(response => {
      return response.json()
    })
    .catch(reject)
}

export const showSurvey = (survey) => {
  return fetch(`${baseURL}/api/v1${survey.url}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        return {}
      }
    })
}

export default { indexSurveys, showSurvey }
