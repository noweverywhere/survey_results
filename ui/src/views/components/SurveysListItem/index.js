import React from 'react'
import SurveyDescription from '../SurveyDescription'
import './styles.css'

const SurveyListItem = ({ selectedSurvey, onSelect }) => {
  return(
    <div className="SurveyListItem">
      <button onClick={onSelect} className="SurveyListItem__button">
        <SurveyDescription survey={selectedSurvey}/>
      </button>
    </div>
  )
}

export default SurveyListItem
