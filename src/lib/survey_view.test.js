import { SurveyView } from './survey_view'

describe('SurveyView', () => {
  it('appends itself to provided DOM node with body and header', () => {
    const initialDomNode = document.createElement('div')

    SurveyView(initialDomNode)

    expect(
      initialDomNode.querySelectorAll('.SurveyView').length
    ).toEqual(1)
    expect(
      initialDomNode.querySelectorAll('.SurveyView__body').length
    ).toEqual(1)
    expect(
      initialDomNode.querySelectorAll('.SurveyView__header').length
    ).toEqual(1)
  })

  describe('SurveyView().showLoading', () => {
    it('shows a loading state', () => {
      const initialDomNode = document.createElement('div')
      const view = SurveyView(initialDomNode)
      const body = initialDomNode.querySelector('.SurveyView__body')

      view.showLoading()

      expect(body.textContent).toEqual('LOADING SURVEY')
    })
  })

  describe('SurveyView().showSelectedSurvey', () => {
    it('shows a loading state', () => {
      const initialDomNode = document.createElement('div')
      const view = SurveyView(initialDomNode)
      const body = initialDomNode.querySelector('.SurveyView__header')

      view.showSelectedSurvey({ survey: { name: 'Foo' } })

      expect(body.textContent).toEqual('Foo')
    })
  })
})
