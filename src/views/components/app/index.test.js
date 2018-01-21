import React from 'react'
import { shallow } from 'enzyme'
import App from './'
import SurveysListContainer from '../../containers/surveys_list'

describe('component/app', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    shallow(<App onLoad={() => ({})} />, div)
  })

  it('calls the provided onLoad prop', () => {
    const spy = jest.fn()
    const div = document.createElement('div')

    shallow(<App onLoad={spy} />, div)

    expect(spy.mock.calls.length).toEqual(1)
  })

  it('renders SurveysList as a child', () => {
    const div = document.createElement('div')
    const wrapper = shallow(<App onLoad={() => ({})} />, div)

    // need to find a better way to make this assertion that gives
    // better output. Can't remember how
    expect(wrapper.find(SurveysListContainer).length).toEqual(1)
  })
})
