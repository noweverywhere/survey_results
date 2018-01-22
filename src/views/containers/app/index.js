import { connect } from 'react-redux'
import appDuck from '../../../state/ducks/app'
import surveyDuck from '../../../state/ducks/surveys'
import AppComponent from '../../components/app/'

const mapStateToProps = (state) => ({
  ...state.app,
  surveysListLoadStatus: state.surveys.indexLoadingStatus,
  selectedSurvey: surveyDuck.selectors.selectedSurvey(state)
})
const mapDispatchToProps = {
  onLoad: appDuck.creators.appLoaded,
  unselectSurvey: surveyDuck.creators.unselectSurvey
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)
