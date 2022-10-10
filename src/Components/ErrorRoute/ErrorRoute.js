import React from 'react';
import './ErrorRoute.css'

const ErrorRoute = () => {
   return (
     <div>
       <div className="error-page h-screen flex items-center	justify-center	">
         <div className="error-container border-4 w-2/4	h-2/4 flex items-center	justify-center flex-col text-2xl	 font-bold">
           <h1>Oops!</h1>
           <p>Sorry, an unexpected error has occurred.</p>
           <p>
             <small>404 not found</small>
           </p>
         </div>
       </div>
     </div>
   );
};

export default ErrorRoute;