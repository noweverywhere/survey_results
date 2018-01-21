import { connect } from 'react-redux'
// import surveyDuck from '../../../state/ducks/surveys'
import SurveysListComponent from '../../components/surveys_list/'

const mapStateToProps = (state) => ({
  list: state.surveys.list,
  loadingState: state.surveys.indexLoadingStatus
})
const mapDispatchToProps = {
  onClick: () => {
    return {type: 'TODO: add selectSurvey creator to surveys duck'}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveysListComponent)
