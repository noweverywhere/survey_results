import { connect } from 'react-redux'
import { surveyDataOperations } from '../state/ducks/surveydata'
import SurveyListComponent from './component'

const mapStateToProps = (state) => ({
  ...state.surveyDataState
})
const mapDispatchToProps = {
  onLoad: surveyDataOperations.loadList
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyListComponent)
