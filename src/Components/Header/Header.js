import React from 'react';
import Path from '../Path/Path'
import './Header.css'

const Header = () => {
   const paths = [
      {id:1, pathName:'Home', pathLink:'/home'},
      {id:2, pathName:'Static', pathLink:'/static'},
      {id:2, pathName:'Blog', pathLink:'/blog'},
   ]
   return (
     <nav className="flex items-center	justify-around	p-5">
       <h1 className='text-4xl font-bold logo'>Quizzy</h1>
       <ul className="md:flex">
         {paths.map((path) => (
           <Path path={path}></Path>
         ))}
       </ul>
     </nav>
   );
};

export default Header;