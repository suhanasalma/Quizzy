import React from 'react';
import { Link } from 'react-router-dom';

const HomeRight = ({quiz}) => {
   const {id, name, logo} = quiz;
   return (
     <div>
       <div className="card w-66 shadow-2xl image-full">
         <figure>
           <img src={logo} />
         </figure>
         <div className="card-body">
           <h2 className="card-title">{name}</h2>
           <div className="card-actions justify-end">
             <Link to={`/quiz/${id}`}>
               <button className="btn mt-32">Answer</button>
             </Link>
           </div>
         </div>
       </div>
     </div>
   );
};

export default HomeRight;