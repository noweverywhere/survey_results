import fetch from 'isomorphic-fetch'

export const surveys = {
  index: ({
    repositoryUrl,
    success
  }) => {
    const apiUrl = (
      repositoryUrl ||
      process.env.API_BASE_URL ||
      `${process.env.PUBLIC_URL}/surveys/index.json`
    )

    return fetch(repositoryUrl || apiUrl)
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
}
