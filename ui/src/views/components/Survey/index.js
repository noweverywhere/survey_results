import React from 'react'
import './styles.css'

const SurveyQuestion = ({description, responseAverage}) => {
  return(
    <tr className="SurveyQuestion">
      <td>{description}</td>
      <td>{responseAverage}</td>
    </tr>
  )
}

const SurveyTheme = ({name, questions}) => (
  <table className="SurveyTable ">
    <thead>
      <tr>
        <td><span className="SurveyTable__themeName">{name}</span></td>
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
