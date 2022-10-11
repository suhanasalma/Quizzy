import React, { useState } from 'react';
import Path from '../Path/Path'
import './Header.css';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [state,setState]  = useState(false)
   const paths = [
      {id:1, pathName:'Home', pathLink:'/home'},
      {id:2, pathName:'Static', pathLink:'/static'},
      {id:2, pathName:'Blog', pathLink:'/blog'},
   ]
   return (
     <nav className="flex items-center	justify-around w-full	p-5">
       <h1 className="text-4xl font-bold logo">Quizzy</h1>
       <div onClick={() => setState(!state)} className="w-6 h-6 md:hidden">
         {state ? <XMarkIcon /> : <Bars3Icon />}
       </div>
       <ul
         className={` md:flex absolute md:static p-3 duration-500 ease-in ${
           state ? "top-6" : "top-[-320px]"
         }`}
       >
         {paths.map((path) => (
           <Path path={path}></Path>
         ))}
       </ul>
     </nav>
   );
};

export default Header;