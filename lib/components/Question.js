import React from 'react';
import Answer from './Answer'

const Question = ({ title, id, answers }) => {
  let list = answers.map((ans) => {
    return (
      <Answer
        answer={ans.title}
        score={ans.score}
        name={id}/>
    )
  })
  return (
    <div>
      <p>{title}</p>
      {list}
    </div>
  );
}

export default Question;
