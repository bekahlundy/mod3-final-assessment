import React from 'react';
import Answers from './Answers'

const Quiz = ({ questions }) => {
  let q =[]
  if (questions.length > 0) {
    questions.map((el) => {
      q.push(
        <div className='indv-quiz-container'>
          {el.title}
          <Answers answers={el.answers} />
        </div>
      )
    })
    }
    return (
      <div>{q}</div>
  )
}

export default Quiz;
