import app from './app'
import api from './api'

describe('app', () => {
  describe('init', () => {
    const appDiv = document.createElement('div')

    beforeEach(() => {
      appDiv.id = 'app_test'
      document.body.appendChild(appDiv)

      api.init = jest.fn(() => ({
        index: () => {
          return new Promise((resolve) => { resolve({}) })
        }
      }))
    })

    it('returns a function', () => {
      expect(app.init(document.createElement('div'))).toBeInstanceOf(Function)
    })

    it('calls loadIndex with API_BASE_URL environment variable', () => {
      app.init('#app_test')()

      expect(api.init).toBeCalledWith('http://example.com')
    })
  })
})
