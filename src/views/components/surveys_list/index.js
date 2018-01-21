import React from 'react'
import PropTypes from 'prop-types'

const SurveysListItem = ({onClick, url, name}) => (
  <div>
    <button onClick={ () => {onClick(url)} }>{name}</button>
  </div>
)

const SurveysListComponent = ({onClick, list, loadingState}) => {
  return (
    <div>
      {
        list.map((listItem, index) => (
          <SurveysListItem key={index} {...listItem} onClick={onClick} />
        ))
      }
    </div>
  )
}

SurveysListComponent.propTypes = {
  list: PropTypes.array.isRequired,
  loadingState: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default SurveysListComponent
