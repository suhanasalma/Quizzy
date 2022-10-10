import React from 'react';

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
             <button className="btn mt-32">Answer</button>
           </div>
         </div>
       </div>
     </div>
   );
};

export default HomeRight;