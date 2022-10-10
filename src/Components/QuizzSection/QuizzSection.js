import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from './SingleQuestion/SingleQuestion';
import './QuizSection.css'

const QuizzSection = () => {
   const data = useLoaderData();
   const quizQuestions =data.data;
   console.log(quizQuestions)
   const { name, questions,id } = quizQuestions;
   return (
     <div className='quiz-container'>
       <h1>Quiz of {name}</h1>
       <div className='grid grid-cols-1 w-6/12 m-auto'>
         {questions.map((item) => (
           <SingleQuestion item={item} key={id}></SingleQuestion>
         ))}
       </div>
     </div>
   );
};

export default QuizzSection;