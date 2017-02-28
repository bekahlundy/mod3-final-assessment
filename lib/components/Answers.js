import React from 'react';

const Answers = ({ answers, id, handleToggle }) => {

  let ans = []
  answers.map((el) => {
    ans.push(
      <div key={el.score} className={'answers' + el.score}>
        <input
          type='radio'
          name={id}
          value={el.score}
          onChange={ () => handleToggle(id, el.score) }
          />{el.title}
      </div>
    )
  })
  return (
    <form>{ans}</form>
  );
}

export default Answers;
