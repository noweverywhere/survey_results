import React from 'react'
import { BarChart, Bar } from 'recharts'
import './styles.css'

const ResponsesGraph = ({responsesDistribution}) => {
  if (!responsesDistribution) return null
  return(
    <div>
      <BarChart
        data={responsesDistribution}
        width={50} height={25}>
        <Bar dataKey="responsesInGroup" />
      </BarChart>
    </div>
  )
}

const SurveyQuestion = ({
  description, responseAverage, responsesDistribution
}) => {
  return(
    <tr className="SurveyQuestion">
      <td>{description}</td>
      <td>{responseAverage}</td>
      <td>
        <ResponsesGraph responsesDistribution={responsesDistribution}/>
      </td>
    </tr>
  )
}

const SurveyTheme = ({name, questions}) => (
  <table className="SurveyTable ">
    <thead>
      <tr>
        <td><span className="SurveyTable__themeName">{name}</span></td>
        <td>Average Rating</td>
        <td>Graph</td>
      </tr>
    </thead>
    <tbody>
    {
      questions.map(
        ({ description, responseAverage, responsesDistribution }, i) => (
          <SurveyQuestion
            key={i}
            description={description}
            responsesDistribution={responsesDistribution}
            responseAverage={responseAverage} />
        )
      )
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
