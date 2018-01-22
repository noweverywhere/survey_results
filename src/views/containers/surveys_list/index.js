import { connect } from 'react-redux'
import surveyDuck from '../../../state/ducks/surveys'
import SurveysListComponent from '../../components/surveys_list/'

const mapStateToProps = (state) => ({
  list: state.surveys.list,
  loadingState: state.surveys.indexLoadingStatus
})
const mapDispatchToProps = {
  onClick: surveyDuck.creators.selectSurvey
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveysListComponent)
