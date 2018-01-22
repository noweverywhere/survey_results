import React from 'react'
import { shallow } from 'enzyme'
import SurveysListItem from '../surveys_list_item'
import SureveysListComponent from './'
const noop = () => ({})

describe('component/SureveysListComponent', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    shallow(
      <SureveysListComponent
        list={[]}
        loadingState={'LOADED'}
        onClick={noop} />,
      div
    )
  })

  it('renders a button for each survey in the list', () => {
    const div = document.createElement('div')

    const wrapper = shallow(
      <SureveysListComponent
        list={[{
         url: '/bizz',
         name: 'Bizz Survey'
        },{
         url: '/bazz',
         name: 'Bazz Survey'
        }]}
        loadingState={'LOADED'}
        onClick={noop} />,
      div
    )

    expect(wrapper.find(SurveysListItem).length).toEqual(2)
  })
})
