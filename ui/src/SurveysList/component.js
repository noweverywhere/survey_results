import React from 'react'
import * as loadingStates from '../lib/loadingStates'

class SurveyListComponent extends React.Component {
  constructor(props) {
    super(props)
    if (props.listStatus === loadingStates.NOTLOADED) {
      props.onLoad({})
    }
  }

  list() {
    return (
      <h3>this is a list</h3>
    )
  }

  render() {
    switch (this.props.listStatus) {
      case loadingStates.LOADED:
        return <div>{ this.list() }</div>
      case loadingStates.FAILED:
        return (
          <h3>Something went wrong :(</h3>
        )
      case loadingStates.NOTLOADED:
      case loadingStates.LOADING:
      default:
        return (
          <h3>LOADING...</h3>
        )
    }
  }
}

export default SurveyListComponent
