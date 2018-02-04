import React from 'react'
import { shallow } from 'enzyme'
import SurveysListItem from './'
const noop = () => ({})

describe('component/SurveysListItem', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    shallow(
      <SurveysListItem
        name={"name"}
        onClick={noop}
        url={"/fooo"} />,
      div
    )
  })

  it('calls onClick when the button is clicked', () => {
    const spy = jest.fn()
    const div = document.createElement('div')

    const wrapper = shallow(
      <SurveysListItem
        name={"name"}
        onClick={spy}
        url={"/fooo"} />,
      div
    )
    wrapper.find('button').simulate('click')

    expect(spy).toBeCalledWith('/fooo')
  })
})
