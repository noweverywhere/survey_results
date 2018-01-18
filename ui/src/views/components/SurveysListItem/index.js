import React from 'react'

const SurveyListItem = ({
  name, url, participant_count, response_rate, submitted_response_count, onSelect
}) => (
  <li className="SurveyListItem">
    <div className="SurveyListItem__name">{name}</div>
    <button onClick={onSelect} className="SurveyListItem__button">Select</button>
  </li>
)

export default SurveyListItem
