import React from 'react'
import { shallow } from 'enzyme'
import App from './index'

describe('App.js', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    shallow(<App />, div)
  })
})
