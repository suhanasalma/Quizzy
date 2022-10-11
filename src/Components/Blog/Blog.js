import React from 'react';
import { useLoaderData } from 'react-router-dom';
import logo from '../Images/hero.jpg'
import './Blog.css'
import BlogDetails from './BlogDetails/BlogDetails';
import BlogInfo from './BlogInfo/BlogInfo';

const Blog = () => {
   const informatios = useLoaderData()
   console.log(informatios)

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
       <div className="flex sm:flex-col lg:flex-row  justify-around w-9/12 m-auto ">
         <div className="sm:order-2 md:order-1">
           <h1 className="text-5xl font-bold mb-5">
             Suhana Salma <i class="fa-solid fa-hand"></i>
           </h1>
           <p className="text-xl font-medium">Web Developer</p>
           <p className="text-sm mt-5">
             I am a Front End Web Developer based in Dhaka Bangladesh. This is
             my <span className="text-3xl font-bold">Blog Site.</span>
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