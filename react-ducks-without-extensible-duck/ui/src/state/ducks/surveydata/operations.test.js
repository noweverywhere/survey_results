import operations from './operations'
import actions from './actions'
import getSurvey from '../../../lib/api'

describe('surveydata/operations', () => {
  describe('loadList', () => {
    it('calls the action to mark loading progress has started', () => {
      const spy = jest.spyOn(actions, 'loadList')
      operations.loadList()
      expect(spy).toHaveBeenCalled()
      spy.mockReset()
      spy.mockRestore()
    })
  })
})

//const loadList = repository => {
//  actions.loadList(repository)
//  return function (dispatch) {
//    dispatch(moveDonationStarted(donationId))
//    return changePageDonationWasMadeTo(donationId, targetPageUri).then(
//      data => {
//        if ([200, 204].includes(data.statusCode)) {
//          dispatch(moveDonationSuccess(donationId, data))
//        } else {
//          dispatch(moveDonationFailed(donationId, data))
//        }
//      }
//    )
//  }
//}
//
//export default {
//  loadList
//}
