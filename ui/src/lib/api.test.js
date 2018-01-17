import nock from 'nock'
import api from './api'

describe('API', () => {
  let originalApiBaseUrl

  nock('http://example.com')
    .get('/api/v1/')
    .reply(200, {
      foo: 'bar'
    })

  beforeAll(() => {
    originalApiBaseUrl = process.env.API_BASE_URL
    process.env.API_BASE_URL = 'http://example.com/'
  })

  afterAll(() => {
    process.env.API_BASE_URL = originalApiBaseUrl
  })

  it('can fetch the surveys index', async () => {
    return expect(api.getSurvey(json => json)).resolves.toEqual({foo: 'bar'})
  })
})
