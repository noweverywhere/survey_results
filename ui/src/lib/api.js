import fetch from 'isomorphic-fetch'
const baseURL = process.env.API_BASE_URL || process.env.PUBLIC_URL

export const indexSurveys = (resolve, reject) => {
  return fetch(`${baseURL}/api/v1`)
    .then(response => {
      return response.json()
    })
    .catch(reject)
}

export default { getSurvey }
