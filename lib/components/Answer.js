import React from 'react';

const Answer = ({ answer, score, name }) => {
  return (
    <div>
      <input
        className='answers'
        type='radio'
        name={name}
      /> {answer}
    </div>
  );
}

export default Answer;
