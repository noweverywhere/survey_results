import nock from 'nock'
import {surveys} from './api'

describe('lib/api', () => {
  let apiBaseUrl, publicUrl

  beforeAll(() => {
    apiBaseUrl = process.env.API_BASE_URL
    publicUrl = process.env.PUBLIC_URL

    process.env.API_BASE_URL = ''
    process.env.PUBLIC_URL = 'https://example.com'
  })

  afterAll(() => {
    process.env.API_BASE_URL = apiBaseUrl
    process.env.PUBLIC_URL = publicUrl
  })

  describe('surveys.index', () => {
    describe('points to the correct API address', () => {
      it('calls repositoryUrl when provided', () => {
        const repositoryUrl = 'https://arbitrary.example.com'
        nock(repositoryUrl)
          .get('/')
          .reply(200, {foo: 'foo'})

        expect.assertions(1)
        return surveys.index({repositoryUrl}).then((data) => (
          expect(data).toEqual({ foo: 'foo'})
        ))
      })

      it('calls API_BASE_URL when available and repositoryUrl is not provided', () => {
        nock('https://api.example.com')
          .get('/')
          .reply(200, {foo: 'foo'})

        process.env.API_BASE_URL = 'https://api.example.com'
        process.env.PUBLIC_URL = 'https://example.com'

        expect.assertions(1)
        return surveys.index({}).then((data) => (
          expect(data).toEqual({ foo: 'foo'})
        ))
      })

      it('calls `${PUBLIC_URL}/surveys` when API_BASE_URL is not available', () => {
        nock('https://example.com')
          .get('/surveys')
          .reply(200, {foo: 'foo'})

        process.env.API_BASE_URL = ''
        process.env.PUBLIC_URL = 'https://example.com'

        expect.assertions(1)
        return surveys.index({}).then((data) => (
          expect(data).toEqual({ foo: 'foo'})
        ))
      })
    })
  })
})
