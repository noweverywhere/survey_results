import { connect } from 'react-redux'
import appDuck from '../../../state/ducks/app'
import AppComponent from '../../components/app/'

const mapStateToProps = (state) => ({
  ...state.app
})
const mapDispatchToProps = {
  onLoad: appDuck.creators.appLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)
