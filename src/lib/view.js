import { emptyElement, replaceContents } from './view_helpers'

export const ListView = (appNode) => {
  const domElement = document.createElement('div')
  appNode.appendChild(domElement)

  return {
    showLoading: () => {
      domElement.innerHTML = '<div>LOADING SURVEYS</div>'
    },
    showSurveys: ({surveys, selectSurvey}) => {
      const buttons = surveys.map((survey) => {
        const button = document.createElement('button')
        button.innerText = survey.name
        button.onclick = () => selectSurvey(survey)
        return button
      })
      replaceContents(domElement, buttons)
    }
  }
}

export default { ListView }
