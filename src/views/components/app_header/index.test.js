import React from 'react'
import { shallow } from 'enzyme'
import AppHeader from './'
const noop = () => ({})

describe('component/app_header', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    shallow(
      <AppHeader unselectSurvey={noop} selectedSurvey={{}} />,
      div
    )
  })

  describe('no selectedSurvey provided', () => {
    it('does not render the back button', () => {
      const div = document.createElement('div')

      const wrapper = shallow(<AppHeader unselectSurvey={noop} />, div)

      expect(wrapper.find('button').length).toEqual(0)
    })

    it('shows app title as "Survey Results"', () => {
      const div = document.createElement('div')

      const wrapper = shallow(<AppHeader unselectSurvey={noop} />, div)

      expect(wrapper.find('.HeaderApp__title')
        .text()).toEqual('Survey Results')
    })
  })

  describe('with selectedSurvey provided', () => {
    it('renders survey name as title', () => {
      const div = document.createElement('div')

      const wrapper = shallow(
        <AppHeader unselectSurvey={noop} selectedSurvey={{name: 'fofof'}} />,
        div
      )

      expect(wrapper.find('.HeaderApp__title')
        .text()).toEqual('fofof')
    })

    it('renders the button that calls unselectSurvey when clicked', () => {
      const div = document.createElement('div')
      const spy = jest.fn()

      shallow(
        <AppHeader unselectSurvey={spy} selectedSurvey={{}} />,
        div
      ).find('button').simulate('click')

      expect(spy.mock.calls.length).toEqual(1)
    })
  })
})
