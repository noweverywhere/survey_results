import React from 'react'
import './styles.css'

const SurveyQuestion = ({description, responseAverage}) => {
  return(
    <tr >
      <td className="SurveyQuestion">{description}</td>
      <td className="SurveyQuestion">{responseAverage}</td>
    </tr>
  )
}

const SurveyTheme = ({name, questions}) => (
  <table className="SurveyTable ">
    <thead>
      <tr>
        <td><th>{name}</th></td>
        <td>Average Rating</td>
      </tr>
    </thead>
    <tbody>
    {
      questions.map(({ description, responseAverage }, i) => (
        <SurveyQuestion
          key={i}
          description={description}
          responseAverage={responseAverage} />
      ))
    }
    </tbody>
  </table>
)

const SurveyComponent = ({ survey }) => {
  const { themes } = survey
  return(
    <div className="Survey">
      {
        themes.map(({name, questions}, i) => (
          <SurveyTheme key={i} name={name} questions={questions} />
        ))
      }
    </div>
  )
}

export default SurveyComponent
