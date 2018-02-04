import React from 'react'
import { shallow } from 'enzyme'
import { LOADED, LOADING, FAILED } from '../../../lib/loadStatusConstants'
import App from './'
import SurveysListContainer from '../../containers/surveys_list'
import AppHeader from '../app_header'
const noop = () => ({})

describe('component/app', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    shallow(
      <App
        onLoad={noop}
        unselectSurvey={noop}
        surveysListLoadStatus={'foobar'} />,
      div
    )
  })

  it('calls the provided onLoad prop', () => {
    const spy = jest.fn()
    const div = document.createElement('div')

    shallow(
      <App
        onLoad={spy}
        unselectSurvey={noop}
        surveysListLoadStatus={'foobar'} />,
        div
      )

    expect(spy.mock.calls.length).toEqual(1)
  })

  describe('AppHeader', () => {
    it('renders AppHeader', () => {
      const div = document.createElement('div')
      const wrapper = shallow(
        <App
          onLoad={noop}
          unselectSurvey={noop}
          surveysListLoadStatus={ LOADED } />,
        div
      )

      expect(wrapper.find(AppHeader).length).toEqual(1)
    })
  })

  describe('depending on surveysListLoadStatus prop', () => {
    describe('SurveysList', () => {
      it('renders SurveysList when surveysListLoadStatus=LOADED', () => {
        const div = document.createElement('div')
        const wrapper = shallow(
          <App
            onLoad={noop}
            unselectSurvey={noop}
            surveysListLoadStatus={ LOADED } />,
          div
        )

        expect(wrapper.find(SurveysListContainer).length).toEqual(1)
      })

      it('does not render SurveysList when surveysListLoadStatus!==LOADED', () => {
        const div = document.createElement('div')
        const wrapper = shallow(
          <App
            onLoad={noop}
            unselectSurvey={noop}
            surveysListLoadStatus={ LOADING } />,
          div
        )

        expect(wrapper.find(SurveysListContainer).length).toEqual(0)
      })
    })
  })
})
