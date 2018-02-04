import React from 'react'
import './styles.css'

const SurveyDescriptionComponent = ({ survey }) => {
  const {
    name, participantCount, submittedResponseCount, responseRate
  } = survey
  return(
    <div>
      <div className="SurveyDescription">
        <div className="SurveyDescription__name">
          { name }
        </div>
        <span className="SurveyDescription__particpantCount">
          { participantCount } Paricipants of which { submittedResponseCount } responded
        </span>&nbsp;
        <span className="SurveyDescription__responseRate">
          ({ responseRate }% response rate)
        </span>
      </div>
    </div>
  )
}

export default SurveyDescriptionComponent
