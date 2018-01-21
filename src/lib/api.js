import fetch from 'isomorphic-fetch'

export const surveys = {
  index: ({
    repositoryUrl,
    success
  }) => {
    const apiUrl = (
      repositoryUrl ||
      process.env.API_BASE_URL ||
      `${process.env.PUBLIC_URL}/surveys`
    )

    return fetch(repositoryUrl || apiUrl)
      .then(response => {
        return response.json()
      }).catch((error) => {
        return error
      })
  }
}
