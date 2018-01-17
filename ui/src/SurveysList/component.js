import React from 'react'

class SurveyListComponent extends React.Component {
  constructor(props) {
    super(props)
    if (props.listLoaded === false) {
      props.onLoad({})
    }
  }

  render() {
    return (
      <h3>this is a list</h3>
    )
  }
}

export default SurveyListComponent
