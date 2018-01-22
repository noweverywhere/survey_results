import React from 'react'
import PropTypes from 'prop-types'
import SurveysListItem from '../surveys_list_item'

export const SurveysListComponent = ({onClick, list, loadingState}) => {
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
