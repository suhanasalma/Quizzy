import React from 'react';
import { useLoaderData } from 'react-router-dom';
import logo from '../Images/hero.jpg'
import './Blog.css'
import BlogDetails from './BlogDetails/BlogDetails';
import BlogInfo from './BlogInfo/BlogInfo';

const Blog = () => {
   const informatios = [
     {
       id: "6344b539d851c575d97fced8",
       name: "What is the Purpose of React Router",
       details:
         "React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.",
       img: "https://i.ibb.co/rH00V0V/react-router-logo.png",
     },
     {
       id: "6344b539ec4e3a7b7d29ab19",
       name: "How does Context Api Work",
       details:
         "The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to prop drilling or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.",
       img: "https://i.ibb.co/TrW7Khb/react-context-for-beginners.png",
     },
     {
       id: "6344b539bcfe71267a6d2700",
       name: "What is useRef in React",
       details:
         "The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.",
       img: "https://i.ibb.co/HYHnbbG/1-ui7-BGKxc0-I-q-Bbd93-Iop-MA.jpg",
     },
   ];

   return (
     <div className="blog-container pt-10 sm:h-fit xl:h-full mt-3">
       <ul className="absolute p-3">
         <li className="">
           <a href="https://www.facebook.com/">
             <i class="fa-brands fa-facebook  text-3xl mb-5"></i>
           </a>
         </li>
         <li>
           <a href="https://www.instagram.com/">
             <i class="fa-brands fa-instagram  text-3xl mb-5"></i>
           </a>
         </li>
         <li>
           <a href="https://github.com/suhanasalma?tab=repositories">
             <i class="fa-brands fa-github  text-3xl mb-5"></i>
           </a>
         </li>
       </ul>
       <div className="flex sm:flex-col lg:flex-row  justify-around w-9/12 m-auto blog-up-container">
         <div className="sm:order-2 md:order-1">
           <h1 className="text-5xl font-bold mb-5">
             Suhana Salma <i class="fa-solid fa-hand"></i>
           </h1>
           <p className="text-xl font-medium">Web Developer</p>
           <p className=" mt-5">
             I am a Front End Web Developer based in Dhaka Bangladesh. This is
             my <span className="text-3xl font-bold"> Blog Site.</span>
           </p>
         </div>
         <img
           src={logo}
           className="sm:order-1 md:order-2 w-64 h-64 border-8 object-cover blog-img"
           alt=""
         />
       </div>
       <div className="grid md:grid-cols-2 xl:grid-cols-3 mt-20 gap-10 w-11/12 m-auto">
         {informatios.map((information) => (
           <BlogInfo information={information} key={information.id}></BlogInfo>
         ))}
       </div>
       <hr className="mt-20 h-1 bg-slate-500	" />
       <div className='p-10'>
         {informatios.map((information) => (
           <BlogDetails
             information={information}
             key={information.id}
           ></BlogDetails>
         ))}
       </div>
     </div>
   );
};

export default Blog;