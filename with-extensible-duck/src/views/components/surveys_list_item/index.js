import React from 'react'
import PropTypes from 'prop-types'

const SurveysListItemComponent = ({onClick, url, name}) => {
  return (
  <div>
    <button onClick={ () => {onClick(url)} }>{name}</button>
  </div>
  )
}

SurveysListItemComponent.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired
}

export default SurveysListItemComponent
