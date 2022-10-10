import React from 'react';
import Option  from '../Option/Option';
import '../QuizSection.css'

const SingleQuestion = ({ item }) => {
   console.log(item)
   const { question,options } = item;
  return (
    <div className="m-10 quiz-box p-5">
      <h1 className="quiz-title text-lg font-bold mb-10">Quiz 1 {question}</h1>
      <div className='grid grid-cols-2'>
        {options.map((option) => (
          <Option option={option}></Option>
        ))}
      </div>
    </div>
  );
};

export default SingleQuestion;