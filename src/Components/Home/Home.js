import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css';
import HomeLeft from './HomeLeft/HomeLeft';
import HomeRight from './HomeRight/HomeRight';
import bottomLogo from '../Images/bottom.png'


const Home = () => {
   const data = useLoaderData();
   const quizCategories = data.data;

   return (
     <div className="flex sm:flex-col lg:flex-row min-h-fit home home-container">
       <section className="flex-none sm:w-4/4 lg:w-fit side-section m-16 rounded-3xl">
         <HomeLeft />
       </section>
       <section className="flex-1 bg-amber-300 rounded-3xl right-section relative  p-5 sm:m-16">
         <h1 className="text-3xl font-bold my-20">
           There are 4 Types of Quizz you can judge yourself
         </h1>
         <div className="grid xl:grid-cols-2 2xl:grid-cols-4 sm:grid-cols-2 gap-10">
           {quizCategories.map((quiz) => (
             <HomeRight quiz={quiz} key={quiz.id}></HomeRight>
           ))}
         </div>
         <img
           src={bottomLogo}
           className="w-96 absolute bottom-0 2xl:block sm:hidden"
           alt=""
         />
       </section>
     </div>
   );
};

export default Home;