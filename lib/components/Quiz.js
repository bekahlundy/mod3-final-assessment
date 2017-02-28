import React from 'react';
import Answers from './Answers'

const Quiz = ({ questions, setScore, handleToggle }) => {
  let q =[]
    questions.map((el) => {
      q.push(
        <div className='indv-quiz-container' key={el.id}>
          {el.title}
          <Answers
            answers={el.answers}
            id={el.id}
            setScore={setScore}
            handleToggle={handleToggle}/>
        </div>
      )
    })

    return (
      <div>{q}</div>
  )
}

export default Quiz;
