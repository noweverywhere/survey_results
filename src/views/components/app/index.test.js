import React from 'react'
import ReactDOM from 'react-dom'
import App from './'

describe('component/app', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<App onLoad={() => ({})} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('calls the provided onLoad prop', () => {
    const spy = jest.fn()
    const div = document.createElement('div')

    ReactDOM.render(<App onLoad={spy} />, div)
    ReactDOM.unmountComponentAtNode(div)

    expect(spy.mock.calls.length).toEqual(1)
  })
})
