import React, { useState } from 'react';
import Option  from '../Option/Option';
import '../QuizSection.css';
import { BeakerIcon, EyeIcon } from "@heroicons/react/24/solid";

const SingleQuestion = ({ item }) => {

   const { question, options, correctAnswer } = item;
   const [state,setState] = useState(false)


  return (
    <div className="m-10 quiz-box p-5">
      <div className="flex justify-between items-center">
        <h1 className="quiz-title text-lg font-bold mb-10 w-9/12">
          {question}
        </h1>
        <div onClick={() => setState(!state)}>
          {state ? (
            <div className="tooltip tooltip-open">
              <button className="btn">{correctAnswer}</button>
            </div>
          ) : (
            <EyeIcon className="h-6 w-6"></EyeIcon>
          )}
        </div>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        {options.map((option) => (
          <Option option={option} item={item}></Option>
        ))}
      </div>
      
    </div>
  );
};

export default SingleQuestion;