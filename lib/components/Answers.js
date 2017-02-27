import React from 'react';

const Answers = ({ answers }) => {
  let ans = []
answers.map((el) => {
  ans.push(
    <div className='answers'>
      <input
        type='radio'
        />{el.title}
    </div>
  )
})
  return (
    <form>{ans}</form>
  );
}

export default Answers;
