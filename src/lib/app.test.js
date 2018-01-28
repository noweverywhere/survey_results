import app from './app'
import api from './api'
import views from './view'

describe('app', () => {
  describe('init', () => {
    const appDiv = document.createElement('div')
    let mockListView

    beforeEach(() => {
      mockListView = {
        showLoading: jest.fn(),
        showFailure: jest.fn()
      }
      views.ListView = jest.fn(() => (mockListView))
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

    it('marks the list view as loading', () => {
      app.init('#app_test')()

      expect(mockListView.showLoading.mock.calls.length).toEqual(1)
    })
  })
})
