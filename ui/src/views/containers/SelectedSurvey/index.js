import { connect } from 'react-redux'
import { surveyDataOperations } from '../../../state/ducks/surveydata'
import SelectedSurvey from '../../components/SelectedSurvey/'

const mapStateToProps = (state) => ({
  ...state.surveyDataState
})
const mapDispatchToProps = {
  unselectSurvey: surveyDataOperations.unselectSurvey
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedSurvey)
