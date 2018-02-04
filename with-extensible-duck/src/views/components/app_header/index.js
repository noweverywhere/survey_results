import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const AppHeaderComponent = ({
  selectedSurvey,
  unselectSurvey
}) => {
  return (
    <header className='AppHeader'>
      {
        selectedSurvey && (
          <button
            className='AppHeader__button'
            onClick={ unselectSurvey }>
            Back
          </button>
        )
      }
      <h1 className='HeaderApp__title'>
        {
          (selectedSurvey && selectedSurvey.name) || 'Survey Results'
        }
      </h1>
    </header>
  )
}

AppHeaderComponent.propTypes = {
  unselectSurvey: PropTypes.func.isRequired,
  selectedSurvey: PropTypes.object
}

export default AppHeaderComponent
