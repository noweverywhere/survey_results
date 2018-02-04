import './index'
import app from './lib/app'

describe('index.js', () => {
  it('calls app.init', () => {
    app.init = jest.fn()
    expect(window.onload).toBeInstanceOf(Function)
  })
})
