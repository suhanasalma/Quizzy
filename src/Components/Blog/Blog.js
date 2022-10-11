import React from 'react';
import { useLoaderData } from 'react-router-dom';
import logo from '../Images/hero.jpg'
import './Blog.css'

const Blog = () => {
   const informatios = useLoaderData()
   console.log(informatios)

   return (
     <div className="flex mt-20 justify-between w-9/12 m-auto">
       <ul>
         <li className="">
           <a href="">
             <i class="fa-brands fa-facebook  text-3xl mb-5"></i>
           </a>
         </li>
         <li>
           <a href="">
             <i class="fa-brands fa-instagram  text-3xl mb-5"></i>
           </a>
         </li>
         <li>
           <a href="">
             <i class="fa-brands fa-github  text-3xl mb-5"></i>
           </a>
         </li>
       </ul>
       <div className="">
         <h1 className="text-5xl font-bold mb-5">
           Suhana Salma <i class="fa-solid fa-hand"></i>
         </h1>
         <p className="text-xl font-medium">Web Developer</p>
         <p className="text-sm mt-5">
           I am a Front End Web Developer based in Dhaka Bangladesh. This is my{" "}
           <span className='text-3xl font-bold'>Blog Site.</span>
         </p>
       </div>
       <img src={logo} className="w-44 h-44 border-8 object-cover blog-img" alt="" />
     </div>
   );
};

export default Blog;