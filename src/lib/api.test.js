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
    describe('handle success/failure', () => {
      it('returns an object with success:false when something goes wrong', () => {
        const repositoryUrl = 'https://arbitrary.example.com'
        nock(repositoryUrl)
          .get('/')
          .reply(200, 'this is not html')

        surveys.index({repositoryUrl}).then((response) => {
          return expect(response.success).toEqual(false)
        })
      })

      it('returns an object with success:true when request works', () => {
        const repositoryUrl = 'https://arbitrary.example.com'
        nock(repositoryUrl)
          .get('/')
          .reply(200, {foo: 'foo'})

        surveys.index({repositoryUrl}).then((response) => {
          return expect(response.success).toEqual(true)
        })
      })
    })

    describe('points to the correct API address', () => {
      it('calls repositoryUrl when provided', () => {
        const repositoryUrl = 'https://arbitrary.example.com'
        nock(repositoryUrl)
          .get('/')
          .reply(200, {foo: 'foo'})

        return surveys.index({repositoryUrl}).then((response) => (
          expect(response.data).toEqual({ foo: 'foo'})
        ))
      })

      it('calls API_BASE_URL when available and repositoryUrl is not provided', () => {
        nock('https://api.example.com')
          .get('/')
          .reply(200, {foo: 'foo'})

        process.env.API_BASE_URL = 'https://api.example.com'
        process.env.PUBLIC_URL = 'https://example.com'

        expect.assertions(1)
        return surveys.index({}).then((response) => (
          expect(response.data).toEqual({ foo: 'foo'})
        ))
      })

      it('calls `${PUBLIC_URL}/surveys/index.json` when API_BASE_URL is not available', () => {
        nock('https://example.com')
          .get('/surveys/index.json')
          .reply(200, {foo: 'foo'})

        process.env.API_BASE_URL = ''
        process.env.PUBLIC_URL = 'https://example.com'

        expect.assertions(1)
        return surveys.index({}).then((response) => (
          expect(response.data).toEqual({ foo: 'foo'})
        ))
      })
    })
  })
})
