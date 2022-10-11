import React from 'react';
import { NavLink } from 'react-router-dom';

const Path = ({path}) => {
   const {id, pathName, pathLink} = path
   return (
     <div>
       <li className="mr-10 font-bold text-lg text-white sm:text-black">
         <NavLink
           className={`px-3 py-1 rounded-xl ({ isActive }) =>
             isActive ? 'active' : undefined`}
           to={pathLink}
         >
           {pathName}
         </NavLink>
       </li>
     </div>
   );
};

export default Path;