import fetch from 'isomorphic-fetch'

export const get = ({url}) => {
  return fetch(url)
    .then(response => {
      return response.json().then(
        (data) => ({
          data,
          success: true
        })
      )
    })
    .catch((error) => ({
        success: false,
      })
    )
}

export const surveys = {
  index: ({
    repositoryUrl,
    success
  }) => {
    const url = (
      repositoryUrl ||
      process.env.API_BASE_URL ||
      `${process.env.PUBLIC_URL}/surveys/index.json`
    )

    return get({ url })
  }
}
