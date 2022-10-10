import React from 'react';
import { NavLink } from 'react-router-dom';

const Path = ({path}) => {
   const {id, pathName, pathLink} = path
   return (
      <div>
         <li className='mr-10 font-bold text-lg text-white'>
            <NavLink to={pathLink}>{pathName}</NavLink>
         </li>
      </div>
   );
};

export default Path;