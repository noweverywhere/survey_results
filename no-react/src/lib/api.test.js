import nock from 'nock'
import { get, api } from './api'
import {
  RESPONSE_NOT_OK,
  BAD_FORMAT,
  CONNECTIVITY_PROBLEMS
} from './constants'

describe('lib/api', () => {
  const testApiBaseUrl = 'https://api.example.com'

  describe('get', () => {
    it('resolves object with expected shape during success', () => {
      nock(testApiBaseUrl)
       .get('/')
       .reply(200, {foo: 'bar'})

      const promise = get(testApiBaseUrl)

      return expect(promise).resolves.toEqual({
        data: {foo: 'bar'},
        statusCode: 200,
        errorMessage: null,
        success: true
      })
    })

    describe('failure', () => {
      it('resolves object with expected shape during failure', () => {
        nock(testApiBaseUrl)
         .get('/')
         .reply(400, {foo: 'bar'})

        const promise = get(testApiBaseUrl)

        return expect(promise).resolves.toEqual({
          data: null,
          statusCode: 400,
          errorMessage: RESPONSE_NOT_OK,
          success: false,
          error: null
        })
      })

      it('resolves with expected shape output from bad data', () => {
        nock(testApiBaseUrl)
         .get('/')
         .reply(200, 'Not json')

        const promise = get(testApiBaseUrl)

        return expect(promise).resolves.toEqual({
          data: null,
          errorMessage: BAD_FORMAT,
          statusCode: 200,
          success: false,
          error: `FetchError: invalid json response body at ${testApiBaseUrl} reason: Unexpected token N in JSON at position 0`
        })
      })

      it('resolves with expected shape output from serious network issues', () => {
        const promise = get('not an url')

        return expect(promise).resolves.toEqual({
          data: null,
          errorMessage: CONNECTIVITY_PROBLEMS,
          statusCode: null,
          success: false,
          error: 'Error: only absolute urls are supported'
        })
      })
    })
  })

  describe('api().index', () => {
    it('appends the path to the surveys index', () => {
      nock(testApiBaseUrl)
       .get('/index.json')
       .reply(200, {survey_results: [{response_rate: 8}]})

      const promise = api(testApiBaseUrl).index()

      return expect(promise).resolves.toEqual({
        data: [{response_rate: 8, responseRate: '800%'}],
        statusCode: 200,
        errorMessage: null,
        success: true
      })
    })
  })

  describe('api().show', () => {
    it('appends the provided surveyUrl to the api base url', () => {
      nock(testApiBaseUrl)
       .get('/surveys/foo.json')
       .reply(200, { foo: 'bar' })

      const promise = api(testApiBaseUrl).show({
        surveyUrl: '/surveys/foo.json'
      })

      return expect(promise).resolves.toEqual({
        data: { foo: 'bar' },
        statusCode: 200,
        errorMessage: null,
        success: true
      })
    })
  })
})
