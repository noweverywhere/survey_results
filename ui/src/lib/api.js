import fetch from 'isomorphic-fetch'

export const getSurvey = (resolve, reject) => {
  return fetch(`${process.env.API_BASE_URL}api/v1/`)
    .then((response) => resolve(response.json()) )
    .catch(reject)
}

export default { getSurvey }
